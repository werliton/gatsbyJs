import React from "react"
import { Link } from "gatsby";

export default () => (
    <div>
        Working gatsby
        <button className="primary-button">Click me</button>
        <ul>
            <li><Link to="/" title="Home">Home</Link></li>
            <li><Link to="/about/" title="About">About</Link></li>
        </ul>
    </div>
)