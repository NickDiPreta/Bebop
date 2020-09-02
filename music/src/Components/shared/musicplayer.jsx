import React, { useState, useEffect } from "react";
import axios from "axios";

const MusicPlayer = (props) => {
  const [track, setTrack] = useState("");
  useEffect(() => {
    const makeAPICall = async () => {
      await axios
        .get(
          `http://api.napster.com/v2.2/search/verbose?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&per_type_limit=1&query=${props.song}&type=track`
        )
        .then((response) => {
          console.log(response);
          setTrack(response.data.search.data.tracks[0].previewURL);
        })
        .catch((e) => console.log(e));
    };
    makeAPICall();
  }, []);

  let audio = new Audio(track);

  const start = () => {
    audio.play();
  };

  return (
    <div className="player">
      <button className="playButton" onClick={start}>
        <img
          className="play-btn"
          src="https://i.imgur.com/ICYXOaG.png"
          alt="play"
        />
      </button>
    </div>
  );
};

export default MusicPlayer;
