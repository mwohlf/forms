import { CharStreams, CommonTokenStream } from "antlr4ts";
import React, {FunctionComponent, ReactElement, useMemo, useState} from "react";
import { ProcessDataFormLexer } from "./generated/ProcessDataFormLexer";
import { ProcessDataFormContext, ProcessDataFormParser } from "./generated/ProcessDataFormParser";
import { FormRenderer } from "./util/FormRenderer";
import {Button, useTheme} from "@material-ui/core";
import {ParseTree} from "antlr4ts/tree";


const demo = require('./assets/demo.json');



export const FormScreen: FunctionComponent = (): ReactElement => {
    const theme = useTheme();

    let inputStream = CharStreams.fromString(JSON.stringify(demo));
    // Create the lexer and parser
    let lexer = new ProcessDataFormLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new ProcessDataFormParser(tokenStream);
    // Parse the input, where `compilationUnit` is whatever entry point you defined
    // ProcessDataFormContext
    let tree = parser.processDataForm();

    // The setState function is used to update the state.
    // It accepts a new state value and enqueues a re-render of the component.
    const [formState, setFormState] = useState({});
    const renderer = useMemo<FormRenderer>(() => new FormRenderer(setFormState, theme), [theme]);

    return (
        <div className="App">
            {
                tree ? (
                    renderer.visit(tree)
                ) : (
                    <></>
                )
            }
        </div>
    );
};

export default FormScreen;
