import './index.scss'
function Header(){
    return(
        //Create the header
        <header className="header">
            <img 
                src="./images/troll-face.png" 
                className="header--image"
            alt='meme'/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
        </header>
    )
}
export default Header