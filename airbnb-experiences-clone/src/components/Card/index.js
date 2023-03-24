import star from '../../assets/star.png'
import secondimage from '../../assets/katie.png'
function Card() {
    return (
        <div className="card">
            <img src={secondimage} className="card--image" alt='card'/>
            <div className="card-stats">
            <img src={star} className="star" alt='star' />
            <span>5.0</span>
            <span className="gray">(6)</span>
            <span className="gray"> USA</span>
            </div>
        <p>Life lessons</p>
        <p><span className="bold">From $136 </span>per person</p>
        </div>
    )
}
export default Card