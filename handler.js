'use strict';

module.exports.hello = async event => {

  const reply = `${event.pathParameters.name} Success`
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: JSON.stringify(reply),
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
