import React from "react";

function Contact() {
    return (
        <div className="mainContent">
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
                            <input type="text" placeholder="Subject" />
                        </li>
                        <li>
                            <textarea rows="6" placeholder="Message"></textarea>
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
