import React from 'react';
import Footer from './Footer';
import Sidebar from './Sidebar';
import Body from './Body';
import '.././components/ss.css';



export default function Rrouter() {
    

    return (
        <div>
            <div>
                <Sidebar />
                <div className='ss'>
                    <Body />
                </div>
                <Footer />
            </div>
        </div>
    )
}
