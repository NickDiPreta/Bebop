import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Song = (props) => {
  const [art, setArt] = useState("");
  const [artist, setArtist] = useState("");
  const [real, setReal] = useState("");
  let album = "Nevermind";
  if (props.info.album) {
    album = props.info.album;
  }
  let url = `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${album}&api_key=8bbdc92f042755a9f05bf43c5496bb07&format=json`;

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios({ url });
        console.log("album - response", response);
        setReal(response.data.results.albummatches.album[0].name);
        setArt(response.data.results.albummatches.album[0].image[3]["#text"]);
        setArtist(response.data.results.albummatches.album[0].artist);
        console.log(art);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  const Hover = styled.div`
  color: rgba(255, 255, 255, 0);
    :hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, .3);
      color: rgba(255, 255, 255, 1);
      transition-duration: 0.3s;
    }
  `;
  const Faded = styled.div`
  :hover{
    opacity: 0.2;
  }`;
  
  return (
    <Hover className="songItem" >
      <div className="overlay-text">
        <p>{real}</p>
        <p>{artist}</p>
      </div>
      <Faded><img src={art} alt="album art" height="239.5" width="239.5"/></Faded>
    </Hover>
  );
};

export default Song;
