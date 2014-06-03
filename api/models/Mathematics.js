/**
* Mathematics.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    title: {
      type: 'string',
      required: true,
      unique: true
    },
    body: {
      type: 'text',
      required: true,

    },
    example: {
      type: 'text',
      required: true,

    },
    exercise: {
      type: 'text',
      required: true,

    },
  }
};

