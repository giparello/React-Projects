import './index.scss'
function MainContent() {
    return (
        <div className="main-content">
            <h1 className="header">I'm learning React</h1>
            <h2 className="header2">Reasons I love React</h2>
            <ul className="list">
                <li>It's composable</li>
                <li>It's declarative</li>
                <li>It's hireable</li>
                <li>it is a very popular library</li>
            </ul>
            <h2 className="header2">
                Facts about React
            </h2>
            <ul className="list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps including mobile apps</li>
            </ul>
        </div>
    )
}

export default MainContent