import React, { Component } from "react";
import "./styles.css";

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div id="copyright" className="row">
                    <p>&copy; {new Date().getFullYear()} Copyright: Stefanie Serpa</p>
                </div>
            </footer>
        )
    }
}

export default Footer;

