import React, { useState, useEffect } from "react";
import Song from "./song";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import axios from "axios";

const WebplayerMenu = (props) => {
  const MenuBtn = styled.div`
  opacity: .5;
    :hover {
        filter: brightness(0) invert(1);
        opacity: 1;
      color: white;
      transition-duration: 0.3s;
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.4);
    }
  `;
  const HeartBtn = styled.div`
  opacity: .5;
  
    :hover {
        color: black;
        filter: invert(1);
        opacity: 1;
      
      transition-duration: 0.3s;
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.4);
    }
  `;
  const handleCreate = (input) => {
    
      let playlistCreate = {
        method: "post",
        url: `http://localhost:3000/playlists`,
        data: {
          name: input,
        },
        transformResponse: [
          (data) => {
            // transform the response
            return data;
          },
        ],
      };
      console.log("playlist created");
      axios(playlistCreate);
      
    };
  

  return (
    <div className="webplayer-menu">
      <div className="webplayer-menu-top">
        <Link to="/"><div className="nav-left">
          <img id="logo" src="https://i.imgur.com/4a3BQ7B.png" alt="logo" />
          <h3>Bebop</h3>
        </div>
        </Link>
        <div className="webplayer-nav">
        <Link to="/webplayer"><MenuBtn>
            <div className="h-row">
              <img
                id="home-icon"
                src="https://i.imgur.com/SKB2WmE.png"
                alt="home icon"
              />
              Home
            </div>
          </MenuBtn></Link>
          <MenuBtn>
            <div className="h-row">
              <img
                id="search-icon"
                src="https://i.imgur.com/XYKQ1Xs.png"
                alt="search icon"
              />
              Search
            </div>
          </MenuBtn>
          
          <MenuBtn>
            <Link to='/songs/favorites'><span id="libary">||\ </span>Your Library</Link>
          </MenuBtn>
        </div>
        <div className="webplayer-playlists">
          <div id="playlists-head">PLAYLISTS</div>
          <MenuBtn onClick={handleCreate}>
            <div id="create">
              <div id="symbol-bg">
                <img
                  id="add-symbol"
                  src="https://i.imgur.com/fOqdK62.png"
                  alt="add"
                />
              </div>
              Create Playlist
            </div>
          </MenuBtn>
          <Link to='/songs/favorites'><HeartBtn >
              <div id="liked">
            <div id="heart-bg">
              <img
                id="heart-symbol"
                src="https://i.imgur.com/OqNOyiQ.png"
                alt="heart"
              />
            </div>
            Liked Songs
            </div>
          </HeartBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WebplayerMenu;
