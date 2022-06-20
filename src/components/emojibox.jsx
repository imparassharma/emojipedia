import React from "react";



function Emojibox(props){

    return(
        <div className="box">
            <img src={props.img} alt="emoji"></img>
            <h2>{props.name}</h2>
            <p>{props.text}</p>
        </div>
    )
}

export default Emojibox;