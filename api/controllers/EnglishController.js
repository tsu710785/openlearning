/**
 * MathematicsController
 *
 * @description :: Server-side logic for managing Mathematics
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
  list: function (req, res) {

    // Send a JSON response

    English
    .find({})
    .sort('title ASC')
    .exec(function (err, english) {
      if (err) {
         req.flash("info", "info: you point to wrong number");
         return res.redirect("/main");
      }
      return res.view("english", {
        title: "english",
        englishs: english
      });
    });
  },
  show_this_chapter: function (req, res) {
  	var title = req.param("title");
     English
     .find()
     .where({title:title})
     .exec(function (err, english) {
     	if (err) {
         req.flash("info", "info: you point to wrong number");
         return res.redirect("/main");
       	}
       res.view("english_chapter", {
         englishs: english
       });
     })
  },

  edit_content: function (req,res) {
    var  title = req.param("title");
    
    if (!title) return res.send("No title specified.",500);

    English
    .findOne({
      title: title
    }).exec(function (err,english){
        if (err) return res.send(err,500);
        if (!english) return res.send("english "+title+" not found.",404);

        res.view("edit_content_eng",{
          english: english
        })
      });
  },
  edit_example: function (req,res) {
    var  title = req.param("title");
    if (!title) return res.send("No title specified.",500);

    English
    .findOne({
      title: title
    }).exec(function (err,english){
        if (err) return res.send(err,500);
        if (!english) return res.send("english "+title+" not found.",404);

        res.view("edit_example_eng",{
          english: english
        })
      });
  },
  edit_exercise: function (req,res) {
    var  title = req.param("title");
    
    if (!title) return res.send("No title specified.",500);

    English
    .findOne({
      title: title
    }).exec(function (err,english){
        if (err) return res.send(err,500);
        if (!english) return res.send("english "+title+" not found.",404);

        res.view("edit_exercise_eng",{
          english: english
        })
      });
  },
   
 updatePage: function (req, res) {
   var title = req.param("title");

   English.findOne({
     title: title
   }).exec(function (err, english) {
     if (err) {
       req.flash("info", "info: you point to wrong number");
       return res.redirect("/english");
     }

     return res.view("english/update", {
       english:english
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
      English.update({
        title: title
      }, {
        body: body,
      })
      .exec(function (err, english) {
        if (err) {
          req.flash("info", "info: you point to wrong title");
          return res.redirect("/english");
        }
        return res.redirect("/english/"+title);
      })
      return; // should be taken of
    }
    if (typeof example !== 'undefined' && example){
            //if example!= undefined , update example 
      English.update({
        title: title
      }, {
        example: example
      })
      .exec(function (err, english) {
        if (err) {
          req.flash("info", "info: you point to wrong title");
          return res.redirect("/english");
        }
        return res.redirect("/english/"+title);
      })
      return; // should be taken of
    }
    if (typeof exercise !== 'undefined' && exercise){
            //if example!= undefined , update example 
      English.update({
        title: title
      }, {
        exercise: exercise
      })
      .exec(function (err, english) {
        if (err) {
          req.flash("info", "info: you point to wrong title");
          return res.redirect("/english");
        }
        return res.redirect("/english/"+title);
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
    return res.redirect("/english");

  },

  create: function (req, res) {

    var title = req.body.title;
    var body = req.body.body;
    var example = req.body.example;
    var exercise = req.body.exercise;
    console.log( body , example , exercise);
    // Send a JSON response
    English.create({
      title: title,
      body: body,
      example: example,
      exercise: exercise
    }).exec(function (err, english) {
      if (err) {
        return res.redirect("/englishs");
      }

      req.flash('info', 'info: Create post success !!!');
      res.redirect("/english");
    });
  },


  practice: function (req, res) {
    var title = req.param("title");
    if (!title) return res.send("No title specified.",500);

    English
    .findOne({
      title: title
    }).exec(function (err,penglish){
        if (err) return res.send(err,500);
        if (!english) return res.send("english "+title+" not found.",404);

        res.view("practice_eng",{
          english: english
        })
      });
  },



  _config: {}

};