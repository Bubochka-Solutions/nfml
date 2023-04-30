// Generated from nfml.g4 by ANTLR 4.12.0
// jshint ignore: start
import antlr4 from 'antlr4';


const serializedATN = [4,0,14,80,6,-1,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,
4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,
12,2,13,7,13,1,0,1,0,5,0,32,8,0,10,0,12,0,35,9,0,1,0,1,0,3,0,39,8,0,1,0,
1,0,1,1,1,1,1,2,1,2,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,6,1,6,1,7,1,7,1,8,
1,8,1,9,1,9,1,9,1,10,1,10,1,10,1,11,3,11,68,8,11,1,11,1,11,1,12,4,12,73,
8,12,11,12,12,12,74,1,12,1,12,1,13,1,13,1,33,0,14,1,1,3,2,5,3,7,4,9,5,11,
6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,14,1,0,2,2,0,9,9,32,32,1,0,0,
65535,83,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,0,0,0,0,11,
1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,0,21,1,0,0,0,
0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,1,29,1,0,0,0,3,42,1,0,0,0,5,44,1,
0,0,0,7,46,1,0,0,0,9,48,1,0,0,0,11,52,1,0,0,0,13,54,1,0,0,0,15,56,1,0,0,
0,17,58,1,0,0,0,19,60,1,0,0,0,21,63,1,0,0,0,23,67,1,0,0,0,25,72,1,0,0,0,
27,78,1,0,0,0,29,33,5,35,0,0,30,32,9,0,0,0,31,30,1,0,0,0,32,35,1,0,0,0,33,
34,1,0,0,0,33,31,1,0,0,0,34,38,1,0,0,0,35,33,1,0,0,0,36,39,3,23,11,0,37,
39,5,0,0,1,38,36,1,0,0,0,38,37,1,0,0,0,39,40,1,0,0,0,40,41,6,0,0,0,41,2,
1,0,0,0,42,43,2,97,122,0,43,4,1,0,0,0,44,45,5,45,0,0,45,6,1,0,0,0,46,47,
5,58,0,0,47,8,1,0,0,0,48,49,5,45,0,0,49,50,5,45,0,0,50,51,5,45,0,0,51,10,
1,0,0,0,52,53,5,123,0,0,53,12,1,0,0,0,54,55,5,125,0,0,55,14,1,0,0,0,56,57,
5,91,0,0,57,16,1,0,0,0,58,59,5,93,0,0,59,18,1,0,0,0,60,61,5,91,0,0,61,62,
5,91,0,0,62,20,1,0,0,0,63,64,5,93,0,0,64,65,5,93,0,0,65,22,1,0,0,0,66,68,
5,13,0,0,67,66,1,0,0,0,67,68,1,0,0,0,68,69,1,0,0,0,69,70,5,10,0,0,70,24,
1,0,0,0,71,73,7,0,0,0,72,71,1,0,0,0,73,74,1,0,0,0,74,72,1,0,0,0,74,75,1,
0,0,0,75,76,1,0,0,0,76,77,6,12,1,0,77,26,1,0,0,0,78,79,7,1,0,0,79,28,1,0,
0,0,5,0,33,38,67,74,2,6,0,0,0,1,0];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class nfmlLexer extends antlr4.Lexer {

    static grammarFileName = "nfml.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, null, null, "'-'", "':'", "'---'", "'{'", 
                         "'}'", "'['", "']'", "'[['", "']]'" ];
	static symbolicNames = [ null, "COMMENT", "ID_LETTER", "ID_SEPARATOR", 
                          "COLON", "MULTILINE_STRING_DELIMETER", "OBJECT_OPEN", 
                          "OBJECT_CLOSE", "LIST_OPEN", "LIST_CLOSE", "ARRAY_OPEN", 
                          "ARRAY_CLOSE", "NEWLINE", "WHITESPACE", "UNICODE_SET" ];
	static ruleNames = [ "COMMENT", "ID_LETTER", "ID_SEPARATOR", "COLON", "MULTILINE_STRING_DELIMETER", 
                      "OBJECT_OPEN", "OBJECT_CLOSE", "LIST_OPEN", "LIST_CLOSE", 
                      "ARRAY_OPEN", "ARRAY_CLOSE", "NEWLINE", "WHITESPACE", 
                      "UNICODE_SET" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.atn.PredictionContextCache());
    }
}

nfmlLexer.EOF = antlr4.Token.EOF;
nfmlLexer.COMMENT = 1;
nfmlLexer.ID_LETTER = 2;
nfmlLexer.ID_SEPARATOR = 3;
nfmlLexer.COLON = 4;
nfmlLexer.MULTILINE_STRING_DELIMETER = 5;
nfmlLexer.OBJECT_OPEN = 6;
nfmlLexer.OBJECT_CLOSE = 7;
nfmlLexer.LIST_OPEN = 8;
nfmlLexer.LIST_CLOSE = 9;
nfmlLexer.ARRAY_OPEN = 10;
nfmlLexer.ARRAY_CLOSE = 11;
nfmlLexer.NEWLINE = 12;
nfmlLexer.WHITESPACE = 13;
nfmlLexer.UNICODE_SET = 14;



