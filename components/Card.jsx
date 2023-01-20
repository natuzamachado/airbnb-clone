import starIcon from "../public/star.png"
import React from "react";

function Card(props){
    let badgeText;
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if(props.location === "Online"){
        badgeText = "ONLINE"
    }
    return (
        <section className="card">
               {badgeText && <div className="card--badge">{badgeText}</div>}
                <img className="cardPhoto" src={`../public/${props.coverImg}`} alt="athlete photo" ></img >
                <div>
                    <div className="cardText">
                        <img src={starIcon} alt="start Icon"></img>
                        <p id="star-rate" >{props.stats.rating}</p>
                       <p>({props.stats.reviewCount})</p>
                       <p> • {props.location}</p>
                    </div>
                </div>
                <div className="card-description">
                    <p>{props.title}</p>
                    <div className="price">
                        <p id="boldText">From ${props.price} </p>
                        <p>/ person</p>
                    </div>
                </div>
        </section>
    )
}
export default Card
