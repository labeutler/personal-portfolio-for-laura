import React from "react";
import App from "./App";
import ReactDOM from 'react-dom';
// import * as servicesWorker from "./serviceWorker";
import "./index.css";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

// servicesWorker.unregister();