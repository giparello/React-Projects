
function Card(props){
    return(
        <div className="card">
            <h1 className="title">{props.item.title}</h1>
            <p className="location">{props.item.location}</p>
            <a href={props.item.googleMapsUrl}>Location</a>
            <p>{props.item.startDate}</p>
            <p>{props.item.endDate}</p>
            <p>{props.item.description}</p>
            <img src={props.item.imageUrl} alt="location view"/>
        </div>
    )
}
export default Card