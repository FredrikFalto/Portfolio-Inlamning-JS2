import React, { useState, useEffect } from "react";
import Repositories from "./Repositories";
import Footer from './Footer'

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
        <div className="container">
            <div className="grid">
                <div className="col-12">
                    <div>
                        <h1>About me</h1>
                    </div>
                </div>

                <div className="col-4">
                    <img src="./img/ProfilePicture.png" alt="Test" />
                </div>

                <div className="col-6">
                    <p>
                        Hello! My name is Fredrik Fältö. I am a 25 year old front end developer student living in Trosa, Sweden. Kid, I've flown from one side of this galaxy to the other. I've seen a lot of strange stuff, but I've never seen anything to make me believe there's one all-powerful Force controlling everything. There's no mystical energy field that controls my destiny. It's all a lot of simple tricks and nonsense. The plans you refer to will soon be back in our hands.
                    </p>
                </div>

                <div className="col-12 repoList">
                    <h3>Feel free to check out any of my GitHub Repositories:</h3>
                    {repos && <Repositories repos={repos} />}
                </div>
            </div>
        </div>
        <Footer/>
        </section>
    );
};

export default About;
