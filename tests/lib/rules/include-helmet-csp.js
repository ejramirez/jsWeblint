/**
 * @fileoverview Makes sure that the user includes content security rules using helmet
 * @author Eric
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/include-helmet-csp"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("include-helmet-csp", rule, {

    valid: [

        // give me some code that won't trigger a warning
    ],

    invalid: [
        {
            code: "app.use();",
            errors: [{
                message: "Fill me in.",
                type: "Me too"
            }]
        }
    ]
});
