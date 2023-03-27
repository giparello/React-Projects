import './index.scss'
function Card(props) {
    return (
        <div className="card">
            <h1 className="title">{props.item.title}</h1>
            <p className="location">{props.item.location}</p>
            <a className="url" href={props.item.googleMapsUrl}>Location (google maps)</a>
            <p className="date">{props.item.startDate} - {props.item.endDate} </p>
            <p className="description">{props.item.description}</p>
            <img className="image" src={props.item.imageUrl} alt="location view" />
        </div>
    )
}
export default Card