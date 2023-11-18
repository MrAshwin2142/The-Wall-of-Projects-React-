import React from 'react'
import './Components.css'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <div className="home-container">
            <h2>Welcome to The Wall of Projects!</h2>
            <p>Explore exciting projects contributed by developers worldwide on "The Wall".</p>

            <div className="contribute-section">
                <h3>How You Can Contribute:</h3>
                <ul>
                    <li>
                        <strong>Explore Projects:</strong> Check out projects showcased on <Link to="/wall">The Wall</Link>.
                    </li>
                    <li>
                        <strong>Add Your Projects:</strong> Be a contributor! <Link to="/wall">Add your projects</Link> to the collection.
                    </li>
                </ul>
            </div>

            <div className="thank-contributors">
                <h3>Thank You to Our Contributors!</h3>
                <p>Firstly, a big thank you to all contributors for making this repository possible!</p>
                <p>Explore the <Link to="/star-contributors">Star Contributors</Link> section to see their valuable contributions.</p>
            </div>
        </div>
    )
}

export default Home