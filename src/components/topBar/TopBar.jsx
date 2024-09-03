import React from 'react';
import './top_bar.scss';

import { FaBeer } from "react-icons/fa";

function TopBar() {
  return (
    <div className="topbar">
        <div className="logo">
            <a href="">code</a>
        </div>
        <div className="contact">
            <ul>
                <li>+880 18890-10237</li>
                <li>developernoyon9@gmail.com</li>
            </ul>
        </div>
        <div className="social-icon">
            <a href=""><FaBeer /></a>
        </div>
    </div>
  )
}

export default TopBar