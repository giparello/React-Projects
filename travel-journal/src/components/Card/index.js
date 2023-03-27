import './index.scss'
function Card(props) {
    return (
        <div className="card">
            <h1 className="title">{props.item.title}</h1>
            <p className="location">{props.item.location}</p>
            <a className="url" href={props.item.googleMapsUrl}>Location</a>
            <span className="date">{props.item.startDate} - </span>
            <span className="date">{props.item.endDate} </span>
            <p className="description">{props.item.description}</p>
            <img className="image" src={props.item.imageUrl} alt="location view" />
        </div>
    )
}
export default Card