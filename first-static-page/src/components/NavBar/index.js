import ReactLogo from '../../assets/logo192.png'
import './index.scss'
function NavBar(){
    return(
        <nav className='nav'>
           <img src={ReactLogo} alt="React logo" className="nav-logo"/>
           <ul className="nav-items">
            <li>
                Pricing
            </li>
            <li>About</li>
            <li>Contact</li>
           </ul>
        </nav>
    )
}
export default NavBar