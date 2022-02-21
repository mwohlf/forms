
grammar ProcessDataForm;

// process form data consists of info/meta data and an array of process input fields
processDataForm
   : '[' ( processInfo ',')? dataInput ']' EOF
   ;

// the process meta data
processInfo
   : '{' ( '"processName"' ':' labelString)? '}'
   ;

// ---------------   data grouping and organization   ---------------

// nothing happening here, we just delegate to inputGroup or to a single input field
dataInput
   : '[' ( dataElement | dataGroup) (',' ( dataElement | dataGroup | widget))* ']'
   | '[' ']'
   ;

// a json object has random ordering we need to cover all permutations
dataGroup
   : dataId ',' GROUP_ELEMENTS_LABEL ':' dataInput (isCloneable )? '}'
   | '{'  GROUP_ELEMENTS_LABEL ':' dataInput dataId  (isCloneable )? '}'
   ;

//
dataElement
   : dataId ',' dataWidget (isCloneable)? '}'
   | '{' dataWidget dataId (isCloneable)? '}'
   ;

widget
  : '{' '"widgetType"' ':' WIDGET_TYPE (',' label)?'}'
  ;

dataId
   : ( ',' | '{' ) '"dataId"' ':' ID_STRING
   ;

isCloneable // last terminal must be the flag for parsing
   : ( ',' | '{' ) '"cloneable"' ':'  ('true' | 'false')
   ;



// ---------------  specific input fields   ---------------


dataWidget
   : ( '"widgetType"' ':' INPUT_WIDGET_TYPE )
     ( ',' dataType )
     ( ',' label )
   ;

dataType
   : '"dataType"' ':' ('"string"' | '"number"')
   ;

label
   : '"label"' ':' labelString
   ;

labelString
   : ( STRING | ID_STRING)
   ;




// ---------------- terminal symbols

// order this be most specific to less

GROUP_ELEMENTS_LABEL
   : '"elements"'
   ;

WIDGET_TYPE
   :  '"HorizontalRow"'
   |  '"SectionTitle"'
   |  '"SubSectionTitle"'
   ;

INPUT_WIDGET_TYPE
   : '"QRCodeScan"'
   | '"BarCodeScan"'
   | '"TextInput"'
   | '"SelectBox"'
   | '"MultiSelectBox"'
   | '"Tickbox"'
   ;



// only ascii, no ':' '/' '#' '-'
ID_STRING
   : '"' CHAR (ASCII)+ '"'
   ;

STRING
   : '"' (ESC | SAFECODEPOINT)* '"'
   ;


fragment CHAR
   : [a-zA-Z]
   ;

fragment ASCII
   : [0-9a-zA-Z]
   ;

fragment ESC
   : '\\' (["\\/bfnrt] | UNICODE)
   ;

fragment UNICODE
   : 'u' HEX HEX HEX HEX
   ;


fragment HEX
   : [0-9a-fA-F]
   ;


fragment SAFECODEPOINT
   : ~ ["\\\u0000-\u001F]
   ;


NUMBER
   : '-'? INT ('.' [0-9] +)? EXP?
   ;


fragment INT
   : '0' | [1-9] [0-9]*
   ;

// no leading zeros

fragment EXP
   : [Ee] [+\-]? INT
   ;

// \- since - means "range" inside [...]

WS
   : [ \t\n\r] + -> skip
   ;
