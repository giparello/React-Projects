import './index.scss'
import memesData from '../../memesData'
import React from 'react'
function Meme(){

const [meme, setMeme] = React.useState({
    topText: "",
    bottomText:"",
    randomImage:"https://i.imgflip.com/tau4.jpg"
})

const [allMemeImages, setAllMemeImages]=React.useState(memesData)


function getMemeImage(){
    const memesArray = allMemeImages.data.memes
    const randomNumber=Math.floor(Math.random()*memesArray.length)
    const url=memesArray[randomNumber].url
    setMeme(prevMeme =>({
        ...prevMeme,
        randomImage: url
    }))

}

    return(
        <main>
            
            <div className='meme-form'>
                <input placeholder='top text' type="text" className='form-input'></input>
                <input placeholder='bottom text' type="text"className='form-input'></input>
                <button onClick={getMemeImage} className='form-button'>Get a new meme image</button>
                <img className='meme-image' src={meme.randomImage} alt="meme"/>
            </div>
        </main>
    )
}
export default Meme