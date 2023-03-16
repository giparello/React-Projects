import React from "react"
import './styles.scss'
import AirbnbLogo from '../../assets/Airbnb_Logo.png'
function NavBar() {
    return (
        <>
            <nav>
                <img src={AirbnbLogo} alt="logo" className="nav-image"/>
            </nav>
        </>
    )
}
export default NavBar