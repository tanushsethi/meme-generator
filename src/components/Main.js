import React from "react";

function Main(){
    return(
        <div className="main">
            <div className="inputCon">
                <input className="input" type="text" placeholder="Top Text"/>
                <input className="input" type="text" placeholder="Bottom Text"/>
            </div>
            <div className="buttonCon">
                <button>Get a new meme image! </button>
            </div>
        </div>
    );
}

export default Main;