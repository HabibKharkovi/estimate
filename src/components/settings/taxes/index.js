import React, { useState } from 'react';
import './taxes.style.css';
import Btn from '../../../utilies/button';

function Taxes(){
    return (
        <div>
            <div className='content-wrapper'>
                <h3>Manage Taxes</h3>
                <p className='content-text'>Use "New Tax" above to setup your taxes</p>
            </div>
            <Btn>New Text</Btn>
        </div>
    )
}

export default Taxes;