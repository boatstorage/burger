// * Inside `burger.js`, import `orm.js` into `burger.js`

//     * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

//     * Export at the end of the `burger.js` file.
var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb){
		orm.all("burgers", function(res){
			cb(res);
		})
	},
	insertOne: function(cb){
		orm.create("burgers", function(res){
			cb(res);
		});
	},
	updateOne: function(cb){
		orm.update("burgers", function(res){
			cb(res);
		})
	}
};


module.exports = burger;