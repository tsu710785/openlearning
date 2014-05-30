/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
   
  list: function (req, res) {

    // Send a JSON response

    Main
    .find({})
    .exec(function (err, mains) {
      return res.view("main", {
        title: "main",
        mains: mains
      });
    });
  },
  
};

