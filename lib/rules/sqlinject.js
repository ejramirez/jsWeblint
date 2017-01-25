/**
 * @fileoverview Prevents sql injection flaws
 * @author Eric
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Prevents sql injection flaws",
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
            "VariableDeclaration": function(node){
                node.declarations.forEach(function(variableDeclarator){
                    if((variableDeclarator.init.type != "CallExpression")){
                        context.report(node, "unsanitized variable detected");
                    }else if(variableDeclarator.init.callee.name != "strip_tags"){
                        context.report(node, "no strip_tags() call on string");
                    }
                });
            }
            
        };
    }
};
