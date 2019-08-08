'use strict';

module.exports.hello = (event , context, callback) => {
  const now = new date()
  const message =  `the time is ${now}`

  callback(null, message)

};
