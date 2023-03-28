import './index.scss'
import memesData from '../../memesData'
function Meme(){

function getMemeImage(){
    const memesArray = memesData.data.memes
    const randomNumber=Math.floor(Math.random()*memesArray.length)
    const url=memesArray[randomNumber].url

}

    return(
        <main>
            
            <div className='meme-form'>
                <input placeholder='top text' type="text" className='form-input'></input>
                <input placeholder='bottom text' type="text"className='form-input'></input>
                <button onClick={getMemeImage} className='form-button'>Get a new meme image</button>
            </div>
        </main>
    )
}
export default Meme