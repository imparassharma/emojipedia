import React from "react";
import Emojibox from "./emojibox";
import detail from "./detail";


function create_box(box){
    return(
        <Emojibox
            key={box.id}
            img={box.emoji}
            name={box.name}
            text={box.text}
        />
    )
}

function Main(){
    return(
        <div className="main">
            <h1>Emojipedia</h1>
            <div className="container">
                {detail.map(create_box)}
            </div>
        </div>
    )
}

export default Main;