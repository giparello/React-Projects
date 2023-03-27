import Collage from '../../images/airbnbcollage.png'

function Main(){
    return(
        <div className='hero-div'>
            <img src={Collage} alt="collage" className='main-image'/>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts--all without leaving home</p>
        </div>
    )
}
export default Main