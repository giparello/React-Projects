import './index.scss'
function Meme(){
    return(
        <main>
            <form className='meme-form'>
                <input placeholder='top text' type="text" className='form-input'></input>
                <input placeholder='bottom text' type="text"className='form-input'></input>
                <button className='form-button'>Get a new meme image</button>
            </form>
        </main>
    )
}
export default Meme