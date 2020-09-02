import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WebPlayerMenu from "./webplayermenu";
import Webplayersong from "../webplayersong";
import axios from "axios";
import styled from "styled-components";
import BrowserSong from "./browsersong";
import { BrowserHover } from "./styles";

const Browse = (props) => {
  const [display, setDisplay] = useState([]);
  const [songs, setSongs] = useState([]);
  const [change, setChange] = useState(false)

  useEffect(() => {
    const getChart = async () => {
      await axios
        .get(
          `http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${props.match.params.name}&api_key=8bbdc92f042755a9f05bf43c5496bb07&format=json`
        )
        .then((response) => {
          console.log(response.data.tracks.track);
          setDisplay(response.data.tracks.track);
        });
    };
    getChart();
  }, [setSongs]);

  let def = (
    <BrowserHover className="songItem-player">
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
    </BrowserHover>
  );
  // const songList = display.map((e)=>{
  //     return (
  //         <Hover className="songItem-player">
  //           <img
  //             className="play-btn"
  //             src="https://i.imgur.com/ICYXOaG.png"
  //             alt="play"
  //           />
  //           <div className="player-left">
  //             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  //             {e.name}
  //             <br />
  //             {e.artist.name} &nbsp; | {props.match.params.name}
  //           </div>
  //           <div className="player-right">
  //             <p>{Math.floor(e.duration/60)}:{e.duration%60}</p>
  //           </div>

  //         </Hover>
  //       );
  // })

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const res = await fetch(
          "https://serene-tundra-56959.herokuapp.com/songs"
        );
        const json = await res.json();
        setSongs(json);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, [change]);
  

  const faveSongList = display.map((e) => {
    const filtered = songs.filter(song=>song.title == e.name);
    
    
  
    return (
      <li key={e.id}>
        <BrowserSong
          songTitle={e.name}
          artist={e.artist.name}
          duration={e.duration}
          genre={props.match.params.name}
          songs={songs}
          identifier={filtered}
          setChange={setChange}
          change={change}
          
        />
      </li>
    );
  });
  let base = [];
  base.push(def);

  base.push(faveSongList);

  return (
    <>
      <WebPlayerMenu />
      <ul className="playerContainer">
        <h2 className="caps">{props.match.params.name}</h2>
        {faveSongList}
      </ul>
    </>
  );
};

export default Browse;
