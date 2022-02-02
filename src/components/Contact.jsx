import React, { useRef } from "react";
import Footer from "./Footer";
import emailjs from "emailjs-com";

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_hpu21mk",
                "template_24g00ht",
                form.current,
                "user_ozHdLSjLhRnSStgtGJyqr"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
    };

    return (
        <section>
            <div className="container">
                <div className="grid">
                    <div className="col-12">
                        <div className="contactForm">
                            <form autoComplete="off" ref={form} onSubmit={sendEmail}>
                                <h1>Contact me 🙂</h1>

                                <ul>
                                    <li>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            id="nameTxt"
                                        />
                                    </li>
                                    <li>
                                        <input
                                            type="text"
                                            placeholder="Subject"
                                            name="subject"
                                            id="subjectTxt"
                                        />
                                    </li>
                                    <li>
                                        <input
                                            type="text"
                                            placeholder="Email"
                                            name="email"
                                            id="emailTxt"
                                        />
                                    </li>
                                    <li>
                                        <textarea
                                            rows="6"
                                            placeholder="Message"
                                            name="message"
                                        ></textarea>
                                    </li>
                                    <li>
                                        <button type="submit">
                                            Send message
                                        </button>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </section>
    );
}
