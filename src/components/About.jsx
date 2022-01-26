import React, { useState, useEffect } from "react";
import Repositories from './Repositories';

const About = () => {
    const [repos, setRepos] = useState(null);

    useEffect(() => {
        fetch("https://api.github.com/users/fredrikfalto/repos")
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                setRepos(data);
            });
    }, []);

    return (
        <div style={{"textAlign":"center"}}>
            <h1>Herro</h1>
            {repos && <Repositories repos={repos}/>}
        </div>
    );
};

export default About;