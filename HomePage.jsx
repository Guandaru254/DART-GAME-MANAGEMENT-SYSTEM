import React from "react";
import {Link} from 'react-router-dom';

function HomePage () {
    return (
        <div className="container">
        <h1>WELCOME TO DARTPRO</h1>
        <p>Start a new game or explore other options:</p>
        <div>
            <Link to = "/new-game" className="btn btn-primary mr-3">Start New Game</Link> 
            <Link to = "/leaderboards" className="btn btn-secondary">View Leaderboards</Link> 
        </div>
        </div>
    )
}

export default HomePage;