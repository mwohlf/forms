// Generated from ../etc/grammar/ProcessDataForm.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `ProcessDataFormParser`.
 */
export interface ProcessDataFormListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ProcessDataFormParser.processDataForm`.
	 * @param ctx the parse tree
	 */
	enterProcessDataForm?: (ctx: ProcessDataFormContext) => void;
	/**
	 * Exit a parse tree produced by `ProcessDataFormParser.processDataForm`.
	 * @param ctx the parse tree
	 */
	exitProcessDataForm?: (ctx: ProcessDataFormContext) => void;

	/**
	 * Enter a parse tree produced by `ProcessDataFormParser.processInfo`.
	 * @param ctx the parse tree
	 */
	enterProcessInfo?: (ctx: ProcessInfoContext) => void;
	/**
	 * Exit a parse tree produced by `ProcessDataFormParser.processInfo`.
	 * @param ctx the parse tree
	 */
	exitProcessInfo?: (ctx: ProcessInfoContext) => void;

	/**
	 * Enter a parse tree produced by `ProcessDataFormParser.dataInput`.
	 * @param ctx the parse tree
	 */
	enterDataInput?: (ctx: DataInputContext) => void;
	/**
	 * Exit a parse tree produced by `ProcessDataFormParser.dataInput`.
	 * @param ctx the parse tree
	 */
	exitDataInput?: (ctx: DataInputContext) => void;

	/**
	 * Enter a parse tree produced by `ProcessDataFormParser.dataGroup`.
	 * @param ctx the parse tree
	 */
	enterDataGroup?: (ctx: DataGroupContext) => void;
	/**
	 * Exit a parse tree produced by `ProcessDataFormParser.dataGroup`.
	 * @param ctx the parse tree
	 */
	exitDataGroup?: (ctx: DataGroupContext) => void;

	/**
	 * Enter a parse tree produced by `ProcessDataFormParser.dataElement`.
	 * @param ctx the parse tree
	 */
	enterDataElement?: (ctx: DataElementContext) => void;
	/**
	 * Exit a parse tree produced by `ProcessDataFormParser.dataElement`.
	 * @param ctx the parse tree
	 */
	exitDataElement?: (ctx: DataElementContext) => void;

	/**
	 * Enter a parse tree produced by `ProcessDataFormParser.widget`.
	 * @param ctx the parse tree
	 */
	enterWidget?: (ctx: WidgetContext) => void;
	/**
	 * Exit a parse tree produced by `ProcessDataFormParser.widget`.
	 * @param ctx the parse tree
	 */
	exitWidget?: (ctx: WidgetContext) => void;

	/**
	 * Enter a parse tree produced by `ProcessDataFormParser.dataId`.
	 * @param ctx the parse tree
	 */
	enterDataId?: (ctx: DataIdContext) => void;
	/**
	 * Exit a parse tree produced by `ProcessDataFormParser.dataId`.
	 * @param ctx the parse tree
	 */
	exitDataId?: (ctx: DataIdContext) => void;

	/**
	 * Enter a parse tree produced by `ProcessDataFormParser.isCloneable`.
	 * @param ctx the parse tree
	 */
	enterIsCloneable?: (ctx: IsCloneableContext) => void;
	/**
	 * Exit a parse tree produced by `ProcessDataFormParser.isCloneable`.
	 * @param ctx the parse tree
	 */
	exitIsCloneable?: (ctx: IsCloneableContext) => void;

	/**
	 * Enter a parse tree produced by `ProcessDataFormParser.dataWidget`.
	 * @param ctx the parse tree
	 */
	enterDataWidget?: (ctx: DataWidgetContext) => void;
	/**
	 * Exit a parse tree produced by `ProcessDataFormParser.dataWidget`.
	 * @param ctx the parse tree
	 */
	exitDataWidget?: (ctx: DataWidgetContext) => void;

	/**
	 * Enter a parse tree produced by `ProcessDataFormParser.dataType`.
	 * @param ctx the parse tree
	 */
	enterDataType?: (ctx: DataTypeContext) => void;
	/**
	 * Exit a parse tree produced by `ProcessDataFormParser.dataType`.
	 * @param ctx the parse tree
	 */
	exitDataType?: (ctx: DataTypeContext) => void;

	/**
	 * Enter a parse tree produced by `ProcessDataFormParser.label`.
	 * @param ctx the parse tree
	 */
	enterLabel?: (ctx: LabelContext) => void;
	/**
	 * Exit a parse tree produced by `ProcessDataFormParser.label`.
	 * @param ctx the parse tree
	 */
	exitLabel?: (ctx: LabelContext) => void;

	/**
	 * Enter a parse tree produced by `ProcessDataFormParser.labelString`.
	 * @param ctx the parse tree
	 */
	enterLabelString?: (ctx: LabelStringContext) => void;
	/**
	 * Exit a parse tree produced by `ProcessDataFormParser.labelString`.
	 * @param ctx the parse tree
	 */
	exitLabelString?: (ctx: LabelStringContext) => void;
}

