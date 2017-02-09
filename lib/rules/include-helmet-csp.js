/**
 * @fileoverview Makes sure that the user includes content security rules using helmet
 * @author Eric
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "Makes sure that the user includes content security rules using helmet",
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
                var callee = node.callee;
                var callee_bool = false;
                var arguments = node.arguments;
                var arg_bool = false;

                // Callee Type Check
                if(callee.type == "MemberExpression" && callee.object.type == "Identifier" && callee.object.name == "helmet"){
                    if(callee.property.type == "Identifier" && callee.property.name == "csp"){
                        callee_bool = true;
                    }
                }

                // Argument Type Check
                if(arguments.type == "ObjectExpression"){
                    arg_bool = true;
                }

                // Property Check
                if(callee_bool && arg_bool){
                    
                }

            }

        };
    }
};
