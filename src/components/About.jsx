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
        <div className="repoList">
            <h2>My Repositories:</h2>
            {repos && <Repositories repos={repos}/>}
        </div>
    );
};

export default About;