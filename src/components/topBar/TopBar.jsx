import React from 'react';
import './top_bar.scss';

import { IoIosCall } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { SiLeetcode } from "react-icons/si";

function TopBar() {
  return (
    <div className="topbar">
        <div className="logo">
            <a href="">code</a>
        </div>
        <div className="contact">
            <ul>
                <li><TbWorld /> https://medium.com/@noyon674</li>
                <li> <IoIosCall /> +880 18890-10237</li>
                <li><IoMdMail /> developernoyon9@gmail.com</li>
            </ul>
        </div>
        <div className="social-icon">
            <a href="https://www.linkedin.com/in/noyon674/" target='blank'><FaLinkedin /></a>
            <a href="https://github.com/noyon674" target='blank'><IoLogoGithub /></a>
            <a href="https://leetcode.com/u/noyon674/" target='blank'><SiLeetcode /></a>
        </div>
    </div>
  )
}

export default TopBar