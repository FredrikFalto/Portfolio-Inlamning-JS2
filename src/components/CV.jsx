import React from "react";
import Footer from './Footer'

const CV = () => {
    return (
        <section>
        <div className="container">
            <div className="grid">
                <div className="col-12">
                    <table>
                        <tr>
                            <th colSpan={2}>
                                <h2>
                                    <u>Education</u>
                                </h2>
                            </th>
                        </tr>
                        <tr>
                            <td className="dark">
                                Frontend developer <br /> KYH Stockholm
                            </td>
                            <td className="dark">2021-2023</td>
                        </tr>

                        <tr>
                            <td>
                                Programutveckling .NET SharePoint <br />{" "}
                                Nackademin, Solna
                            </td>
                            <td>2015-2016</td>
                        </tr>
                        <tr>
                            <td className="dark">
                                Teknik, informations- och medieteknik <br />{" "}
                                Grillska Gymnasiet, Stockholm
                            </td>
                            <td className="dark">2012-2015</td>
                        </tr>
                        <tr>
                            <th colSpan={2}>
                                <h2>
                                    <u>Work experience</u>
                                </h2>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                Atos - IT Tekniker <br />
                                Solna
                            </td>
                            <td>
                                Nov 2020 - <br />
                                (uthyrd till WTW)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Willis Towers Watson <br />
                                Stockholm
                            </td>
                            <td>
                                Apr 2020 - Juli 2021 <br />
                                (IT-avd. uppköpt av Atos Nov 2020)
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Flinks Järn AB - Junior IT Tekniker <br />
                                Stockholm
                            </td>
                            <td>Jan 2018 - Apr 2020</td>
                        </tr>
                        <tr>
                            <td>
                                Softronic - .NET utvecklare <br />
                                Stockholm - tre veckors sommarjobb
                            </td>
                            <td>2016</td>
                        </tr>
                        <tr>
                            <td>
                                Softronic - .NET utvecklare <br />
                                Stockholm - åtta veckors LIA
                            </td>
                            <td>2016</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
        <Footer />
        </section>
    );
};

export default CV;