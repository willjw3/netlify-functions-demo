const fetch = require("node-fetch")
require("dotenv").config()

const API_KEY = process.env.API_KEY 

exports.handler = async (event, context) => {
    const response = await fetch(API_KEY)
    const data = await response.json()
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        },
        body: JSON.stringify(data)
    }
}