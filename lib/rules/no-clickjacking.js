/**
 * @fileoverview Prevents Clickjacking
 * @author Eric
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Prevents Clickjacking",
            category: "Fill me in",
            recommended: false
        },
        fixable: null,  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {

            // give me methods
            "CallExpression": function(node){
                if(node.callee.type == "Identifier" && node.arguments[0].type == "Literal" && typeof node.arguments[0].value === "string"){
                    if(node.callee.name.toLowerCase() == "require" && node.arguments[0].value.toLowerCase() != "x-frame-options"){
                        context.report(node, "x-frame-options missing");
                    }
                }
            }
        };
    }
};
