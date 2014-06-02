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
    .sort('title ASC')
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

  edit: function (req,res) {
    var  id = req.param("id");
    
    if (!id) return res.send("No id specified.",500);

  Mathematics
  .findOne({
    id: id
  }).exec(function (err,mathematics){
      if (err) return res.send(err,500);
      if (!mathematics) return res.send("mathematics "+id+" not found.",404);

      res.view("edit",{
        math: mathematics
      })
    });
  },
   
 updatePage: function (req, res) {
   var id = req.param("id");

   Mathematics.findOne({
     id: id
   }).exec(function (err, mathematics) {
     if (err) {
       req.flash("info", "info: you point to wrong number");
       return res.redirect("/math");
     }

     return res.view("math/update", {
       math:mathematics
     });
   });
 },


   update: function (req, res) {
    var id = req.param("id");
    var title = req.body.title;
    var body = req.body.body;

    if (title && body && title.length > 0 && body.length > 0) {
      // update post
      Mathematics.update({
        id: id
      }, {
        title: title,
        body: body
      })
      .exec(function (err, mathematics) {
        if (err) {
          req.flash("info", "info: you point to wrong number");
          return res.redirect("/math");
        }
        return res.redirect("/math");
      })
      return;
    }
    return res.redirect("/math");

},

  _config: {}

};