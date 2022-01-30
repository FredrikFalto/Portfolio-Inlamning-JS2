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
        <div className="container">
            <div className="grid">
                <div className="col-12">
                    <div>
                        <h1>About me</h1>
                        <p>Hi! My name is Fredrik Fältö. I am 25 years old and live in Trosa, about 1 hour south of Stockholm. In my spare time I mostly play video games or watch/play sports. In the summers I spend most of my time on the golf course (not at all sad that we live just 10 minutes away 😌) and in the winters I try to go skiing as much as possible. I also love Manchester United and watch pretty much every game every season. In the last couple of years I have taken an interest in Formula 1.</p>
                    </div>
                </div>

                <div className="col-12">
                    <table>
                        <tr>
                            <th colSpan={2}>
                                <h2><u>Education</u></h2>
                            </th>
                        </tr>
                        <tr>
                            <td className="dark">Frontend developer <br /> KYH Stockholm</td>
                            <td className="dark">2021-2023</td>
                        </tr>

                        <tr>
                            <td>Programutveckling .NET SharePoint <br /> Nackademin, Solna</td>
                            <td>2015-2016</td>
                        </tr>
                        <tr>
                            <td className="dark">Teknik, informations- och medieteknik <br /> Grillska Gymnasiet, Stockholm</td>
                            <td className="dark">2012-2015</td>
                        </tr>
                        <tr>
                            <th colSpan={2}>
                                <h2><u>Work experience</u></h2>
                            </th>
                        </tr>
                        <tr>
                            <td>Atos - IT Tekniker <br />Solna</td>
                            <td>Nov 2020 - <br />(uthyrd till WTW)</td>
                        </tr>
                        <tr>
                            <td>Willis Towers Watson <br />Stockholm</td>
                            <td>Apr 2020 - Juli 2021 <br />(via Atos från Nov 2020)</td>
                        </tr>
                        <tr>
                            <td>Flinks Järn AB - Junior IT Tekniker <br />Stockholm</td>
                            <td>Jan 2018 - Apr 2020</td>
                        </tr>
                        <tr>
                            <td>Softronic - .NET utvecklare <br />Stockholm - tre veckors sommarjobb</td>
                            <td>2016</td>
                        </tr>
                        <tr>
                            <td>Softronic - .NET utvecklare <br />Stockholm - åtta veckors LIA</td>
                            <td>2016</td>
                        </tr>
                    </table>
                </div>

                <div className="col-12 repoList">
                    <h3>My Repositories:</h3>
                    {repos && <Repositories repos={repos} />}
                </div>
            </div>
        </div>
    );
};

export default About;