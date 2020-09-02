import React, { useState, useEffect } from "react";
import Song from "../song";
import styled from "styled-components";
import Popup from "../popup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import { HeartBtn, PLBtn, MBtn } from "./styles";

const WebPlayerMenu = (props) => {
  const [popup, togglePopup] = useState(false);
  const [Name, setName] = useState("");
  const [display, setDisplay] = useState([]);




  const handleCreate = async (input) => {
    try {
      const response = await axios.post("https://serene-tundra-56959.herokuapp.com/playlists", {
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
        const response = await axios.get("https://serene-tundra-56959.herokuapp.com/playlists");
        setDisplay(response.data);
        console.log("👉 Returned data:", response);
      } catch (e) {
        console.log(`😱 Axios request failed: ${e}`);
      }
    };
    getPlaylists();
  }, []);

  let fin = display.map((e) => (
    <PLBtn className="individual-playlist">
      <Link to={`/myplaylists/${e.name}`}>{e.name}</Link>
    </PLBtn>
  ));
  console.log(fin);
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
          <Link to="/search">
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
          </Link>
          {/* <MBtn>
            <Link to="/songs/favorites">
              <div className="lib-row"><span id="libary">||\ </span>Library</div>
            </Link>
          </MBtn> */}
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
