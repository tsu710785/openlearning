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
  show_this_chapter: function (req, res) {
  	var title = req.param("title");
     Mathematics
     .find()
     .where({title:title})
     .exec(function (err, mathematics) {

      // console.log("bef",mathematics[0].body);
      // mathematics[0].body = mathematics[0].body.replace(/\n/g,"<br>");
      // console.log("aft",mathematics[0].body)
     	if (err) {
         req.flash("info", "info: you point to wrong number");
         return res.redirect("/main");
       	}
       res.view("math_chapter", {
         maths: mathematics
       });
     })
  },

  edit_content: function (req,res) {
    var  title = req.param("title");
    
    if (!title) return res.send("No title specified.",500);

    Mathematics
    .findOne({
      title: title
    }).exec(function (err,mathematics){
        if (err) return res.send(err,500);
        if (!mathematics) return res.send("mathematics "+title+" not found.",404);

        res.view("edit_content",{
          math: mathematics
        })
      });
  },
  edit_example: function (req,res) {
    var  title = req.param("title");
    if (!title) return res.send("No title specified.",500);

    Mathematics
    .findOne({
      title: title
    }).exec(function (err,mathematics){
        if (err) return res.send(err,500);
        if (!mathematics) return res.send("mathematics "+title+" not found.",404);

        res.view("edit_example",{
          math: mathematics
        })
      });
  },
  edit_exercise: function (req,res) {
    var  title = req.param("title");
    
    if (!title) return res.send("No title specified.",500);

    Mathematics
    .findOne({
      title: title
    }).exec(function (err,mathematics){
        if (err) return res.send(err,500);
        if (!mathematics) return res.send("mathematics "+title+" not found.",404);

        res.view("edit_exercise",{
          math: mathematics
        })
      });
  },
   
 updatePage: function (req, res) {
   var title = req.param("title");

   Mathematics.findOne({
     title: title
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
    var title = req.param("title");
    var body = req.body.body;
    var example = req.body.example;
    var exercise = req.body.exercise;
    

    if (typeof body !== 'undefined' && body) {
      //if body!= undefined , update body
      Mathematics.update({
        title: title
      }, {
        body: body,
      })
      .exec(function (err, mathematics) {
        if (err) {
          req.flash("info", "info: you point to wrong title");
          return res.redirect("/math");
        }
        return res.redirect("/math/"+title);
      })
      return; // should be taken of
    }
    if (typeof example !== 'undefined' && example){
            //if example!= undefined , update example 
      Mathematics.update({
        title: title
      }, {
        example: example
      })
      .exec(function (err, mathematics) {
        if (err) {
          req.flash("info", "info: you point to wrong title");
          return res.redirect("/math");
        }
        return res.redirect("/math/"+title);
      })
      return; // should be taken of
    }
    if (typeof exercise !== 'undefined' && exercise){
            //if example!= undefined , update example 
      Mathematics.update({
        title: title
      }, {
        exercise: exercise
      })
      .exec(function (err, mathematics) {
        if (err) {
          req.flash("info", "info: you point to wrong title");
          return res.redirect("/math");
        }
        return res.redirect("/math/"+title);
      })
      return; // should be taken of
    }
      
    // if (exercise && example && body  && body.length > 0 && example.length > 0 && exercise.length > 0)  {
    //   // update post
    //   Mathematics.update({
    //     title: title
    //   }, {
    //     body: body,
    //     example: example,
    //     exercise: exercise
    //   })
    //   .exec(function (err, mathematics) {
    //     if (err) {
    //       req.flash("info", "info: you point to wrong title");
    //       return res.redirect("/math");
    //     }
    //     return res.redirect("/math/"+title);
    //   })
    //   return;
    // }
    return res.redirect("/math");

  },

  create: function (req, res) {

    var title = req.body.title;
    var body = req.body.body;
    var example = req.body.example;
    var exercise = req.body.exercise;
    console.log( body , example , exercise);
    // Send a JSON response
    Mathematics.create({
      title: title,
      body: body,
      example: example,
      exercise: exercise
    }).exec(function (err, mathematics) {
      if (err) {
        return res.redirect("/math");
      }

      req.flash('info', 'info: Create post success !!!');
      res.redirect("/math");
    });
  },

  practice: function (req, res) {
    var title = req.param("title");
    if (!title) return res.send("No title specified.",500);

    Mathematics
    .findOne({
      title: title
    }).exec(function (err,mathematics){
        if (err) return res.send(err,500);
        if (!mathematics) return res.send("mathematics "+title+" not found.",404);

        res.view("practice_math",{
          math: mathematics
        })
      });
  },


  _config: {}

};