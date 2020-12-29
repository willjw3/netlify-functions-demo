require('dotenv').config()
const fetch = require("node-fetch")
// const express = require("express")
// const app = express()
// const port = 5500

const api_key = process.env.API_KEY 

exports.handler = async (event, context) => {
    try {
        const response = await fetch(api_key)
        const data = await response.json()
        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
            },
            body: JSON.stringify(data)
        }
    }
    catch(error) {
        return {
            statusCode: 500,
            body: "Internal Server Error"
        }
    }
}

// const getQuotes = async () => {
//     try {
//         const response = await fetch(api_key)
//         const data = await response.json()
//         return {
//             statusCode: 200,
//             body: data
//         }
//     }
//     catch(error) {
//         return {
//             statusCode: 500,
//             body: "Internal Server Error"
//         }
//     }

// }

// app.get("/", (req, res) => {
//     res.send('Netlify Functions Demo')
// })

// app.get("/quotes", async (req, res) => {
//     const quotes = await getQuotes()
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8000');
//     res.json(quotes)
// })

// app.listen(port, () => {
//     console.log(`App listening on port ${port}`)
// })

