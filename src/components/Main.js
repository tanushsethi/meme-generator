import React from "react";
import memesData from "../data";

function Main(){
    const [memeData , setMeme] = React.useState({
        url: "https://i.imgflip.com/24y43o.jpg",
        topText: "",
        bottomText: ""
    });
    const [dataObj, setAllMemeImages] = React.useState(memesData)
    var {data: {memes}} = dataObj;
    function generate(){
        var rand = Math.floor(Math.random() * memes.length);
        setMeme(function(current){
            return {
                ...current,
                url : memes[rand].url
            }
        })
    }

    return(
        <div className="main">
            <div className="inputCon">
                <input className="input" type="text" placeholder="Top Text"/>
                <input className="input" type="text" placeholder="Bottom Text"/>
            </div>
            <div className="buttonCon">
                <button onClick={generate}>Get a new meme image! </button>
            </div>
            <div className="imgCon">
                <img src={memeData.url} alt="" />
            </div>
        </div>
    );
}

export default Main;