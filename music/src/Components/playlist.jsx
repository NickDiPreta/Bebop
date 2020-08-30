import React, { useState, useEffect } from "react";
import Song from "./song";
import styled from "styled-components";
import WebplayerMenu from "./shared/webplayermenu";
import WebplayerSong from "./webplayersong"

const Playlist = (props) => {
    const [playlist, setPlaylist] = useState([])
    const [title, setTitle] = useState('')

    useEffect(() => {
        const makeAPICall = async () => {
          try {
            const res = await fetch("http://localhost:3000/playlists");
            const json = await res.json();
            
            setPlaylist(json[0].songs);
            setTitle(json[0].name)
            
          } catch (err) {
            console.error(err);
          }
        };
        makeAPICall();
      }, []);
      
     
    
     const songList = playlist.map((e) => {
        return (
          <li key={e.id}>
            <WebplayerSong info={e} />
          </li>
        );
      });
     
  return (
    <div>
      <WebplayerMenu />
      
      <ul className="playerContainer">
      <h2>{title}</h2>{songList}</ul>
    </div>
  );
};

export default Playlist;
