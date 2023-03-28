import './index.scss'
function Card(props) {
    return (
        <div className="card">
            <h1 className="title">{props.item.title}, {props.item.location}</h1>
            <div className="info">
            <p className="date"> Visited: {props.item.startDate} - {props.item.endDate} </p>
            </div>
            <a className="url" href={props.item.googleMapsUrl}>See on map</a>
            <p className="description">{props.item.description}</p>
            <img className="image" src={props.item.imageUrl} alt="location view" />
        </div>
    )
}
export default Card