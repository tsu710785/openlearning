/**
 * PracticeController
 *
 * @description :: Server-side logic for managing practices
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	
  list: function (req, res) {
    var title = req.param("title");
    if (!title) return res.send("No title specified.",500);

	Practice
    .find({
      title: title
    }).exec(function (err,practice){
        if (err) return res.send(err,500);
        if (!practice) return res.send("practice "+title+" not found.",404);

        res.view("practice",{
          title:title,
          practices: practice
        })
      });
  },

};

