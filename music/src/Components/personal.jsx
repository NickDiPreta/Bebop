import React, { useState, useEffect } from "react";
import Song from "./song";
import styled from "styled-components";
import {
    BrowserRouter as Router,
    Link,
  } from "react-router-dom";
import Nav from "./shared/nav"
import WebplayerMenu from "./shared/webplayermenu";


const Personal = (props) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const res = await fetch("http://localhost:3000/songs");
        const json = await res.json();
        setSongs(json);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  const songList = songs.map((e) => {
    if (e.is_favorite == true){
    return (
      <li key={e.id}>
        <Song info={e} />
      </li>
    );}
  });

  const GrnBtn = styled.button`
    :hover {
      background-color: rgba(30, 215, 96, 1);
      transition-duration: 0.3s;
      cursor: pointer;
    }
  `;
  return (
    <>
    <WebplayerMenu />
    <div className="width-take">
      <ul className="songContainer">{songList}</ul>
      </div>
    </>
  );
};

export default Personal;
