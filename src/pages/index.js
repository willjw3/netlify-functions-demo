import React, {useState, useEffect} from "react"
import Header from "../components/header"
import Footer from "../components/footer"
import "../styles/index.css"
import fetch from "node-fetch"

const Index = () => {
    const [beers, setBeers] = useState([])

    useEffect(() => {
        const getBeerList = async () => {
            const response = await fetch("http://localhost:55023/getbeerlist")
            const data = await response.json()
            console.log(data)
            setBeers(data)
        }
        getBeerList()
    }, [])
    console.log(beers.beers && beers.beers)
    return (
        <div className="index">
            <Header />
            <div className="main">
                <h1>The List</h1>
                <div>
                    {
                        beers.beers && beers.beers.map((beer, i) => {
                            return (
                                <p key={i}>{beer.beer}</p>
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Index