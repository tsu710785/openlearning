/**
 * MathematicsController
 *
 * @description :: Server-side logic for managing Mathematics
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  list: function (req, res) {

    // Send a JSON response

    Physics
    .find({})
    .sort('title ASC')
    .exec(function (err, physics) {
      if (err) {
         req.flash("info", "info: you point to wrong number");
         return res.redirect("/main");
      }
      return res.view("physics", {
        title: "physics",
        physicss: physics
      });
    });
  },
  show_this_chapter: function (req, res) {
  	var title = req.param("title");
     Physics
     .find()
     .where({title:title})
     .exec(function (err, physics) {
     	if (err) {
         req.flash("info", "info: you point to wrong number");
         return res.redirect("/main");
       	}
       res.view("physics_chapter", {
         physicss: physics
       });
     })
  },

  edit_content: function (req,res) {
    var  title = req.param("title");
    
    if (!title) return res.send("No title specified.",500);

    Physics
    .findOne({
      title: title
    }).exec(function (err,physics){
        if (err) return res.send(err,500);
        if (!physics) return res.send("physics "+title+" not found.",404);

        res.view("edit_content_phy",{
          physics: physics
        })
      });
  },
  edit_example: function (req,res) {
    var  title = req.param("title");
    if (!title) return res.send("No title specified.",500);

    Physics
    .findOne({
      title: title
    }).exec(function (err,physics){
        if (err) return res.send(err,500);
        if (!physics) return res.send("physics "+title+" not found.",404);

        res.view("edit_example_phy",{
          physics: physics
        })
      });
  },
  edit_exercise: function (req,res) {
    var  title = req.param("title");
    
    if (!title) return res.send("No title specified.",500);

    Physics
    .findOne({
      title: title
    }).exec(function (err,physics){
        if (err) return res.send(err,500);
        if (!physics) return res.send("physics "+title+" not found.",404);

        res.view("edit_exercise_phy",{
          physics: physics
        })
      });
  },
   
 updatePage: function (req, res) {
   var title = req.param("title");

   Physics.findOne({
     title: title
   }).exec(function (err, physics) {
     if (err) {
       req.flash("info", "info: you point to wrong number");
       return res.redirect("/physics");
     }

     return res.view("physics/update", {
       physics:physics
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
      Physics.update({
        title: title
      }, {
        body: body,
      })
      .exec(function (err, physics) {
        if (err) {
          req.flash("info", "info: you point to wrong title");
          return res.redirect("/physics");
        }
        return res.redirect("/physics/"+title);
      })
      return; // should be taken of
    }
    if (typeof example !== 'undefined' && example){
            //if example!= undefined , update example 
      Physics.update({
        title: title
      }, {
        example: example
      })
      .exec(function (err, physics) {
        if (err) {
          req.flash("info", "info: you point to wrong title");
          return res.redirect("/physics");
        }
        return res.redirect("/physics/"+title);
      })
      return; // should be taken of
    }
    if (typeof exercise !== 'undefined' && exercise){
            //if example!= undefined , update example 
      Physics.update({
        title: title
      }, {
        exercise: exercise
      })
      .exec(function (err, physics) {
        if (err) {
          req.flash("info", "info: you point to wrong title");
          return res.redirect("/physics");
        }
        return res.redirect("/physics/"+title);
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
    return res.redirect("/physics");

  },

  create: function (req, res) {

    var title = req.body.title;
    var body = req.body.body;
    var example = req.body.example;
    var exercise = req.body.exercise;
    console.log( body , example , exercise);
    // Send a JSON response
    Physics.create({
      title: title,
      body: body,
      example: example,
      exercise: exercise
    }).exec(function (err, physics) {
      if (err) {
        return res.redirect("/physics");
      }

      req.flash('info', 'info: Create post success !!!');
      res.redirect("/physics");
    });
  },

  practice: function (req, res) {
    var title = req.param("title");
    if (!title) return res.send("No title specified.",500);

    Physics
    .findOne({
      title: title
    }).exec(function (err,physics){
        if (err) return res.send(err,500);
        if (!physics) return res.send("physics "+title+" not found.",404);

        res.view("practice_phy",{
          physics: physics
        })
      });
  },




  _config: {}

};