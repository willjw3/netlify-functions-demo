import React, {useState, useEffect} from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/index.css"

const Index = () => {
    
    return (
        <div className="index">
            <Header />
            <div className="main">
                <h1>The List</h1>
                <div>
                    <p>Item 1</p>
                    <p>Item 2</p>
                    <p>Item 3</p>
                    <p>Item 4</p>
                    <p>Item 5</p>
                    <p>Item 6</p>
                    <p>Item 7</p>
                    <p>Item 8</p>
                    <p>Item 9</p>
                    <p>Item 10</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Index