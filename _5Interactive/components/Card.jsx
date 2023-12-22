import React from "react";
import { useState } from 'react'


function Card(props) {
    const {name, img, work, hobby, orgin} = props;
    const [likes, setLikes] = useState(0);

    /* Define a function to "Handle" events when ever they are triggered */
    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <div id="card">
            <img src={img} alt="img" />

            <div className="info">
                <h2>{name}</h2>
                <p>Work: {work}</p>
                <p>Hobby: {hobby}</p>
                <p className="bottom">From: {orgin}</p>
                <small><button onClick={handleClick}>Like ({likes})</button></small>
            </div>

        </div>
    )
};

export default Card;