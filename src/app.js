import React, {useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import { render } from "@testing-library/react";


export default function App() {
    const [page, setPage] = useState("About")
    console.log(page)
    function renderpage(page) {
        if(page === "About") {
            return <AboutMe />
        }
        if(page === "Contact") {
            return <Contact />
        }
        if(page === "Portfolio") {
            return <Portfolio />
        }
        if(page === "Resume") {
            return <Resume />
        }
    }
    return ( 
        <div>
            <Header setPage={setPage}/>
            {
                renderpage(page)
            }
            <Footer />
        </div>
    )
}

