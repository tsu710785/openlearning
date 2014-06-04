/**
* Practice.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	title: {
      type: 'string',
      required: true,
    },
    problem: {
      type: 'text',
      required: true,

    },
    a: {
      type: 'text',
      required: true,

    },
    b: {
      type: 'text',
      required: true,

    },
    c: {
      type: 'text',
      required: true,

    },
    d: {
      type: 'text',
      required: true,

    },
    ans: {
      type: 'string',
      required: true,
    },    
  }
};

