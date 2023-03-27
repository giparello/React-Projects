import React from "react"
import star from '../../images/star.png'

export default function Card(props) {

    return (
        <div className="card">
            {props.openSpots ===0 && <div className="card--badge">SOLD OUT</div>}
            <img src={`/images/${props.img}`} className="card--image" alt="card" />
            <div className="card--stats">
                <img src={star} className="card-star" alt="card" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}