/**
 * MathematicsController
 *
 * @description :: Server-side logic for managing Mathematics
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  list: function (req, res) {

    // Send a JSON response

    Mathematics
    .find({})
    .exec(function (err, mathematics) {
      if (err) {
         req.flash("info", "info: you point to wrong number");
         return res.redirect("/main");
      }
      return res.view("math", {
        title: "math",
        maths: mathematics
      });
    });
  },
  showid: function (req, res) {
  	var title = req.param("title");
     Mathematics
     .find()
     .where({title:title})
     .exec(function (err, mathematics) {
     	if (err) {
         req.flash("info", "info: you point to wrong number");
         return res.redirect("/main");
       	}
       res.view("math", {
         maths: mathematics
       });
     })
  },
};

