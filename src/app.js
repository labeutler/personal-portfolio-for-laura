// import React, {useState} from "react";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Page from "./components/Page";
// import Nav from "./components/Nav";
// import AboutMe from "./components/AboutMe";
// import Contact from "./components/Contact";
// import Portfolio from "./components/Portfolio";
// import Resume from "./components/Resume";
// import { render } from "@testing-library/react";

// function App() {
//     const [pages] = useState([
//         {
//             name: "about me"
//         },
//         {
//             name: "portfolio"
//         },
//         {
//             name: "contact"
//         },
//         {
//             name: "resume"
//         }
//     ]);

//     const [currentPage, setCurrentPage] = useState(pages[0]);

//     return (
//         <div>
//             <Header>
//                 <Nav
//                 pages={pages}
//                 setCurrentPage={setCurrentPage}
//                 currentPage={currentPage}
//                 ></Nav>
//             </Header>
//             <main>
//                 <Page currentPage={currentPage}></Page>
//             </main>
//             <Footer />
//         </div>
//     );
// }

// export default App;

// export default function App() {
//     const [page, setPage] = useState("About")
//     console.log(page)
//     function renderpage(page) {
//         if(page === "About") {
//             return <AboutMe />
//         }
//         if(page === "Contact") {
//             return <Contact />
//         }
//         if(page === "Portfolio") {
//             return <Portfolio />
//         }
//         if(page === "Resume") {
//             return <Resume />
//         }
//     }
//     return ( 
//         <div>
//             <Header setPage={setPage}/>
//             {
//                 renderpage(page)
//             }
//             <Footer />
//         </div>
//     )
// }

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import PhotoContainer from "./components/PhotoContainer";

// class App extends Component {
//     constructor() {
//         super();
//         this.state = {
//             photos: []
//         };
//     }

//     componentDidMount() {}

//     render() {
//         return (
//             <section className="app">
//                 <p>Is this working?</p>
//                 <PhotoContainer photos={this.state.photos} />
//             </section>
//         );
//     }
// }

function App() {
    return (
        <div>
            <Header />
            <Footer />
        </div>
    );
}

export default App;