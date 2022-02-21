// Generated from ../etc/grammar/ProcessDataForm.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { ProcessDataFormListener } from "./ProcessDataFormListener";
import { ProcessDataFormVisitor } from "./ProcessDataFormVisitor";


export class ProcessDataFormParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly GROUP_ELEMENTS_LABEL = 17;
	public static readonly WIDGET_TYPE = 18;
	public static readonly INPUT_WIDGET_TYPE = 19;
	public static readonly ID_STRING = 20;
	public static readonly STRING = 21;
	public static readonly NUMBER = 22;
	public static readonly WS = 23;
	public static readonly RULE_processDataForm = 0;
	public static readonly RULE_processInfo = 1;
	public static readonly RULE_dataInput = 2;
	public static readonly RULE_dataGroup = 3;
	public static readonly RULE_dataElement = 4;
	public static readonly RULE_widget = 5;
	public static readonly RULE_dataId = 6;
	public static readonly RULE_isCloneable = 7;
	public static readonly RULE_dataWidget = 8;
	public static readonly RULE_dataType = 9;
	public static readonly RULE_label = 10;
	public static readonly RULE_labelString = 11;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"processDataForm", "processInfo", "dataInput", "dataGroup", "dataElement", 
		"widget", "dataId", "isCloneable", "dataWidget", "dataType", "label", 
		"labelString",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'['", "','", "']'", "'{'", "'\"processName\"'", "':'", "'}'", 
		"'\"widgetType\"'", "'\"dataId\"'", "'\"cloneable\"'", "'true'", "'false'", 
		"'\"dataType\"'", "'\"string\"'", "'\"number\"'", "'\"label\"'", "'\"elements\"'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "GROUP_ELEMENTS_LABEL", "WIDGET_TYPE", 
		"INPUT_WIDGET_TYPE", "ID_STRING", "STRING", "NUMBER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(ProcessDataFormParser._LITERAL_NAMES, ProcessDataFormParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return ProcessDataFormParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ProcessDataForm.g4"; }

	// @Override
	public get ruleNames(): string[] { return ProcessDataFormParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return ProcessDataFormParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(ProcessDataFormParser._ATN, this);
	}
	// @RuleVersion(0)
	public processDataForm(): ProcessDataFormContext {
		let _localctx: ProcessDataFormContext = new ProcessDataFormContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, ProcessDataFormParser.RULE_processDataForm);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 24;
			this.match(ProcessDataFormParser.T__0);
			this.state = 28;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ProcessDataFormParser.T__3) {
				{
				this.state = 25;
				this.processInfo();
				this.state = 26;
				this.match(ProcessDataFormParser.T__1);
				}
			}

			this.state = 30;
			this.dataInput();
			this.state = 31;
			this.match(ProcessDataFormParser.T__2);
			this.state = 32;
			this.match(ProcessDataFormParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public processInfo(): ProcessInfoContext {
		let _localctx: ProcessInfoContext = new ProcessInfoContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, ProcessDataFormParser.RULE_processInfo);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 34;
			this.match(ProcessDataFormParser.T__3);
			this.state = 38;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ProcessDataFormParser.T__4) {
				{
				this.state = 35;
				this.match(ProcessDataFormParser.T__4);
				this.state = 36;
				this.match(ProcessDataFormParser.T__5);
				this.state = 37;
				this.labelString();
				}
			}

			this.state = 40;
			this.match(ProcessDataFormParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataInput(): DataInputContext {
		let _localctx: DataInputContext = new DataInputContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, ProcessDataFormParser.RULE_dataInput);
		let _la: number;
		try {
			this.state = 62;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 42;
				this.match(ProcessDataFormParser.T__0);
				this.state = 45;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 43;
					this.dataElement();
					}
					break;

				case 2:
					{
					this.state = 44;
					this.dataGroup();
					}
					break;
				}
				this.state = 55;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === ProcessDataFormParser.T__1) {
					{
					{
					this.state = 47;
					this.match(ProcessDataFormParser.T__1);
					this.state = 51;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
					case 1:
						{
						this.state = 48;
						this.dataElement();
						}
						break;

					case 2:
						{
						this.state = 49;
						this.dataGroup();
						}
						break;

					case 3:
						{
						this.state = 50;
						this.widget();
						}
						break;
					}
					}
					}
					this.state = 57;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 58;
				this.match(ProcessDataFormParser.T__2);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 60;
				this.match(ProcessDataFormParser.T__0);
				this.state = 61;
				this.match(ProcessDataFormParser.T__2);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataGroup(): DataGroupContext {
		let _localctx: DataGroupContext = new DataGroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, ProcessDataFormParser.RULE_dataGroup);
		let _la: number;
		try {
			this.state = 84;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 64;
				this.dataId();
				this.state = 65;
				this.match(ProcessDataFormParser.T__1);
				this.state = 66;
				this.match(ProcessDataFormParser.GROUP_ELEMENTS_LABEL);
				this.state = 67;
				this.match(ProcessDataFormParser.T__5);
				this.state = 68;
				this.dataInput();
				this.state = 70;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ProcessDataFormParser.T__1 || _la === ProcessDataFormParser.T__3) {
					{
					this.state = 69;
					this.isCloneable();
					}
				}

				this.state = 72;
				this.match(ProcessDataFormParser.T__6);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 74;
				this.match(ProcessDataFormParser.T__3);
				this.state = 75;
				this.match(ProcessDataFormParser.GROUP_ELEMENTS_LABEL);
				this.state = 76;
				this.match(ProcessDataFormParser.T__5);
				this.state = 77;
				this.dataInput();
				this.state = 78;
				this.dataId();
				this.state = 80;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ProcessDataFormParser.T__1 || _la === ProcessDataFormParser.T__3) {
					{
					this.state = 79;
					this.isCloneable();
					}
				}

				this.state = 82;
				this.match(ProcessDataFormParser.T__6);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataElement(): DataElementContext {
		let _localctx: DataElementContext = new DataElementContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, ProcessDataFormParser.RULE_dataElement);
		let _la: number;
		try {
			this.state = 102;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 86;
				this.dataId();
				this.state = 87;
				this.match(ProcessDataFormParser.T__1);
				this.state = 88;
				this.dataWidget();
				this.state = 90;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ProcessDataFormParser.T__1 || _la === ProcessDataFormParser.T__3) {
					{
					this.state = 89;
					this.isCloneable();
					}
				}

				this.state = 92;
				this.match(ProcessDataFormParser.T__6);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 94;
				this.match(ProcessDataFormParser.T__3);
				this.state = 95;
				this.dataWidget();
				this.state = 96;
				this.dataId();
				this.state = 98;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === ProcessDataFormParser.T__1 || _la === ProcessDataFormParser.T__3) {
					{
					this.state = 97;
					this.isCloneable();
					}
				}

				this.state = 100;
				this.match(ProcessDataFormParser.T__6);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public widget(): WidgetContext {
		let _localctx: WidgetContext = new WidgetContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, ProcessDataFormParser.RULE_widget);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 104;
			this.match(ProcessDataFormParser.T__3);
			this.state = 105;
			this.match(ProcessDataFormParser.T__7);
			this.state = 106;
			this.match(ProcessDataFormParser.T__5);
			this.state = 107;
			this.match(ProcessDataFormParser.WIDGET_TYPE);
			this.state = 110;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === ProcessDataFormParser.T__1) {
				{
				this.state = 108;
				this.match(ProcessDataFormParser.T__1);
				this.state = 109;
				this.label();
				}
			}

			this.state = 112;
			this.match(ProcessDataFormParser.T__6);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataId(): DataIdContext {
		let _localctx: DataIdContext = new DataIdContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, ProcessDataFormParser.RULE_dataId);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 114;
			_la = this._input.LA(1);
			if (!(_la === ProcessDataFormParser.T__1 || _la === ProcessDataFormParser.T__3)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 115;
			this.match(ProcessDataFormParser.T__8);
			this.state = 116;
			this.match(ProcessDataFormParser.T__5);
			this.state = 117;
			this.match(ProcessDataFormParser.ID_STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public isCloneable(): IsCloneableContext {
		let _localctx: IsCloneableContext = new IsCloneableContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, ProcessDataFormParser.RULE_isCloneable);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 119;
			_la = this._input.LA(1);
			if (!(_la === ProcessDataFormParser.T__1 || _la === ProcessDataFormParser.T__3)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 120;
			this.match(ProcessDataFormParser.T__9);
			this.state = 121;
			this.match(ProcessDataFormParser.T__5);
			this.state = 122;
			_la = this._input.LA(1);
			if (!(_la === ProcessDataFormParser.T__10 || _la === ProcessDataFormParser.T__11)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataWidget(): DataWidgetContext {
		let _localctx: DataWidgetContext = new DataWidgetContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, ProcessDataFormParser.RULE_dataWidget);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			{
			this.state = 124;
			this.match(ProcessDataFormParser.T__7);
			this.state = 125;
			this.match(ProcessDataFormParser.T__5);
			this.state = 126;
			this.match(ProcessDataFormParser.INPUT_WIDGET_TYPE);
			}
			{
			this.state = 128;
			this.match(ProcessDataFormParser.T__1);
			this.state = 129;
			this.dataType();
			}
			{
			this.state = 131;
			this.match(ProcessDataFormParser.T__1);
			this.state = 132;
			this.label();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public dataType(): DataTypeContext {
		let _localctx: DataTypeContext = new DataTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, ProcessDataFormParser.RULE_dataType);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			this.match(ProcessDataFormParser.T__12);
			this.state = 135;
			this.match(ProcessDataFormParser.T__5);
			this.state = 136;
			_la = this._input.LA(1);
			if (!(_la === ProcessDataFormParser.T__13 || _la === ProcessDataFormParser.T__14)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public label(): LabelContext {
		let _localctx: LabelContext = new LabelContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, ProcessDataFormParser.RULE_label);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 138;
			this.match(ProcessDataFormParser.T__15);
			this.state = 139;
			this.match(ProcessDataFormParser.T__5);
			this.state = 140;
			this.labelString();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labelString(): LabelStringContext {
		let _localctx: LabelStringContext = new LabelStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, ProcessDataFormParser.RULE_labelString);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 142;
			_la = this._input.LA(1);
			if (!(_la === ProcessDataFormParser.ID_STRING || _la === ProcessDataFormParser.STRING)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x19\x93\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
		"\x02\x03\x02\x03\x02\x03\x02\x05\x02\x1F\n\x02\x03\x02\x03\x02\x03\x02" +
		"\x03\x02\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03)\n\x03\x03\x03\x03\x03" +
		"\x03\x04\x03\x04\x03\x04\x05\x040\n\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x05\x046\n\x04\x07\x048\n\x04\f\x04\x0E\x04;\v\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x05\x04A\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x05\x05I\n\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x03" +
		"\x05\x03\x05\x05\x05S\n\x05\x03\x05\x03\x05\x05\x05W\n\x05\x03\x06\x03" +
		"\x06\x03\x06\x03\x06\x05\x06]\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x03\x06\x05\x06e\n\x06\x03\x06\x03\x06\x05\x06i\n\x06\x03\x07\x03" +
		"\x07\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07q\n\x07\x03\x07\x03\x07\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\n\x03\n\x03" +
		"\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03" +
		"\f\x03\f\x03\f\x03\f\x03\r\x03\r\x03\r\x02\x02\x02\x0E\x02\x02\x04\x02" +
		"\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18" +
		"\x02\x02\x06\x04\x02\x04\x04\x06\x06\x03\x02\r\x0E\x03\x02\x10\x11\x03" +
		"\x02\x16\x17\x02\x94\x02\x1A\x03\x02\x02\x02\x04$\x03\x02\x02\x02\x06" +
		"@\x03\x02\x02\x02\bV\x03\x02\x02\x02\nh\x03\x02\x02\x02\fj\x03\x02\x02" +
		"\x02\x0Et\x03\x02\x02\x02\x10y\x03\x02\x02\x02\x12~\x03\x02\x02\x02\x14" +
		"\x88\x03\x02\x02\x02\x16\x8C\x03\x02\x02\x02\x18\x90\x03\x02\x02\x02\x1A" +
		"\x1E\x07\x03\x02\x02\x1B\x1C\x05\x04\x03\x02\x1C\x1D\x07\x04\x02\x02\x1D" +
		"\x1F\x03\x02\x02\x02\x1E\x1B\x03\x02\x02\x02\x1E\x1F\x03\x02\x02\x02\x1F" +
		" \x03\x02\x02\x02 !\x05\x06\x04\x02!\"\x07\x05\x02\x02\"#\x07\x02\x02" +
		"\x03#\x03\x03\x02\x02\x02$(\x07\x06\x02\x02%&\x07\x07\x02\x02&\'\x07\b" +
		"\x02\x02\')\x05\x18\r\x02(%\x03\x02\x02\x02()\x03\x02\x02\x02)*\x03\x02" +
		"\x02\x02*+\x07\t\x02\x02+\x05\x03\x02\x02\x02,/\x07\x03\x02\x02-0\x05" +
		"\n\x06\x02.0\x05\b\x05\x02/-\x03\x02\x02\x02/.\x03\x02\x02\x0209\x03\x02" +
		"\x02\x0215\x07\x04\x02\x0226\x05\n\x06\x0236\x05\b\x05\x0246\x05\f\x07" +
		"\x0252\x03\x02\x02\x0253\x03\x02\x02\x0254\x03\x02\x02\x0268\x03\x02\x02" +
		"\x0271\x03\x02\x02\x028;\x03\x02\x02\x0297\x03\x02\x02\x029:\x03\x02\x02" +
		"\x02:<\x03\x02\x02\x02;9\x03\x02\x02\x02<=\x07\x05\x02\x02=A\x03\x02\x02" +
		"\x02>?\x07\x03\x02\x02?A\x07\x05\x02\x02@,\x03\x02\x02\x02@>\x03\x02\x02" +
		"\x02A\x07\x03\x02\x02\x02BC\x05\x0E\b\x02CD\x07\x04\x02\x02DE\x07\x13" +
		"\x02\x02EF\x07\b\x02\x02FH\x05\x06\x04\x02GI\x05\x10\t\x02HG\x03\x02\x02" +
		"\x02HI\x03\x02\x02\x02IJ\x03\x02\x02\x02JK\x07\t\x02\x02KW\x03\x02\x02" +
		"\x02LM\x07\x06\x02\x02MN\x07\x13\x02\x02NO\x07\b\x02\x02OP\x05\x06\x04" +
		"\x02PR\x05\x0E\b\x02QS\x05\x10\t\x02RQ\x03\x02\x02\x02RS\x03\x02\x02\x02" +
		"ST\x03\x02\x02\x02TU\x07\t\x02\x02UW\x03\x02\x02\x02VB\x03\x02\x02\x02" +
		"VL\x03\x02\x02\x02W\t\x03\x02\x02\x02XY\x05\x0E\b\x02YZ\x07\x04\x02\x02" +
		"Z\\\x05\x12\n\x02[]\x05\x10\t\x02\\[\x03\x02\x02\x02\\]\x03\x02\x02\x02" +
		"]^\x03\x02\x02\x02^_\x07\t\x02\x02_i\x03\x02\x02\x02`a\x07\x06\x02\x02" +
		"ab\x05\x12\n\x02bd\x05\x0E\b\x02ce\x05\x10\t\x02dc\x03\x02\x02\x02de\x03" +
		"\x02\x02\x02ef\x03\x02\x02\x02fg\x07\t\x02\x02gi\x03\x02\x02\x02hX\x03" +
		"\x02\x02\x02h`\x03\x02\x02\x02i\v\x03\x02\x02\x02jk\x07\x06\x02\x02kl" +
		"\x07\n\x02\x02lm\x07\b\x02\x02mp\x07\x14\x02\x02no\x07\x04\x02\x02oq\x05" +
		"\x16\f\x02pn\x03\x02\x02\x02pq\x03\x02\x02\x02qr\x03\x02\x02\x02rs\x07" +
		"\t\x02\x02s\r\x03\x02\x02\x02tu\t\x02\x02\x02uv\x07\v\x02\x02vw\x07\b" +
		"\x02\x02wx\x07\x16\x02\x02x\x0F\x03\x02\x02\x02yz\t\x02\x02\x02z{\x07" +
		"\f\x02\x02{|\x07\b\x02\x02|}\t\x03\x02\x02}\x11\x03\x02\x02\x02~\x7F\x07" +
		"\n\x02\x02\x7F\x80\x07\b\x02\x02\x80\x81\x07\x15\x02\x02\x81\x82\x03\x02" +
		"\x02\x02\x82\x83\x07\x04\x02\x02\x83\x84\x05\x14\v\x02\x84\x85\x03\x02" +
		"\x02\x02\x85\x86\x07\x04\x02\x02\x86\x87\x05\x16\f\x02\x87\x13\x03\x02" +
		"\x02\x02\x88\x89\x07\x0F\x02\x02\x89\x8A\x07\b\x02\x02\x8A\x8B\t\x04\x02" +
		"\x02\x8B\x15\x03\x02\x02\x02\x8C\x8D\x07\x12\x02\x02\x8D\x8E\x07\b\x02" +
		"\x02\x8E\x8F\x05\x18\r\x02\x8F\x17\x03\x02\x02\x02\x90\x91\t\x05\x02\x02" +
		"\x91\x19\x03\x02\x02\x02\x0F\x1E(/59@HRV\\dhp";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ProcessDataFormParser.__ATN) {
			ProcessDataFormParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(ProcessDataFormParser._serializedATN));
		}

		return ProcessDataFormParser.__ATN;
	}

}

export class ProcessDataFormContext extends ParserRuleContext {
	public dataInput(): DataInputContext {
		return this.getRuleContext(0, DataInputContext);
	}
	public EOF(): TerminalNode { return this.getToken(ProcessDataFormParser.EOF, 0); }
	public processInfo(): ProcessInfoContext | undefined {
		return this.tryGetRuleContext(0, ProcessInfoContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessDataFormParser.RULE_processDataForm; }
	// @Override
	public enterRule(listener: ProcessDataFormListener): void {
		if (listener.enterProcessDataForm) {
			listener.enterProcessDataForm(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessDataFormListener): void {
		if (listener.exitProcessDataForm) {
			listener.exitProcessDataForm(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProcessDataFormVisitor<Result>): Result {
		if (visitor.visitProcessDataForm) {
			return visitor.visitProcessDataForm(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProcessInfoContext extends ParserRuleContext {
	public labelString(): LabelStringContext | undefined {
		return this.tryGetRuleContext(0, LabelStringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessDataFormParser.RULE_processInfo; }
	// @Override
	public enterRule(listener: ProcessDataFormListener): void {
		if (listener.enterProcessInfo) {
			listener.enterProcessInfo(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessDataFormListener): void {
		if (listener.exitProcessInfo) {
			listener.exitProcessInfo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProcessDataFormVisitor<Result>): Result {
		if (visitor.visitProcessInfo) {
			return visitor.visitProcessInfo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataInputContext extends ParserRuleContext {
	public dataElement(): DataElementContext[];
	public dataElement(i: number): DataElementContext;
	public dataElement(i?: number): DataElementContext | DataElementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataElementContext);
		} else {
			return this.getRuleContext(i, DataElementContext);
		}
	}
	public dataGroup(): DataGroupContext[];
	public dataGroup(i: number): DataGroupContext;
	public dataGroup(i?: number): DataGroupContext | DataGroupContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DataGroupContext);
		} else {
			return this.getRuleContext(i, DataGroupContext);
		}
	}
	public widget(): WidgetContext[];
	public widget(i: number): WidgetContext;
	public widget(i?: number): WidgetContext | WidgetContext[] {
		if (i === undefined) {
			return this.getRuleContexts(WidgetContext);
		} else {
			return this.getRuleContext(i, WidgetContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessDataFormParser.RULE_dataInput; }
	// @Override
	public enterRule(listener: ProcessDataFormListener): void {
		if (listener.enterDataInput) {
			listener.enterDataInput(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessDataFormListener): void {
		if (listener.exitDataInput) {
			listener.exitDataInput(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProcessDataFormVisitor<Result>): Result {
		if (visitor.visitDataInput) {
			return visitor.visitDataInput(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataGroupContext extends ParserRuleContext {
	public dataId(): DataIdContext {
		return this.getRuleContext(0, DataIdContext);
	}
	public GROUP_ELEMENTS_LABEL(): TerminalNode { return this.getToken(ProcessDataFormParser.GROUP_ELEMENTS_LABEL, 0); }
	public dataInput(): DataInputContext {
		return this.getRuleContext(0, DataInputContext);
	}
	public isCloneable(): IsCloneableContext | undefined {
		return this.tryGetRuleContext(0, IsCloneableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessDataFormParser.RULE_dataGroup; }
	// @Override
	public enterRule(listener: ProcessDataFormListener): void {
		if (listener.enterDataGroup) {
			listener.enterDataGroup(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessDataFormListener): void {
		if (listener.exitDataGroup) {
			listener.exitDataGroup(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProcessDataFormVisitor<Result>): Result {
		if (visitor.visitDataGroup) {
			return visitor.visitDataGroup(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataElementContext extends ParserRuleContext {
	public dataId(): DataIdContext {
		return this.getRuleContext(0, DataIdContext);
	}
	public dataWidget(): DataWidgetContext {
		return this.getRuleContext(0, DataWidgetContext);
	}
	public isCloneable(): IsCloneableContext | undefined {
		return this.tryGetRuleContext(0, IsCloneableContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessDataFormParser.RULE_dataElement; }
	// @Override
	public enterRule(listener: ProcessDataFormListener): void {
		if (listener.enterDataElement) {
			listener.enterDataElement(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessDataFormListener): void {
		if (listener.exitDataElement) {
			listener.exitDataElement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProcessDataFormVisitor<Result>): Result {
		if (visitor.visitDataElement) {
			return visitor.visitDataElement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WidgetContext extends ParserRuleContext {
	public WIDGET_TYPE(): TerminalNode { return this.getToken(ProcessDataFormParser.WIDGET_TYPE, 0); }
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessDataFormParser.RULE_widget; }
	// @Override
	public enterRule(listener: ProcessDataFormListener): void {
		if (listener.enterWidget) {
			listener.enterWidget(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessDataFormListener): void {
		if (listener.exitWidget) {
			listener.exitWidget(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProcessDataFormVisitor<Result>): Result {
		if (visitor.visitWidget) {
			return visitor.visitWidget(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataIdContext extends ParserRuleContext {
	public ID_STRING(): TerminalNode { return this.getToken(ProcessDataFormParser.ID_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessDataFormParser.RULE_dataId; }
	// @Override
	public enterRule(listener: ProcessDataFormListener): void {
		if (listener.enterDataId) {
			listener.enterDataId(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessDataFormListener): void {
		if (listener.exitDataId) {
			listener.exitDataId(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProcessDataFormVisitor<Result>): Result {
		if (visitor.visitDataId) {
			return visitor.visitDataId(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IsCloneableContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessDataFormParser.RULE_isCloneable; }
	// @Override
	public enterRule(listener: ProcessDataFormListener): void {
		if (listener.enterIsCloneable) {
			listener.enterIsCloneable(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessDataFormListener): void {
		if (listener.exitIsCloneable) {
			listener.exitIsCloneable(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProcessDataFormVisitor<Result>): Result {
		if (visitor.visitIsCloneable) {
			return visitor.visitIsCloneable(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataWidgetContext extends ParserRuleContext {
	public INPUT_WIDGET_TYPE(): TerminalNode | undefined { return this.tryGetToken(ProcessDataFormParser.INPUT_WIDGET_TYPE, 0); }
	public dataType(): DataTypeContext | undefined {
		return this.tryGetRuleContext(0, DataTypeContext);
	}
	public label(): LabelContext | undefined {
		return this.tryGetRuleContext(0, LabelContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessDataFormParser.RULE_dataWidget; }
	// @Override
	public enterRule(listener: ProcessDataFormListener): void {
		if (listener.enterDataWidget) {
			listener.enterDataWidget(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessDataFormListener): void {
		if (listener.exitDataWidget) {
			listener.exitDataWidget(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProcessDataFormVisitor<Result>): Result {
		if (visitor.visitDataWidget) {
			return visitor.visitDataWidget(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DataTypeContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessDataFormParser.RULE_dataType; }
	// @Override
	public enterRule(listener: ProcessDataFormListener): void {
		if (listener.enterDataType) {
			listener.enterDataType(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessDataFormListener): void {
		if (listener.exitDataType) {
			listener.exitDataType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProcessDataFormVisitor<Result>): Result {
		if (visitor.visitDataType) {
			return visitor.visitDataType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelContext extends ParserRuleContext {
	public labelString(): LabelStringContext {
		return this.getRuleContext(0, LabelStringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessDataFormParser.RULE_label; }
	// @Override
	public enterRule(listener: ProcessDataFormListener): void {
		if (listener.enterLabel) {
			listener.enterLabel(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessDataFormListener): void {
		if (listener.exitLabel) {
			listener.exitLabel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProcessDataFormVisitor<Result>): Result {
		if (visitor.visitLabel) {
			return visitor.visitLabel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelStringContext extends ParserRuleContext {
	public STRING(): TerminalNode | undefined { return this.tryGetToken(ProcessDataFormParser.STRING, 0); }
	public ID_STRING(): TerminalNode | undefined { return this.tryGetToken(ProcessDataFormParser.ID_STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return ProcessDataFormParser.RULE_labelString; }
	// @Override
	public enterRule(listener: ProcessDataFormListener): void {
		if (listener.enterLabelString) {
			listener.enterLabelString(this);
		}
	}
	// @Override
	public exitRule(listener: ProcessDataFormListener): void {
		if (listener.exitLabelString) {
			listener.exitLabelString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: ProcessDataFormVisitor<Result>): Result {
		if (visitor.visitLabelString) {
			return visitor.visitLabelString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


