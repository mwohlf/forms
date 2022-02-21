import {Box, Button, IconButton, TextField, Theme} from "@material-ui/core";
import {AbstractParseTreeVisitor} from "antlr4ts/tree";
import times from 'lodash/times';
import React from "react";
import {FaBarcode, FaMinus, FaPlus, FaQrcode} from "react-icons/fa";
import {DataElementContext, DataGroupContext, ProcessDataFormContext, WidgetContext} from "../generated/ProcessDataFormParser";

// Extend the AbstractParseTreeVisitor to get default visitor behaviour
import {ProcessDataFormVisitor} from "../generated/ProcessDataFormVisitor";
import {ExpressionResolver} from "./ExpressionResolver";
import {CharStreams, CommonTokenStream} from "antlr4ts";
import {ExpressionValueLexer} from "../generated/ExpressionValueLexer";
import {ExpressionValueParser} from "../generated/ExpressionValueParser";
import TextInputWidget from "./DataWidgets";

const JSON_PATH_ROOT = "$"
const JSON_PATH_SEPARATOR = "."

const triggerScanPopup = () => {
    console.log("a scanner would be nice here")
};

// return true if the cloe flag is set for the current group or element
const isCloneable = (ctx: DataGroupContext | DataElementContext): boolean => {
    // the group or element can be cloned
    const cloneableContext = ctx.isCloneable()
    if (!cloneableContext) {
        return false
    } else {
        return cloneableContext.text.endsWith("true");
    }
};

const trimQuotes = (before: string | undefined): string => {
    if (!before || before.length < 3 || before.charAt(0) !== '"' || before.charAt(before.length - 1) !== '"') {
        return before || ""
    } else {
        return before.substring(1, before.length - 1);
    }
};

const idResolver = (child: number, ctx: DataGroupContext | DataElementContext) => trimQuotes(ctx.dataId().ID_STRING().toString()) + "[" + child + "]";

const getDataId = (ctx: DataGroupContext | DataElementContext) => trimQuotes(ctx.dataId().ID_STRING().toString());

const sendToBackend = (formState: {}) => {
    console.log(JSON.stringify(formState, null, 2));
};
const flatten = (formState: {}): {} => {
    return formState;
};


export class FormRenderer extends AbstractParseTreeVisitor<React.ReactElement> implements ProcessDataFormVisitor<React.ReactElement> {

    private globalFormState = {};
    // private expressionResolver = new ExpressionResolver(this.globalFormState);
    // the pointer into the elementId structure
    private currentState: any = this.globalFormState;
    private currentJsonPath: string = "";

    constructor(
        private setState: (value: any) => void,
        private theme: Theme,
    ) {
        super();
    }

    // render a clone and delete button, call setState when we add/remove clones
    renderCloneButton(i: number, cloneContext: any): React.ReactElement {
        return (<>
            {((i + 1) === cloneContext.clones.length) ? (
                <IconButton size="small" onClick={() => {
                    cloneContext.clones.push({});
                    this.setState({...this.globalFormState});
                }}><FaPlus color={this.theme.palette.primary.main}/>
                </IconButton>
            ) : (<></>)}
            {((i + 1) === cloneContext.clones.length && i > 0) ? (
                <IconButton size="small" onClick={() => {
                    cloneContext.clones.splice(-1);
                    this.setState({...this.globalFormState});
                }}><FaMinus color={this.theme.palette.primary.main}/>
                </IconButton>
            ) : (<></>)}
        </>);
    }

    // -- overriding

    // rule 0 entry point of the grammar
    visitProcessDataForm = (ctx: ProcessDataFormContext): React.ReactElement => {
        console.debug("*** visitProcessDataForm: ", ctx);
        this.currentJsonPath = JSON_PATH_ROOT; // start at the root
        this.currentState = this.globalFormState;
        console.log("root node rendering, globalFormState:", this.globalFormState);
        return (
            <>
                <h2>{trimQuotes(ctx.processInfo()?.labelString()?.text)}</h2>
                {this.visit(ctx.dataInput())}
                <br/><br/>
                <Button variant="contained" onClick={() => sendToBackend(flatten(this.globalFormState))}>Send</Button>
            </>
        )
    }

    // a group of elements, the whole group can optionally be cloned
    visitDataGroup = (ctx: DataGroupContext): React.ReactElement => {
        console.debug("*** visitDataGroup: ", ctx);

        const dataId = getDataId(ctx);
        if (this.currentState && !this.currentState.hasOwnProperty(dataId as PropertyKey)) {
            this.currentState[`${dataId}`] = {
                cloneCount: 1,
                clones: [{}],
            };
        }
        return (
            <>
                {times(this.currentState[`${dataId}`].clones.length, (i) => {
                    const rememberCurrentJsonPath = this.currentJsonPath;
                    const rememberCurrentState = this.currentState;
                    this.currentJsonPath += JSON_PATH_SEPARATOR + idResolver(i, ctx);
                    this.currentState = this.currentState[`${dataId}`].clones[i];
                    const result = (
                        <Box width="100%" key={i}>
                            <Box display="flex" flexDirection="row" alignItems="center" paddingLeft={0} paddingRight={0}>
                                {this.visit(ctx.dataInput())}
                            </Box>
                            {isCloneable(ctx) ? this.renderCloneButton(i, rememberCurrentState[`${dataId}`]) : <></>}
                        </Box>
                    );
                    this.currentState = rememberCurrentState;
                    this.currentJsonPath = rememberCurrentJsonPath;
                    return result;
                })}
            </>
        );
    }

    // there is no recursion, this is a terminal node (besides the widgets)
    visitDataElement = (ctx: DataElementContext): React.ReactElement => {
        console.debug("*** visitDataElement: ", ctx);

        const dataId = getDataId(ctx);
        if (this.currentState && !this.currentState.hasOwnProperty(dataId as PropertyKey)) {
            this.currentState[`${dataId}`] = {
                cloneCount: 1,
                clones: [{}],
            };
        }
        return (
            <>
                {times(this.currentState[`${dataId}`].clones.length, (i) => (
                    <Box width="100%" key={i}>
                        <Box display="flex" flexDirection="row" alignItems="center" paddingLeft={3} paddingRight={3}>
                            {this.renderWidget(i, ctx, this.currentState[`${dataId}`].clones[i])}
                            {isCloneable(ctx) ? this.renderCloneButton(i, this.currentState[`${dataId}`]) : <></>}
                        </Box>
                    </Box>
                ))}
            </>
        );
    }

    visitWidget = (ctx: WidgetContext): React.ReactElement => {
        const widgetType = trimQuotes(ctx.WIDGET_TYPE().text);
        switch (widgetType) {
            case "HorizontalRow":
                return (<hr/>);
            case "SectionTitle":
                return (<h3> {trimQuotes(ctx.label()?.labelString().text)} </h3>);
            case "SubSectionTitle":
                return (<h4> {trimQuotes(ctx.label()?.labelString().text)} </h4>);
            default:
                console.error("undefined widget type: ", widgetType);
                return (<></>);
        }
    }

    protected defaultResult(): React.ReactElement {
        return (<></>);
    }

    // a single elements which might be cloned and appended, so we have to loop over potential clones here

    protected aggregateResult(currentResult: React.ReactElement, nextResult: React.ReactElement): React.ReactElement {
        return (
            <>
                {currentResult}
                {nextResult}
            </>
        );
    }

    private renderWidget(i: number, ctx: DataElementContext, clonedContext: any): React.ReactElement {
        console.error("*** renderWidget, cloneContext: ", clonedContext);

        // value from the form config only used when nothing is there yet
        if (!clonedContext['value']) {
            clonedContext['value'] = ctx.dataWidget().value()?.TEXT_STRING()?.text || "";
        }
        const widgetType = trimQuotes(ctx.dataWidget().INPUT_WIDGET_TYPE()?.text);

        const expressionString = trimQuotes(ctx.dataWidget().expression()?.TEXT_STRING()?.text);
        if (expressionString) {
            let lexer = new ExpressionValueLexer(CharStreams.fromString(expressionString));
            let tokenStream = new CommonTokenStream(lexer);
            let parser = new ExpressionValueParser(tokenStream);
            let tree = parser.expressionValue();

            let expressionValue = new ExpressionResolver(this.globalFormState, this.currentJsonPath).visit(tree);
            if (expressionValue) {
                clonedContext['value'] = expressionValue;
            }
            console.error("*** expressionValue resolved: ", expressionValue);
        }

        console.debug("*** renderWidget, cloneContext: ", this.currentJsonPath);

        switch (widgetType) {
            case "QRCodeScan":
                return (<TextField
                    onChange={event => {
                        console.log("value: ", event.target.value);
                        clonedContext['value'] = event.target.value;
                    }}
                    onBlur={event => {
                        clonedContext['value'] = event.target.value;
                        this.setState({...this.globalFormState});
                    }}
                    variant="outlined"
                    margin="normal"
                    label={trimQuotes(ctx.dataWidget().label()?.labelString().text) + " - " + this.currentJsonPath + JSON_PATH_SEPARATOR + idResolver(i, ctx)}
                    fullWidth
                    InputProps={{
                        endAdornment: (
                            <IconButton size="medium" onClick={() => triggerScanPopup()}>
                                <FaQrcode color={this.theme.palette.primary.main}/>
                            </IconButton>
                        )
                    }}
                />)
            case "BarCodeScan":
                return (<TextField
                    onChange={event => {
                        console.log("value: ", event.target.value);
                        clonedContext['value'] = event.target.value;
                    }}
                    variant="outlined"
                    margin="normal"
                    label={trimQuotes(ctx.dataWidget().label()?.labelString().text) + " - " + this.currentJsonPath + JSON_PATH_SEPARATOR + idResolver(i, ctx)}
                    fullWidth
                    InputProps={{
                        endAdornment: (
                            <IconButton size="medium" onClick={() => triggerScanPopup()}>
                                <FaBarcode color={this.theme.palette.primary.main}/>
                            </IconButton>
                        )
                    }}
                />)
            case "TextInput":
                return (<TextInputWidget
                    context={clonedContext}
                    formUpdate={(next) => {
                        console.log(" ///// next value is ", next);
                        clonedContext['value'] = next;
                        this.setState({...this.globalFormState});
                    }}
                    label={trimQuotes(ctx.dataWidget().label()?.labelString().text) + " - " + this.currentJsonPath + JSON_PATH_SEPARATOR + idResolver(i, ctx)}
                />)
            case "SelectBox":
            case "MultiSelectBox":
            case "Tickbox":
            default:
                console.error("undefined widget type in renderWidget: ", widgetType);
                return (<></>);

        }

    }

}
