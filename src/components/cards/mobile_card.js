import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFire } from '@fortawesome/free-solid-svg-icons'
import './mobile_card.css'

export default function MobileCard(props) {
    return (
        <div className='col-12 col-md-4 col-lg-3 p-0'>
            <div className="mobile_card m-1">
                <div className="popularity"><FontAwesomeIcon icon={faFire} />{props?.data.popularity}</div>
                <div className="details">
                    <div>
                        <div className="title">{props?.data.title}</div>
                        <div className="subcategory">({props?.data.subcategory})</div>
                    </div>
                    <div className="price">₹{props?.data.price}</div>
                </div>
            </div>
        </div>
    )
}
