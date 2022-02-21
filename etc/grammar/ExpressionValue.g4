
grammar ExpressionValue;


expressionValue
   : dotnotation
   ;

dotnotation
   : '$.' identifierWithQualifier ('.' identifierWithQualifier)*
   ;

identifierWithQualifier
   :  INDENTIFIER '[' INT ']'
   ;

INDENTIFIER : [a-zA-Z][a-zA-Z0-9]* ;
INT         : '0' | [1-9][0-9]* ;
WS  :   [ \t\n\r]+ -> skip ;
