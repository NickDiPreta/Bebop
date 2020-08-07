import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';

const Song = (props) => {
    const [art, setArt] = useState('')
    const [artist, setArtist]= useState('')
    let album = "Nevermind"
    if (props.info.album){
        album = props.info.album
    }
  let url = `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${album}&api_key=8bbdc92f042755a9f05bf43c5496bb07&format=json`;
  
  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const response = await axios({ url });
        console.log("album - response", response);
        setArt(response.data.results.albummatches.album[0].image[2]["#text"])
        setArtist(response.data.results.albummatches.album[0].artist)
        console.log(art)
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);
 

const Hover = styled.div`
	:hover {
        cursor: pointer;
        background-color: rgba(29, 185, 84,0.2);
        webkit-transition: 1s;
	}
`
  
  return (
    <Hover className="songItem" >
      <p>{props.info.title}</p>
      <p>{artist}</p>
      <p>{props.info.duration}</p>
      <p>{props.info.genre}</p>
      <img src={art} alt="album art"/>
    </Hover>
  );
};

export default Song;
