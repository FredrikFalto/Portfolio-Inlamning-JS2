import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

class Footer extends React.Component {
    render() {
        return (
            <div className="social">
                <a href="https://github.com/FredrikFalto">
                    <FaGithub className="social-icon" />
                </a>
                <a href="https://www.linkedin.com/in/fredrik-f%C3%A4lt%C3%B6-a54b97113/">
                    <FaLinkedin className="social-icon" />
                </a>
                <a href="https://www.facebook.com/fredrik.falto/">
                    <FaFacebook className="social-icon" />
                </a>
            </div>
        );
    }
}

export default Footer;
