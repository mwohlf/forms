// Generated from ../etc/grammar/ProcessDataForm.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ProcessDataFormContext } from "./ProcessDataFormParser";
import { ProcessInfoContext } from "./ProcessDataFormParser";
import { DataInputContext } from "./ProcessDataFormParser";
import { DataGroupContext } from "./ProcessDataFormParser";
import { DataElementContext } from "./ProcessDataFormParser";
import { WidgetContext } from "./ProcessDataFormParser";
import { DataIdContext } from "./ProcessDataFormParser";
import { IsCloneableContext } from "./ProcessDataFormParser";
import { DataWidgetContext } from "./ProcessDataFormParser";
import { DataTypeContext } from "./ProcessDataFormParser";
import { LabelContext } from "./ProcessDataFormParser";
import { LabelStringContext } from "./ProcessDataFormParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `ProcessDataFormParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface ProcessDataFormVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `ProcessDataFormParser.processDataForm`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessDataForm?: (ctx: ProcessDataFormContext) => Result;

	/**
	 * Visit a parse tree produced by `ProcessDataFormParser.processInfo`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProcessInfo?: (ctx: ProcessInfoContext) => Result;

	/**
	 * Visit a parse tree produced by `ProcessDataFormParser.dataInput`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataInput?: (ctx: DataInputContext) => Result;

	/**
	 * Visit a parse tree produced by `ProcessDataFormParser.dataGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataGroup?: (ctx: DataGroupContext) => Result;

	/**
	 * Visit a parse tree produced by `ProcessDataFormParser.dataElement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataElement?: (ctx: DataElementContext) => Result;

	/**
	 * Visit a parse tree produced by `ProcessDataFormParser.widget`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWidget?: (ctx: WidgetContext) => Result;

	/**
	 * Visit a parse tree produced by `ProcessDataFormParser.dataId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataId?: (ctx: DataIdContext) => Result;

	/**
	 * Visit a parse tree produced by `ProcessDataFormParser.isCloneable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIsCloneable?: (ctx: IsCloneableContext) => Result;

	/**
	 * Visit a parse tree produced by `ProcessDataFormParser.dataWidget`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataWidget?: (ctx: DataWidgetContext) => Result;

	/**
	 * Visit a parse tree produced by `ProcessDataFormParser.dataType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataType?: (ctx: DataTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `ProcessDataFormParser.label`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabel?: (ctx: LabelContext) => Result;

	/**
	 * Visit a parse tree produced by `ProcessDataFormParser.labelString`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabelString?: (ctx: LabelStringContext) => Result;
}

