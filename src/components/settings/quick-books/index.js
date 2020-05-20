import React from 'react';
import './quickBooks.style.css';
import Btn from '../../../utilies/button'

function QuickBooks(){
    return (
        <div className='quick-container'>
            <div class='right'>
                <h2>Joist > QuickBooks</h2>
                <p>Connect your Joist > QuickBooks Online accounts to automatically keep your books up-to-date.</p>
                <div className='btn-wrapper'>
                    <Btn>
                        Upgrade Now
                    </Btn>
                    <Btn>
                        Learn More
                    </Btn>
                </div>
                <p>Upgrade to Joist Pro to access QuickBooks Sync</p>
            </div>
            <div class='left'>
                <div class='icon-wrapper'>
                    <span></span>
                    <p>Stop exporting your Joist data manually</p>
                </div>
                <div class='icon-wrapper'>
                    <span></span>
                    <p>Stop scrambling to find old documents during tax season</p>
                </div>
                <div class='icon-wrapper'>
                    <span></span>
                    <p>Keep your bookkeeper happy and off your back!</p>
                </div>
            </div>
        </div>
    )
}

export default QuickBooks;