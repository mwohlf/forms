import {AbstractParseTreeVisitor} from "antlr4ts/tree";
import React from "react";
import {ProcessDataFormVisitor} from "../generated/ProcessDataFormVisitor";
import {Theme} from "@material-ui/core";
import {ExpressionValueVisitor} from "../generated/ExpressionValueVisitor";
import {DotnotationContext, ExpressionValueContext} from "../generated/ExpressionValueParser";
import times from "lodash/times";


export class ExpressionResolver extends AbstractParseTreeVisitor<string> implements ExpressionValueVisitor<string> {

    private currentState: any;

    constructor(
        private formState: any,
        private currentPath: string,
    ) {
        super();
    }


    protected defaultResult(): string {
        return "";
    }

    visitExpressionValue = (ctx: ExpressionValueContext) => {
        console.log("### visitExpressionValue ", ctx.dotnotation().text)
        this.currentState = this.formState;
        return this.visit(ctx.dotnotation())
    };

    visitDotnotation = (ctx: DotnotationContext) => {
        console.log("### ctx.identifierWithQualifier() ", ctx.identifierWithQualifier())
        let elements = ctx.identifierWithQualifier()
        times(elements.length, (i) => {
            let identifier = elements[i].INDENTIFIER().text
            let qualifier = elements[i].INT().text
            if (this.currentState && this.currentState.hasOwnProperty(identifier as PropertyKey)) {
                console.log("### identifier->", identifier)
                console.log("### qualifier->", qualifier)
                this.currentState = this.currentState[`${identifier}`].clones[qualifier];
            }
        });
        return this.currentState.value;
    };

}
