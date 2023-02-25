// Pulling everything together
import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
// import Page from "./components/Page";
import Footer from "./components/Footer";


function App() {
    const [tabs] = useState([
        {
            name: "aboutMe"
        },
        {
            name: "portfolio"
        },
        {
            name: "contact"
        },
        {
            name: "resume"
        },
    ]);

    const [currentPage, setCurrentPage] = useState(tabs[0]);

    return (
        <div>
            <Header>
                <Nav
                    tabs={tabs}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                ></Nav>
            </Header>
            <main>
                {/* <Page currentPage={currentPage}></Page> */}
            </main>
            <Footer />
        </div>
    );
}

export default App;