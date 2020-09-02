import React, { useState, useEffect } from "react";
import WebPlayerMenu from "./webplayermenu";
import axios from "axios";
import WebplayerSong from "../webplayersong";
import styled from "styled-components";
import Cards from "./cards";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

const Search = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [matches, setMatches] = useState([]);

  const Faded = styled.div`
    :hover {
      opacity: 0.2;
    }
  `;

  const searchSong = async (event) => {
    event.preventDefault();
    let url = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${searchTerm}&api_key=8bbdc92f042755a9f05bf43c5496bb07&format=json`;
    await axios.get(url).then((response) => {
      setMatches(response.data.results.trackmatches.track);
    });
  };

  const Hover = styled.div`
    color: white;
    :hover {
      cursor: pointer;
      background-color: rgba(29, 185, 84, 0.2);
      transition-duration: 0.3s;
    }
  `;

  const songList = matches.map((e) => {
    return (
      <Hover className="songItem-player">
        <img
          className="play-btn"
          src="https://i.imgur.com/ICYXOaG.png"
          alt="play"
        />
        <div className="player-left">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {e.name}
          <br />
          {e.artist} &nbsp; | Rock
        </div>
        <div className="player-right">
          <p>5:00</p>
        </div>
      </Hover>
    );
  });

  return (
    <>
      <div>
        <WebPlayerMenu />
        <form onSubmit={searchSong}>
          <input
            className="styled-search"
            type="text"
            placeholder="Search for Artists, Songs, or Podcasts"
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </form>
        <ul className="playerContainer">{songList}</ul>
        <div className="search-header">Your top genres</div>
        <div className="top-tiles">
          <br />
        </div>
        <Cards />
      </div>
      <div className="search-header">Browse All</div>
      
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
      </ul>
      
    </>
  );
};

export default Search;
