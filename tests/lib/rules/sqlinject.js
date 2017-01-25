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

        // give me some code that won't trigger a warning
        "var i = strip_tags('Some Text','');",
        "var i = strip_tags('<script>malicious code</script>','');",
        "var i = strip_tags('<h1><a></a></h1>','<h1>');"
    ],

    invalid: [
        {
            code: "var i = \"<script></script>\";",
            errors: [{
                message: "unsanitized variable detected",
                type: "VariableDeclaration"
            }]
        },
        {
            code: "var i = 'Some Text'",
            errors: [{
                message: "unsanitized variable detected",
                type: "VariableDeclaration"
            }]
        },
        {
            code: "var i = alert('alarming')",
            errors: [{
                message: "no strip_tags() call on string",
                type: "VariableDeclaration"
            }]
        }
    ]
});
