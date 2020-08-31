import React, { useState, useEffect } from "react";
import WebPlayerMenu from "./webplayermenu";
import axios from "axios";
import WebplayerSong from "../webplayersong";
import styled from "styled-components";

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
    <div>
      <WebPlayerMenu />
      <form onSubmit={searchSong}>
        <input className="styled-search"
          type="text"
          placeholder="Search for Artists, Songs, or Podcasts"
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </form>
      <ul className="playerContainer">
      {songList}
      </ul>
    </div>
  );
};

export default Search;
