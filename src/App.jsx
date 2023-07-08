import "./App.css";
// import "./js/app";

import MyRoutes from "./routers/routes";
import Login from "./components/FormElements/Login";
import React from "react";
import Register from "./components/FormElements/Register";
import LoginOptions from "./components/FormElements/LoginOptions";

function App() {
    return (
        <div>
            <MyRoutes />
        </div>
    );
}

export default App;
