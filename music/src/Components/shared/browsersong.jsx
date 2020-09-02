import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { BHover } from "./styles";
import MusicPlayer from "./musicplayer"

const BrowserSong = (props) => {
  const [update, setUpdate] = useState({ is_favorite: false });

  const [faveStatus, setFaveStatus] = useState(false);

  let url = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${props.songTitle}&artist=${props.artist}&api_key=8bbdc92f042755a9f05bf43c5496bb07&format=json`;

  let minutes = Math.floor(props.duration / 60);
  let seconds = props.duration % 60;
  let dur = `${minutes}:${seconds}`;

  const createSong = async () => {
    let newSong = {
      method: "post",
      url: `https://serene-tundra-56959.herokuapp.com/songs`,
      data: {
        is_favorite: true,
        title: props.songTitle,
        artist: props.artist,
        duration: dur,
        album: props.artist,
        genre: props.genre,
      },
      transformResponse: [
        (data) => {
          console.log(data);
          // transform the response
          return data;
        },
      ],
    };

    await axios(newSong);
    console.log("new song added");
  };

  const handleFave = async (song) => {
    await axios
      .put(`https://serene-tundra-56959.herokuapp.com/songs/${song.id}`, {
        is_favorite: !song.is_favorite,
        title: props.songTitle,
        artist: props.artist,
        duration: dur,
        album: props.artist,
        genre: props.genre,
      })
      .then((res) => {
        setUpdate(res.data);
        props.setChange(!props.change);
      });
  };

  const favorite = () => {
    if (props.identifier) {
      //    props.setChange(!props.change)
      handleFave(props.identifier[0]);
    } else {
      createSong();
    }
  };

  return (
    <BHover className="songItem-player">
  
      <MusicPlayer song={props.songTitle}/>
      <div className="player-left">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {props.songTitle}
        <br />
        {props.artist} &nbsp; | {props.genre}
      </div>
      <div className="player-right">
        <p>{dur}</p>
      </div>
      {props.identifier[0] && props.identifier[0].is_favorite ? (
        <img
          onClick={favorite}
          className="like-btn"
          src="https://i.imgur.com/IgW2gCg.png"
          alt="test"
        />
      ) : (
        <img
          onClick={favorite}
          className="like-btn"
          src="https://i.imgur.com/OqNOyiQ.png"
          alt="like button"
        />
      )}
    </BHover>
  );
};

export default BrowserSong;
