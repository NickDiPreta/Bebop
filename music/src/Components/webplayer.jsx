import React, { useState, useEffect } from "react";
import WebplayerSong from "./webplayersong";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Nav from "./shared/nav";
import WebplayerMenu from "./shared/webplayermenu";
import Playlist from "./playlist";
import { Hover } from "./shared/styles";

const Webplayer = (props) => {
  const [songs, setSongs] = useState([]);

  
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
        const res = await fetch("https://serene-tundra-56959.herokuapp.com/songs");
        const json = await res.json();
        setSongs(json);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);
 

  const songList = songs.map((e) => {
    return (
      <li key={e.id}>
        <WebplayerSong id={e.id} info={e} />
      </li>
    );
  });
  let base = [];
  base.push(def);
  
  base.push(songList.reverse());
  
  return (
    <>
      <WebplayerMenu />

      <ul className="playerContainer">
        <h2>Top 100</h2>
        {base}
      </ul>
    </>
  );
};

export default Webplayer;
