import React from 'react';

const Exp = () => {
    return (
        <div className='exp__main__div'>
            <span className="exp_typewriter"></span>
            <ul className='exp__ul'>
                <li className='exp__item' style={{ '--accent-color': '#41516C' }}>
                    <div className="date">Open Source Contribution</div>
                    <div className="title">GSSOC & Hacktoberfest 2024</div>
                    <div className="descr">Actively contributed to open-source projects by fixing bugs, reviewing code, and adding feature enhancements. Worked with 
                    mentors and peers to improve software quality and documentation.</div>
                </li>
                <li className='exp__item' style={{ '--accent-color': '#FBCA3E' }}>
                    <div className="date">Mern Stack Internship</div>
                    <div className="title">Better Tomorrow Institute</div>
                    <div className="descr">I gained hands-on experience during Better Tomorrow’s MERN internship by developing a book recommendation system and an e-commerce platform.
                    </div>
                </li>
                <li className='exp__item' style={{ '--accent-color': '#E24A68' }}>
                    <div className="date">Web Development Internship</div>
                    <div className="title">Technohacks</div>
                    <div className="descr">A calorie tracker project was developed using the MERN stack, incorporating API integration to enable efficient tracking and management of calorie intake.</div>
                </li>
            </ul>
        </div>
    );
}

export default Exp;