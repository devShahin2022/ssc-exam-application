import React from 'react';
import './RecentFiveExam.css';
const RecentFiveExam = () => {
    return (
        <div className='last-five-ques'>
        <h3>Last five exam</h3>
        <div className='last-questions'>
            <button className='last-xm-box1'><b>Physics</b></button>
            <button className='last-xm-box2'><b>Chemistry</b></button>
            <button className='last-xm-box3'><b>Math</b></button>
            <button className='last-xm-box4'><b>Chemistry</b></button>
            <button className='last-xm-box5'><b>Physics</b></button>
        </div>
    </div>
    );
};

export default RecentFiveExam;