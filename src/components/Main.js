import React from "react";
import memesData from "../data";


function Main(){
    const [memeData , setMeme] = React.useState({
        url: "https://i.imgflip.com/24y43o.jpg",
        topText: "",
        bottomText: ""
    });
    const [inputData, setInputData] = React.useState({
        topText: "",
        bottomText: ""
    })
    const [dataObj] = React.useState(memesData)
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
    console.log(inputData);

    function handleChange(event){
        setInputData((current)=>{
            return {
                ...current,
                [event.target.name]: event.target.value
            }
        });
    }

    return(
        <div className="main">
            <div className="inputCon">
                <input className="input" 
                    type="text" 
                    placeholder="Top Text"
                    onChange={handleChange}
                    name="topText"
                    value={inputData.topText}
                />
                <input className="input" 
                    type="text" 
                    placeholder="Bottom Text"
                    onChange={handleChange}
                    name="bottomText"
                    value={inputData.bottomText}
                />
            </div>
            <div className="buttonCon">
                <button onClick={generate}>Get a new meme image! </button>
            </div>
            <div className="imgCon">
                <h1 className="topText">{inputData.topText}</h1>
                <img src={memeData.url} alt="" />
                <h1 className="bottomText">{inputData.bottomText}</h1>
            </div>
        </div>
    );
}

export default Main;