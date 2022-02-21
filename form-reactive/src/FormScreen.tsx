import { CharStreams, CommonTokenStream } from "antlr4ts";
import React, { FunctionComponent, ReactElement, useState } from "react";
import { ProcessDataFormLexer } from "./generated/ProcessDataFormLexer";
import { ProcessDataFormContext, ProcessDataFormParser } from "./generated/ProcessDataFormParser";
import { FormRenderer } from "./util/FormRenderer";


const demo = require('./assets/demo.json');

export const FormScreen: FunctionComponent = (): ReactElement => {

    let inputStream = CharStreams.fromString(JSON.stringify(demo));
    // Create the lexer and parser
    let lexer = new ProcessDataFormLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new ProcessDataFormParser(tokenStream);
    // Parse the input, where `compilationUnit` is whatever entry point you defined
    // ProcessDataFormContext
    let tree = parser.processDataForm();


    const [, updateState] = React.useState<{}>();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const [parseTree, setParseTree] = useState<ProcessDataFormContext>(tree);
    const [renderer, setRenderer] = useState<FormRenderer>(new FormRenderer(forceUpdate));


    return (
        <div className="App">{
            parseTree ? (
                renderer.visit(parseTree)
            ) : (
                <></>
            )
        }</div>
    );
};

export default FormScreen;
