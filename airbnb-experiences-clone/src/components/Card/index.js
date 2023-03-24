import star from '../../assets/star.png'
function Card(props) {
    return (
        <div className="card">
            <img src={props.image} className="card--image" alt='card'/>
            <div className="card-stats">
            <img src={star} className="star" alt='star' />
            <span>{props.rating}</span>
            <span className="gray">({props.reviewnumber})</span>
            <span className="gray"> {props.location}</span>
            </div>
        <p>{props.topic}</p>
        <p><span className="bold">${props.cost} </span>per person</p>
        </div>
    )
}
export default Card