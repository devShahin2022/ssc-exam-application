import React from 'react';
import './QuestiionHeader.css';

const QuestionHeader = () => {
    return (
        <div className=''>
        <div className='exam-header-sec'>
        <div className='xm-1st-row'>
            <div className='left-bx'>
                <p><b>Sub :</b> Physics</p>
                <p><b>Chapter :</b> Motion</p>
                <p><b>Full marks :</b> 25</p>
                <p><b>Time :</b> 25 min</p>
            </div>
            <div className='right-bx'>
                <h4>Download</h4>
                <p>Link 1</p>
                <p>Link 1</p>
                <p>Link 1</p>
            </div>
        </div>
    </div>
    <p className='ques-set'>Question set : 2/5</p>
    </div>
    );
};

export default QuestionHeader;