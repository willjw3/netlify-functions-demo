const express = require("express")
const fetch = require("node-fetch")
const app = express()
const port = 5500
require("dotenv").config()

const API_KEY = process.env.API_KEY

app.get("/", (req, res) => {
    res.send("Netlify Functions Demo")
})

app.get("/beerlist", async (req, res) => {
    const response = await fetch(API_KEY)
    const data = await response.json()
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.json({
        statusCode: 200,
        body: data
    })
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})