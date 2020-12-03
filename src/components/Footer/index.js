import React from "react";
import "./styles.css";

function Footer() {
    return (
        <footer className="footer mt-3">
            <div className="container">
                <div id="copyright" className="row justify-content-center p-3">
                    <div className="col-md-4 col-xs-12 p-0">
                        <p>&copy; {new Date().getFullYear()} Copyright Stefanie Serpa</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

