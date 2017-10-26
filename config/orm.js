var connection = require("../config/connection.js");

   // * In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

   //   * `selectAll()` 
   //   * `insertOne()` 
   //   * `updateOne()` 

   // * Export the ORM object in `module.exports`.

   var orm = {
   	selectAll: function(tableInput, cb){
   		var queryString = "SELECT * FROM " + tableInput + ";";
   		connection.query(queryString, function(err, result){
   			if (err){
   				throw err;
   			}
   			cb(result);
   		});
   	},
   	insertOne: function(table, cols, vals, cb){

   	});
   },
   updateOne: function(table, objColVals, condition, cd){

   }

   module.exports = orm;