/**
 * @fileoverview Prevents Clickjacking
 * @author Eric
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-clickjacking"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-clickjacking", rule, {

    valid: [

        // give me some code that won't trigger a warning
        "var xFrameOptions = require('x-frame-options');"
    ],

    invalid: [
        {
            code: "var express = require('express');",
            errors: [{
                message: "x-frame-options missing",
                type: "CallExpression"
            }]
        }
    ]
});
