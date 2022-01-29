import React, { useState, useEffect } from "react";
import Repositories from "./Repositories";

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
        <section>
            <div className="col-12">
                <div>
                    <h1>About me:</h1>
                </div>
            </div>

            <div className="col-12">
                <div className="col-6 repoList">
                    <h3>My Repositories:</h3>
                    {repos && <Repositories repos={repos} />}
                </div>

                <div className="col-6">
                    <ul>
                        <li>Test 1</li>
                        <li>Test 2</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
