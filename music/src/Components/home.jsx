import React, { useState, useEffect } from "react";
import Song from "./song";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Nav from "./shared/nav";
import Promo from "./promo";

const Home = (props) => {
  const [songs, setSongs] = useState([]);
  const [track, setTrack] = useState('')
  
  const handleTrack = (e)=>{
    console.log(e)
    
  }
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

  const songList = songs.slice(0,6).map((e) => {
    return (
      <li key={e.id}>
        <Song track={track} setTrack={setTrack} handleTrack={handleTrack} info={e} />
      </li>
    );
  });

  const GrnBtn = styled.button`
  color: fff;
    :hover {
      background-color: rgba(30, 215, 96, 1);
      transition-duration: 0.3s;
      cursor: pointer;
    }
  `;



  return (
    <div className="home">
      <Nav />
      <h1 className="home-title">Jump back in</h1>
      <h3 className="jumbotron">Pick up your music right where you left off.</h3>
      <Link to="/webplayer">
        <GrnBtn className="greenboy">OPEN WEB PLAYER</GrnBtn>
      </Link>
      <ul className="songContainer">{songList}</ul>
      {/* <Promo /> */}
    </div>
  );
};

export default Home;
