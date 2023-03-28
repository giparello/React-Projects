import './index.scss'
function Header(){
    return(
        <div className="header">
            <div className="left-header">
            <img className="header-image" src="https://cdn3.iconfinder.com/data/icons/popular-memes/48/JD-02-512.png" alt="meme face"/>
            <h2>Meme Generator</h2>
            </div>
            <div className="right-header">
            <h2>React Course - Project 3</h2>
            </div>
        </div>
    )
}
export default Header