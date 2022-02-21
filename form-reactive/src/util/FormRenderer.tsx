import { Box, IconButton, TextField, useTheme } from "@material-ui/core";
import { AbstractParseTreeVisitor } from "antlr4ts/tree";
import times from 'lodash/times';
import React from "react";
import { FaBarcode, FaMinus, FaPlus, FaQrcode } from "react-icons/fa";
import { DataElementContext, DataGroupContext, ProcessDataFormContext, WidgetContext } from "../generated/ProcessDataFormParser";


// Extend the AbstractParseTreeVisitor to get default visitor behaviour
import { ProcessDataFormVisitor } from "../generated/ProcessDataFormVisitor";


const JSON_PATH_ROOT = "$"
const JSON_PATH_SEPARATOR = "."


function triggerScanPopup() {
    console.log("a scanner would be nice here")
}

export class FormRenderer extends AbstractParseTreeVisitor<React.ReactElement> implements ProcessDataFormVisitor<React.ReactElement> {
    private theme = useTheme();

    private formState = {};
    private currentState: any = this.formState;

    private contextMap = new Map(); // TODO we map any data to the ctx elements here to keep track of the current layout (the cloned elements) should be a specific data type

    // the path in the elementId structure
    private currentJsonPath: string = "";

    constructor(
        private forceUpdate: () => void
    ) {
        super();
    }


    isCloneable(ctx: DataGroupContext | DataElementContext): boolean {
        // the group or element can be cloned
        const clonableContext = ctx.isCloneable()
        if (!clonableContext) {
            return false
        } else {
            return clonableContext.text.endsWith("true");
        }
    }

    trimQuotes(before: string | undefined) {
        if (!before || before.length < 3 || before.charAt(0) !== '"' || before.charAt(before.length - 1) !== '"') {
            return before
        } else {
            return before.substring(1, before.length - 1);
        }
    }

    idResolver(child: number, ctx: DataGroupContext | DataElementContext) {
        return this.trimQuotes(ctx.dataId().ID_STRING().toString()) + "[" + child + "]";
    }

    ctxId(ctx: DataGroupContext | DataElementContext) {
        return this.trimQuotes(ctx.dataId().ID_STRING().toString());
    }

    properties(ctx: DataGroupContext | DataElementContext): any {
        if (!this.contextMap.has(ctx)) {
            this.contextMap.set(ctx, {
                counter: 1
            });
        }
        return this.contextMap.get(ctx);
    }

    renderCloneButton(i: number, ctx: DataGroupContext | DataElementContext) {
        const multi = this.isCloneable(ctx);
        const contextProperties = this.properties(ctx);
        return (<>
            {multi && ((i + 1) === contextProperties.counter) ? (
                <IconButton
                    size="small"
                    onClick={() => {
                        contextProperties.counter += 1;
                        this.forceUpdate();
                    }}>
                    <FaPlus color={this.theme.palette.primary.main}/>
                </IconButton>
            ) : (<></>)}
            {multi && ((i + 1) === contextProperties.counter && i > 0) ? (
                <IconButton
                    size="small"
                    onClick={() => {
                        contextProperties.counter -= 1;
                        this.forceUpdate();
                    }}>
                    <FaMinus color={this.theme.palette.primary.main}/>
                </IconButton>
            ) : (<></>)}
        </>);
    }

    // -- overriding

    protected defaultResult(): React.ReactElement {
        return (<></>);
    }

    protected aggregateResult(currentResult: React.ReactElement, nextResult: React.ReactElement): React.ReactElement {
        return (
            <>
                {currentResult}
                {nextResult}
            </>
        );
    }

    private renderWidget(i: number, ctx: DataElementContext) {
        const widgetType = this.trimQuotes(ctx.dataWidget().INPUT_WIDGET_TYPE()?.text);
        switch (widgetType) {
            case "QRCodeScan":
                return (<TextField
                    variant="outlined"
                    margin="normal"
                    label={this.trimQuotes(ctx.dataWidget().label()?.labelString().text) + " - " + this.currentJsonPath + JSON_PATH_SEPARATOR + this.idResolver(i, ctx)}
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
                    variant="outlined"
                    margin="normal"
                    label={this.trimQuotes(ctx.dataWidget().label()?.labelString().text) + " - " + this.currentJsonPath + JSON_PATH_SEPARATOR + this.idResolver(i, ctx)}
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
                return (<TextField
                    variant="outlined"
                    margin="normal"
                    label={this.trimQuotes(ctx.dataWidget().label()?.labelString().text) + " - " + this.currentJsonPath + JSON_PATH_SEPARATOR + this.idResolver(i, ctx)}
                    fullWidth/>)
            case "SelectBox":
            case "MultiSelectBox":
            case "Tickbox":
            default:
                console.error("undefined widget type in renderWidget: ", widgetType);
                return (<></>);

        }

    }

    // rule 0
    visitProcessDataForm = (ctx: ProcessDataFormContext) => {
        this.currentJsonPath = JSON_PATH_ROOT; // start at the root
        this.currentState = this.formState;
        console.log("root node rendering");
        return (
            <>
                <h2>{this.trimQuotes(ctx.processInfo()?.labelString()?.text)}</h2>
                {this.visit(ctx.dataInput())}
            </>
        )
    }

    // a group of elements the whole group can optionally be cloned and appended
    visitDataGroup = (ctx: DataGroupContext) => {
        const id = this.ctxId(ctx);
        if (!this.currentState.hasOwnProperty(id as PropertyKey)) {
            this.currentState[`${id}`] = [];
        }
        const result = (
            <>
                {times(this.properties(ctx).counter, (i) => {
                    const currentIdPath = this.currentJsonPath;
                    this.currentJsonPath += JSON_PATH_SEPARATOR + this.idResolver(i, ctx);  // TODO: convert this into a ctx.enter/exit rule call
                    const result = (
                        <Box width="100%" key={i}>
                            <Box display="flex" flexDirection="row" alignItems="center" paddingLeft={0} paddingRight={0}>
                                {this.visit(ctx.dataInput())}
                            </Box>
                            {this.renderCloneButton(i, ctx)}
                        </Box>
                    );
                    this.currentJsonPath = currentIdPath;
                    return result;
                })}
            </>
        );


        return result
    }

    // a single elements which might be cloned and appended, so we have to loop over potential clones here
    visitDataElement = (ctx: DataElementContext) => {
        return (
            <>
                {times(this.properties(ctx).counter, (i) => (
                    <Box width="100%" key={i}>
                        <Box display="flex" flexDirection="row" alignItems="center" paddingLeft={3} paddingRight={3}>
                            {this.renderWidget(i, ctx)}
                            {this.renderCloneButton(i, ctx)}
                        </Box>
                    </Box>
                ))}
            </>
        );
    }

    visitWidget = (ctx: WidgetContext) => {
        const widgetType = this.trimQuotes(ctx.WIDGET_TYPE().text);
        switch (widgetType) {
            case "HorizontalRow":
                return (<hr/>);
            case "SectionTitle":
                return (<h3> {this.trimQuotes(ctx.label()?.labelString().text)} </h3>);
            case "SubSectionTitle":
                return (<h4> {this.trimQuotes(ctx.label()?.labelString().text)} </h4>);
            default:
                console.error("undefined widget type: ", widgetType);
                return (<></>);
        }
    }

}
