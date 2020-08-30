import React, { useState, useEffect } from "react";
import Song from "../song";
import styled from "styled-components";
import Popup from "../popup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";

const WebPlayerMenu = (props) => {
  
  const [popup, togglePopup] = useState(false);
  const [Name, setName] = useState("");
  const [display, setDisplay] = useState([])

  const MBtn = styled.div`
    opacity: 0.5;
    :hover {
      filter: brightness(0) invert(1);
      opacity: 1;
      color: white;
      transition-duration: 0.3s;
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.4);
    }
  `;
  const PLBtn = styled.div`
    opacity: 0.5;
    :hover {
      filter: brightness(0) invert(1);
      opacity: 1;
      color: white;
      transition-duration: 0.3s;
      cursor: pointer;
      
    }
  `;
  const HeartBtn = styled.div`
    opacity: 0.5;

    :hover {
      color: black;
      filter: invert(1);
      opacity: 1;

      transition-duration: 0.3s;
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.4);
    }
  `;

  const handleCreate = async (input) => {
    try {
      const response = await axios.post("http://localhost:3000/playlists", {
        name: Name,
      });
      console.log("👉 Returned data:", response);
    } catch (e) {
      console.log(`😱 Axios request failed: ${e}`);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const submitPlaylist = (event) => {
    event.preventDefault();
    handleCreate(event.target.value);
    
  };

  useEffect(() => {
  const getPlaylists = async () => {
    try {
      const response = await axios.get("http://localhost:3000/playlists")
      setDisplay(response.data)
      console.log("👉 Returned data:", response);
    } catch (e) {
      console.log(`😱 Axios request failed: ${e}`);
    }
  };
  getPlaylists();
},[]);

  let fin = display.map(e=> <PLBtn className="individual-playlist"><Link to={`/myplaylists/${e.name}`}>{e.name}</Link></PLBtn> )
  console.log(fin)
  return (
    <div className="webplayer-menu">
      <div className="webplayer-menu-top">
        <Link to="/">
          <div className="nav-left">
            <img id="logo" src="https://i.imgur.com/4a3BQ7B.png" alt="logo" />
            <h3>Bebop</h3>
          </div>
        </Link>
        <div className="webplayer-nav">
          <Link to="/webplayer">
            <MBtn>
              <div className="h-row">
                <img
                  id="home-icon"
                  src="https://i.imgur.com/SKB2WmE.png"
                  alt="home icon"
                />
                Home
              </div>
            </MBtn>
          </Link>
          <MBtn>
            <div className="h-row">
              <img
                id="search-icon"
                src="https://i.imgur.com/XYKQ1Xs.png"
                alt="search icon"
              />
              Search
            </div>
          </MBtn>

          <MBtn>
            <Link to="/songs/favorites">
              <span id="libary">||\ </span>Your Library
            </Link>
          </MBtn>
        </div>
        <div className="webplayer-playlists">
          <div id="playlists-head">PLAYLISTS</div>
          <MBtn onClick={() => togglePopup(!popup)}>
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
          </MBtn>
          {popup ? (
            <Popup
              Name={Name}
              submitPlaylist={submitPlaylist}
              handleNameChange={handleNameChange}
            />
          ) : (
            ""
          )}
          <Link to="/songs/favorites">
            <HeartBtn>
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
          <div className="allPlaylists">{fin}</div>
        </div>
      </div>
    </div>
  );
};

export default WebPlayerMenu;