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
        "var x = 1",
        "var i = 'SELECT * FROM id=?;'",
        "var i = 'SELECT * FROM table WHERE id=1 and id2=?';" // <--- This Shouldn't pass.
        
    ],

    invalid: [
       
        {
            code: "var i = 'SELECT * FROM table WHERE id=1';",
            errors: [{
                message: "sql string not parameterized.",
                type: "VariableDeclaration"
            }]
        },
        {
            code: "var i = 'INSERT * FROM id=1';",
            errors: [{
                message: "sql string not parameterized.",
                type: "VariableDeclaration"
            }]
        }
    ]
});
