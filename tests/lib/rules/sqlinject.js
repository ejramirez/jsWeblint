/**
 * @fileoverview Prevents sql injection flaws
 * @author Eric
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/sqlinject"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("sqlinject", rule, {

    valid: [

        "var i = 'hi'",
        "var x = 1"
        
    ],

    invalid: [
       
        {
            code: "var i = 'SELECT * FROM;'",
            errors: [{
                message: "sql string detected.",
                type: "VariableDeclaration"
            }]
        },
        {
            code: "var i = 'INSERT * FROM;'",
            errors: [{
                message: "sql string detected.",
                type: "VariableDeclaration"
            }]
        }
    ]
});
