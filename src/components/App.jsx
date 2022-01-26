import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main"
import Contact from "./Contact"
import About from './About'

const App = () => {  
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
