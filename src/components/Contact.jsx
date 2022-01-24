import React from "react";

function Contact() {
    return (
        <div>
            <div className="contactForm">
                <form autoComplete="off" action="">
                    <h1>Contact me 🙂</h1>

                    <ul>
                        <li>
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Email" />
                        </li>
                        <li>
                            <input
                                type="text"
                                size="43"
                                placeholder="Subject"
                            />
                        </li>
                        <li>
                            <textarea
                                id=""
                                cols="42"
                                rows="5"
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
    );
}

export default Contact;
