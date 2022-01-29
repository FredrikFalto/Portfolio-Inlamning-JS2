import React from "react";

function Contact() {
    return (
        <div className="container">
            <div className="grid">
                <div className="col-12">
                    <div className="contactForm">
                        <form autoComplete="off" action="">
                            <h1>Contact me 🙂</h1>

                            <ul>
                                <li>
                                    <input type="text" placeholder="Name" />
                                </li>
                                <li>
                                    <input type="text" placeholder="Email" />
                                </li>
                                <li>
                                    <textarea
                                        rows="6"
                                        placeholder="Message"
                                    ></textarea>
                                </li>
                                <li>
                                    <button type="submit">Send message</button>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
