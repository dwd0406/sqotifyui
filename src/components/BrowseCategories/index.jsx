import React, { useEffect, useState } from 'react';
import './index.css';
import APIKit from '../../utils/StateProvider'

export default function DDD() {
    const [browser, setBrowser] = useState(null);

    useEffect(() => {
        APIKit.get('browse/categories?limit=50').then(function (response) {
            setBrowser(response.data.categories.items);
        });
    }, []);
    console.log(browser);


    return (
        <div className="searchcardsWrapInner">
        {browser?.map((broW) => (
                <div className="searchcard" key={broW.id}>
                    <span className='title'>{broW.name}</span>
                    <img className='IMG' src={broW.icons[0].url} alt="Pic 1" />
                </div>
        ))}
    </div>
    )
}