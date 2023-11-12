import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./CardSmall.css";

export default function CardSmall(props) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < props.rate) {
            stars.push(<AiFillStar key={i} color={props.color} size={props.size} />);
        } else {
            stars.push(<AiFillStar key={i} color="#ccc" size={props.size} />);
        }
    }

    return (
        <div className="card" onClick={props.onClick}>
            <img src={props.img} alt="" className="photo" />
            <div className="description">
                <div>
                    <p id="title">{props.title}</p>
                    <p id="genre">{props.genre}</p>
                </div>
                <div>{stars}</div>
            </div>
        </div>
    );
}
