import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
  } from "react-router-dom";

const HomeTiles = props =>{
    return(
    <ul className="all-home-tiles">
    <NavLink to="/browse/podcasts" className="small-tile-home podcasts">
      <span className="tile-text">Podcasts</span>
    </NavLink>

    <NavLink to="/browse/Made For You" className="small-tile-home made-for-you">
    <span className="tile-text"><p>Made</p> <p>For</p><p>You</p></span>
    </NavLink>
    <NavLink to="/browse/charts" className="small-tile-home charts">
    <span className="tile-text">Charts</span>
    </NavLink>
    <NavLink to="/browse/new releases" className="small-tile-home releases">
    <span className="tile-text">New Releases</span>
    </NavLink>
    <NavLink to="/browse/discover" className="small-tile-home discover">
    <span className="tile-text">Discover</span>
    </NavLink>
    <NavLink to="/browse/summer" className="small-tile-home summer">
    <span className="tile-text">Summer</span>
    </NavLink>
    <NavLink to="/browse/country" className="small-tile-home country">
    <span className="tile-text">Country</span>
    </NavLink>
    <NavLink to="/browse/workout" className="small-tile-home workout">
    <span className="tile-text">Workout</span>
    </NavLink>
    <NavLink to="/browse/latin" className="small-tile-home latin">
    <span className="tile-text">Latin</span>
    </NavLink>
    <NavLink to="/browse/mood" className="small-tile-home mood">
    <span className="tile-text">Mood</span>
    </NavLink>
    <NavLink to="/browse/randb" className="small-tile-home randb">
    <span className="tile-text">R&amp;B</span>
    </NavLink>
  </ul>)
}

export default HomeTiles