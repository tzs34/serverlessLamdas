const uuid = require("uuid")
const AWS = require("aws-sdk")

const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports = ({reviewCount=0, rating=0}, businessName) => {
  const date = JSON.stringify(new Date())
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuid.v1(),
      businessName: businessName,
      reviewCount: reviewCount,
      rating: rating,
      scrapedAt: date
    }
  }

  dynamoDb.put(params, error => {
    if (error) {
      console.error(`Error saving data to DynamoDB: ${JSON.stringify(error)}`);
      return Promise.reject(
        `Error saving data to DynamoDB: ${JSON.stringify(error)}`
      )
    } else {
      return Promise.resolve(params.Item)
    }
  })
}