import React, {FunctionComponent, ReactElement, useState} from "react";
import { CharStreams, CommonTokenStream } from "antlr4ts";
import {Button, TextField, useTheme} from "@material-ui/core";
import {ParseTree} from "antlr4ts/tree";


export const TextInputWidget: FunctionComponent<{ context: any, label: string, formUpdate: (next: string) => void } > = (
    props,
): ReactElement => {
    console.log("props: ",  props);

    const [textValue, setTextValue] = useState(props.context?.value || "");
        console.log("context: ",  props.context);

        let result = (<TextField
        value={textValue}
        onChange={event => {
            props.context.value = event.target.value;
            setTextValue(event.target.value)
        }}
        onBlur={event => {
            props.context.value = event.target.value;
            props.formUpdate(event.target.value)
        }}
        variant="outlined"
        margin="normal"
        label={props.label}
        fullWidth/>)
    return result;
}

export default TextInputWidget;
