import './index.scss'
import React, { useEffect } from 'react'
function Meme(){


//create state for each meme
const [meme, setMeme] = React.useState({
    topText: "",
    bottomText:"",
    randomImage:"https://i.imgflip.com/tau4.jpg"
})
//create state for all memes gotten from API
const [allMemes, setAllMemes]=React.useState([])

//API call to meme API
useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes))
}, [])

function getMemeImage(){
   //Get a random image
    const randomNumber=Math.floor(Math.random()*allMemes.length)
    const url=allMemes[randomNumber].url
    setMeme(prevMeme =>({
        ...prevMeme,
        randomImage: url
    }))

}
//handle a new image link from the API
function handleChange(event){
    const {name,value} =event.target
    setMeme(prevMeme =>({
        ...prevMeme,
        [name]:value
    }))
}

    return(
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt='meme'/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
export default Meme