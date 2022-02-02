import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Main from "./Main"
import Contact from "./Contact"
import About from './About'
import CV from './CV'
import ErrorPage from './ErrorPage'

const App = () => {  
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="" element={<Main />} />
                <Route path="/cv" element={<CV />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
}

export default App;
