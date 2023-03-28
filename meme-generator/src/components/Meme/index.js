import './index.scss'
import memesData from '../../memesData'
import React from 'react'
function Meme(){


const [currentImage, setCurrentImage]= React.useState('')

function getMemeImage(){
    const memesArray = memesData.data.memes
    const randomNumber=Math.floor(Math.random()*memesArray.length)
    const url=memesArray[randomNumber].url
    setCurrentImage(url)

}

    return(
        <main>
            
            <div className='meme-form'>
                <input placeholder='top text' type="text" className='form-input'></input>
                <input placeholder='bottom text' type="text"className='form-input'></input>
                <button onClick={getMemeImage} className='form-button'>Get a new meme image</button>
                <img className='meme-image' src={currentImage} alt="meme"/>
            </div>
        </main>
    )
}
export default Meme