/**
 * SearchController
 *
 * @description :: Server-side logic for managing searches
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	result: function (req, res) {
		var title = req.body.tags;
		Mathematics
			.find({
	      		title: title
	    	}).exec(function (err,mathematics){
				res.view("search",{
		          maths: mathematics
		        })
			});


////for all version 
		// var result = [];
		// title = "123";
		// Mathematics
		// 	.find({
	 //      		title: title
	 //    	}).exec(function (err,data){
		// 		result.push(data);
		// 		console.log(result[0]);
		// 	});
		
		// Physics
		// 	.find({
	 //      		title: title
	 //    	}).exec(function (err,data){
		// 		result.push(data);
		// 		console.log(data);
		// 		console.log(result[1]);
		// 	});

		// English
		// 	.find({
	 //      		title: title
	 //    	}).exec(function (err,data){
		// 		result.push(data);
		// 	});
	 //    result.forEach(function(a){console.log(a)});
	},


  _config: {}
};

