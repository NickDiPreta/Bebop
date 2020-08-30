import React, { useState, useEffect } from "react";
import WebPlayerMenu from "./webplayermenu";
import axios from "axios";
import WebplayerSong from "../webplayersong"

const MyPlaylist = (props) => {
    const [display, setDisplay] = useState([])

  useEffect(() => {
    const getPlaylistContents = async () => {
      await axios.get("http://localhost:3000/playlists").then((response) => {
        const filtered = response.data.filter(e=>e.name==props.match.params.name)
        console.log(filtered)
        setDisplay(filtered[0].songs)
      });
    };
    getPlaylistContents()
  }, [props.match.params.name]);


const songList =  display.map((e)=>{
      return (
          <li key={e.id}>
              <WebplayerSong id={e.id} info={e} />
          </li>
      )
  })
  
  return (
    <>
      <WebPlayerMenu />
      <ul className="playerContainer">
        <h2>{props.match.params.name}</h2>
        {songList}
      </ul>
    </>
  );
};

export default MyPlaylist;
