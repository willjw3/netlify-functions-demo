import React, {useState, useEffect} from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/index.css"

const Index = () => {
    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        const getListElements = async () => {
            const response = await fetch("/.netlify/functions/geturl")
            const elements = await response.json()
            console.log(elements.quotes)
            setQuotes(elements.quotes)
        }
        getListElements()
    }, [])


    
    return (
        <div className="index">
            <Header />
            <div className="main">
                <h1>The List</h1>
                <ul>
                    {
                        quotes && quotes.map((quote, i) => {
                            return <li key={i}>{quote.author}</li>
                        })
                    }
                    {/* <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li> */}
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Index