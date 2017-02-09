/**
 * @fileoverview Include the helmet library
 * @author Eric
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/include-helmet"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("include-helmet", rule, {

    valid: [

        // give me some code that won't trigger a warning
        "var helmet = require('helmet');"
    ],

    invalid: [
        {
            code: "var fs = require('fs');",
            errors: [{
                message: "helmet is missing",
                type: "CallExpression"
            }]
        }
    ]
});
