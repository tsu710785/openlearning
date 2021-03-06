/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `config/404.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on routes, check out:
 * http://links.sailsjs.org/docs/config/routes
 */

module.exports.routes = {


  // Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, etc. depending on your
  // default view engine) your home page.
  //
  // (Alternatively, remove this and add an `index.html` file in your `assets` directory)
  '/': {
    view: 'homepage'
  },
  'GET /main': {
    controller: "main",
    action: "list"
  },
  'POST /search': {
    controller: "search",
    action: "result"
  },
  'GET /discuss': {
    controller: "discuss",
    action: "list"
  },
  "GET /practice/:title": {
    controller: "practice",
    action: "list"
  },


  'GET /math': {
    controller: "mathematics",
    action: "list"
  },
  "GET /math/create": {
    view: "create_math"
  },
  // "GET /math/:title/practice": {
  //   controller: "mathematics",
  //   action: "practice"
  // },
  "GET /math/discuss": {
    view: "discuss_math"
  },
  "POST /math": {
    controller: "mathematics",
    action: "create"
  },
  'GET /math/:title': {
    controller: "mathematics",
    action: "show_this_chapter"
  },
  "GET /math/edit_content/:title": {
    controller: "mathematics",
    action: "edit_content"
  },
  "GET /math/edit_example/:title": {
    controller: "mathematics",
    action: "edit_example"
  },
  "GET /math/edit_exercise/:title": {
    controller: "mathematics",
    action: "edit_exercise"
  },
  "GET /math/update/:title": {
    controller: "mathematics",
    action: "updatePage"
  },
  "PUT /math/:title": {
    controller: "mathematics",
    action: "update"
  },


  //physics

  'GET /physics': {
    controller: "physics",
    action: "list"
  },
  "GET /physics/create": {
    view: "create_physics"
  },
  // "GET /physics/:title/practice": {
  //   controller: "physics",
  //   action: "practice"
  // },
  "GET /physics/discuss": {
    view: "discuss_physics"
  },
  "POST /physics": {
    controller: "physics",
    action: "create"
  },
  'GET /physics/:title': {
    controller: "physics",
    action: "show_this_chapter"
  },
  "GET /physics/edit_content/:title": {
    controller: "physics",
    action: "edit_content"
  },
  "GET /physics/edit_example/:title": {
    controller: "physics",
    action: "edit_example"
  },
  "GET /physics/edit_exercise/:title": {
    controller: "physics",
    action: "edit_exercise"
  },
  "GET /physics/update/:title": {
    controller: "physics",
    action: "updatePage"
  },
  "PUT /physics/:title": {
    controller: "physics",
    action: "update"
  },



  //english

  'GET /english': {
    controller: "english",
    action: "list"
  },
  "GET /english/create": {
    view: "create_english"
  },
  // "GET /english/:title/practice": {
  //   controller: "english",
  //   action: "practice"
  // },
  "GET /english/discuss": {
    view: "discuss_english"
  },
  "POST /english": {
    controller: "english",
    action: "create"
  },
  'GET /english/:title': {
    controller: "english",
    action: "show_this_chapter"
  },
  "GET /english/edit_content/:title": {
    controller: "english",
    action: "edit_content"
  },
  "GET /english/edit_example/:title": {
    controller: "english",
    action: "edit_example"
  },
  "GET /english/edit_exercise/:title": {
    controller: "english",
    action: "edit_exercise"
  },
  "GET /physics/update/:title": {
    controller: "english",
    action: "updatePage"
  },
  "PUT /physics/:title": {
    controller: "english",
    action: "update"
  },




  // Custom routes here...


  // If a request to a URL doesn't match any of the custom routes above,
  // it is matched against Sails route blueprints.  See `config/blueprints.js`
  // for configuration options and examples.

};
