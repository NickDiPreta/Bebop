import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import MusicPlayer from "./shared/musicplayer";

const WebplayerSong = (props) => {
  const [art, setArt] = useState("");
  const [artist, setArtist] = useState("");
  let [, setState] = useState();
  function handleUpdate() {
    //passing empty object will re-render the component
    setState({});
  }
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
        setArt(response.data.results.albummatches.album[0].image[2]["#text"]);
        setArtist(response.data.results.albummatches.album[0].artist);
        console.log(art);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  const Hover = styled.div`
    :hover {
      cursor: pointer;
      background-color: rgba(29, 185, 84, 0.2);
      transition-duration: 0.3s;
    }
  `;

  const favorite = (id) => {
    handleUpdate();
    let faveSong = {
      method: "put",
      url: `https://serene-tundra-56959.herokuapp.com/songs/${id}`,
      data: {
        is_favorite: true,
      },
      transformResponse: [
        (data) => {
          console.log(data)
          // transform the response
          return data;
        },
      ],
    };
    console.log("fave added");
    axios(faveSong);
    props.info.is_favorite= !props.info.is_favorite;
  };

  let icon =
    props.info.is_favorite == true ? (
      <img onClick={() => favorite(props.info.id)}
        className="like-btn"
        src="https://i.imgur.com/IgW2gCg.png"
        alt="test"
      />
    ) : (
      <img
        onClick={() => favorite(props.info.id)}
        className="like-btn"
        src="https://i.imgur.com/OqNOyiQ.png"
        alt="like button"
      />
    );

  return (
    <Hover className="songItem-player">
      
      <MusicPlayer song={props.info.title}/>
      <div className="player-left">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {props.info.title}
        <br />
        {artist} &nbsp; | {props.info.genre}
      </div>
      <div className="player-right">
        <p>{props.info.duration}</p>
      </div>
      {icon}
    </Hover>
  );
};

export default WebplayerSong;
