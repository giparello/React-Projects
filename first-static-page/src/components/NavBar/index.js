import ReactLogo from '../../assets/logo192.png'
import './index.scss'
function NavBar(){
    return(
        <nav className='nav'>
           <img src={ReactLogo} alt="React logo" className="nav-logo"/>
           <h3>ReactFacts</h3>
           <h4>React Course-Project 1</h4>
        </nav>
    )
}
export default NavBar