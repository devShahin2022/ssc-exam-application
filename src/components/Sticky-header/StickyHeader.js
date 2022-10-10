import React from 'react';
import './Sticky-header.css';

const StickyHeader = () => {
    return (
        <div id='start-exam' className='xm-2nd-row  postion-sticky'>
            <button>Time  22 : 12 </button>
            <button>12/25</button>
            <button>Submit exam</button>
        </div>
    );
};

export default StickyHeader;