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
        var sqlExpressions = ['select', 'insert', 'delete', 'create', 'drop', 'update'];

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------
        
        
        
        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            
            //assignmentExpression.right.value.indexOf(qString) >= 0

            /*
                for (qString in sqlExpressions){
                            if (assignmentExpression.right.value.indexOf(qString) >= 0){
                                context.report(node, "SQL Query detected, please sanitize properly.");
                                return;
                            }
                        }
            */
            
            // give me methods
            "VariableDeclaration": function(node){
                node.declarations.forEach(function(variableDeclarator){
                    if((variableDeclarator.init.type == "Literal") && 
                       (typeof variableDeclarator.init.value === "string")){
                        sqlExpressions.forEach(function(qString){
                            if((variableDeclarator.init.value.toLowerCase().includes(qString)) && !(variableDeclarator.init.value.includes("=?"))){
                                context.report(node, "sql string not parameterized.");
                            }
                        });
                    }
                });
            }
            
        };
    }
};
module.exports.schema = [];