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
        /*var sql = 'select * from tablea where field1 = 0';
        var parse = require('node-sqlparser').parse;
        var stringify = require('node-sqlparser').stringify;
        var astObj = parse(sql);
 
        var sqlstr = stringify(astObj);

        console.log(astObj);*/
        
        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            
            // give me methods
            "VariableDeclaration": function(node){
                node.declarations.forEach(function(variableDeclarator){
                    if((variableDeclarator.init.type == "Literal") && 
                       (typeof variableDeclarator.init.value === "string")){
                        sqlExpressions.forEach(function(qString){
                            if((variableDeclarator.init.value.toLowerCase().includes(qString)) &&
                               !(variableDeclarator.init.value.includes("=?"))){
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