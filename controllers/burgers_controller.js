// 3. Inside the `burgers_controller.js` file, import the following:

//    * Express
//    * `burger.js`

// 4. Create the `router` for the app, and export the `router` at the end of your file.

var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

console.log("hi");
router.get('/', function(req, res) {
	res.redirect('/index');
});

router.get("/index", function(req, res){
	burger.selectAll(function(data){
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/burgers/insertOne", function(req, res){
	console.log(req);
	burger.insertOne(["burger_name", "devoured"],[req.body.burgerName, false], function(result){
		console.log(result);
		res.redirect("/");
		});
	});

router.post("/burgers/updateOne/:id", function(req, res){
	console.log(req);
	var condition = "id = " + req.params.id;
	console.log(condition);
	burger.updateOne({
		devoured: true }, condition, function(result){
		res.redirect("/");
	});

});



module.exports = router;