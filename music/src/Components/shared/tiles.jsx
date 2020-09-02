import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
  } from "react-router-dom";

const Tiles = props =>{
    return(
    <ul className="all-tiles">
    <NavLink to="/browse/podcasts" className="small-tile podcasts">
      <span className="tile-text">Podcasts</span>
    </NavLink>

    <NavLink to="/browse/Made For You" className="small-tile made-for-you">
    <span className="tile-text"><p>Made</p> <p>For</p><p>You</p></span>
    </NavLink>
    <NavLink to="/browse/charts" className="small-tile charts">
    <span className="tile-text">Charts</span>
    </NavLink>
    <NavLink to="/browse/new releases" className="small-tile releases">
    <span className="tile-text">New Releases</span>
    </NavLink>
    <NavLink to="/browse/discover" className="small-tile discover">
    <span className="tile-text">Discover</span>
    </NavLink>
    <NavLink to="/browse/summer" className="small-tile summer">
    <span className="tile-text">Summer</span>
    </NavLink>
    <NavLink to="/browse/country" className="small-tile country">
    <span className="tile-text">Country</span>
    </NavLink>
    <NavLink to="/browse/workout" className="small-tile workout">
    <span className="tile-text">Workout</span>
    </NavLink>
    <NavLink to="/browse/latin" className="small-tile latin">
    <span className="tile-text">Latin</span>
    </NavLink>
    <NavLink to="/browse/mood" className="small-tile mood">
    <span className="tile-text">Mood</span>
    </NavLink>
    <NavLink to="/browse/randb" className="small-tile randb">
    <span className="tile-text">R&amp;B</span>
    </NavLink>
  </ul>)
}

export default Tiles