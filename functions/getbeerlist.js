const fetch = require("node-fetch")
require("dotenv").config()

const API_KEY = process.env.API_KEY

exports.handler = async (event, context) => {
    const response = await fetch(API_KEY)
    const data = await response.json()
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify(data)
    }
}