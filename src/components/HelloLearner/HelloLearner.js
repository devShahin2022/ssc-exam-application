import React from 'react';
import './HelloLearner.css';

const HelloLearner = () => {
    return (
        <div id='helloLearner' className='hello-leaner-sec'>
        <h1>Hello Learner</h1>
        <p>Let's Perticipate our <b>current exam</b></p>
        <div className='learner-actions'>
            <button 
            
            onClick={e => {
                let hero = document.getElementById("start-exam");
                e.preventDefault();  // Stop Page Reloading
                hero && hero.scrollIntoView();
                }}
            
            >Start exam</button>
            <p>Upload at 23/3/2022</p>
        </div>
    </div>
    );
};

export default HelloLearner;