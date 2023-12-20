import React from "react";

function Card(props) {
    const {img, name, work, hobby, orgin} = props;

    return (
    <>
        <div id="card">
            <img src={img} alt="img" />

            <div className="info">
                <h2>{name}</h2>
                <p>Work: {work}</p>
                <p>Hobbby: {hobby}</p>
                <p className="bottom">From: {orgin}</p>
            </div>
        </div>
    </>   
    );
};

export default Card;