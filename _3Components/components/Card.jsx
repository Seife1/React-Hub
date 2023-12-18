import React from "react";

const Card = (props) => {
    /* Destructuring props in react */
    const {img, name, work, hobby, orgin} = props;

    return (
    <div id="card">
        <img src={img} alt="img" />

        <div className="info">
            <h2>{name}</h2>
            <p>Work: {work}</p>
            <p>Hobby: {hobby}</p>
            <p className="bottom">From: {orgin}</p>
        </div>

    </div>
    );
};

// Card.defaultProps = {
//     name: "Unknown",
//     img : {eye},
//     work: "Student",
//     hobby: "Movies",
//     orgin: "Ethiopia"
// };

export default Card;