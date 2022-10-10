import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <header className='header-section'>
                <h2>Perticipate our latest exam</h2>
                <Link
                onClick={e => {
                    let hero = document.getElementById("helloLearner");
                    e.preventDefault();  // Stop Page Reloading
                    hero && hero.scrollIntoView();
                    }}
                to="#helloLearner">Click here</Link>
            </header>
            {/* find previous exam */}
            <div className='find-prev-xm'>
                <h2>Find previous exam</h2>
                <div className='find-question'>
                    <select value="">
                        <option name="" id="">Select Subject</option>
                        <option name="" id="">Physics</option>
                    </select>
                    <select value="">
                        <option name="" id="">Select Chapter</option>
                        <option name="" id="">Motion</option>
                    </select>
                    
                    <button>Find</button>
                </div>
            </div>
        </div>
    );
};

export default Header;