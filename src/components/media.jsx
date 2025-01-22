import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

const Media = () => {
    return(
        <div className="Media__bar">
            <Link to="https://www.linkedin.com/in/dharshini-karthik-414278248/"><FaLinkedin size={40} /></Link>
            <Link to="https://github.com/dharshini2022"><FaGithub size={40}/></Link>
            <Link to="Mail to: dharshini.k2022cce@sece.ac.in"> <FaEnvelope size={40}/></Link>

        </div>
    );
}

export default Media;