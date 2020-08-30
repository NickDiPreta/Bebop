import React, { useState, useEffect } from "react";
import WebplayerSong from "./webplayersong";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Nav from "./shared/nav";
import WebplayerMenu from "./shared/webplayermenu";
import Playlist from "./playlist";

const Webplayer = (props) => {
  const [songs, setSongs] = useState([]);
  const Hover = styled.div`
    :hover {
      cursor: pointer;
      background-color: rgba(29, 185, 84, 0.2);
      transition-duration: 0.3s;
    }
  `;

  
  let def = (
    <Hover className="songItem-player">
        <span className="play-btn">Play</span>
        <div className="player-left">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span id="space">Title</span>
          <br />
          {/* artist &nbsp; | genre */}
        </div>
        <div className="player-right">
          <p id="duration"></p>
        </div>
        <img
        className="like-btn"
        src="https://i.imgur.com/OqNOyiQ.png"
        alt="like button"
      />
      
    </Hover>
  );

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const res = await fetch("http://localhost:3000/songs");
        const json = await res.json();
        setSongs(json);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);
 

  const songList = songs.map((e) => {
      if (e.is_favorite == true){
    return (
      <li key={e.id}>
        <WebplayerSong id={e.id} info={e} />
      </li>
    );
  }});

  let base = [];
  base.push(def);
  
  base.push(songList);

  return (
    <>
      <WebplayerMenu />

      <ul className="playerContainer">
        <h2>Favorites</h2>
        {base}
      </ul>
    </>
  );
};

export default Webplayer;
