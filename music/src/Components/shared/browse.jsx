import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WebPlayerMenu from "./webplayermenu";
import Webplayersong from "../webplayersong"
import axios from "axios";
import styled from "styled-components";

const Browse = (props) => {
    const [display, setDisplay] = useState([])

    useEffect(()=>{
        const getChart = async()=>{
            await axios.get(`http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=${props.match.params.name}&api_key=8bbdc92f042755a9f05bf43c5496bb07&format=json`).then((response)=>{
                console.log(response.data.tracks.track)
                setDisplay(response.data.tracks.track)
            });
        };
        getChart()
    },[]);

    const Hover = styled.div`
    color: white;
    :hover {
      cursor: pointer;
      background-color: rgba(29, 185, 84, 0.2);
      transition-duration: 0.3s;
    }
  `;

    const songList = display.map((e)=>{
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
                {e.artist.name} &nbsp; | {props.match.params.name}
              </div>
              <div className="player-right">
                <p>{Math.floor(e.duration/60)}:{e.duration%60}</p>
              </div>
            </Hover>
          );
    })
  return (
    <>
      <WebPlayerMenu />
      <ul className="playerContainer">
        <h2 className="caps">{props.match.params.name}</h2>
        {songList}
      </ul>
    </>
  );
};

export default Browse;
