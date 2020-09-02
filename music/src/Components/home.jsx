import React, { useState, useEffect } from "react";
import Song from "./song";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Nav from "./shared/nav";
import Promo from "./promo";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import Cards from "./shared/genre-cards";
import HomeTiles from "./shared/home-tiles"



const clamp = (value: number, clampAt: number = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};
const Home = (props) => {
  const [songs, setSongs] = useState([]);
  const [track, setTrack] = useState("");
  const [overlay, setOverlay] = useState(false);

  const [style, set] = useSpring(() => ({
    transform: "perspective(1000px) rotateY(0deg)",
  }));

  const lists = [
    "https://i.imgur.com/cqEKorG.png",
    "https://i.imgur.com/MP9os3g.png",
    "https://i.imgur.com/SxMdohA.png",
    "https://i.imgur.com/UDzlFUH.png",
  ];


  const handleTrack = (e) => {
    console.log(e);
  };
  useEffect(() => {
    const makeAPICall = async () => {
      try {
        const res = await fetch("https://serene-tundra-56959.herokuapp.com/songs");
        const json = await res.json();
        setSongs(json);
      } catch (err) {
        console.error(err);
      }
    };
    makeAPICall();
  }, []);

  const songList = songs.slice(1, 25).map((e) => {
    return (
      <li className="songlist-items" key={e.id}>
        <animated.div key={e.name} className="card" style={{ ...style }}>
          <Song
            track={track}
            setTrack={setTrack}
            handleTrack={handleTrack}
            info={e}
          />
        </animated.div>
      </li>
    );
  });

  const songList2 = songs.slice(51, 75).map((e) => {
    return (
      <li key={e.id}>
        <animated.div key={e.name} className="card" style={{ ...style }}>
          <Song
            track={track}
            setTrack={setTrack}
            handleTrack={handleTrack}
            info={e}
          />
        </animated.div>
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
  const GrnBtn2 = styled.button`
    color: fff;
    width: 5vw;
    :hover {
      background-color: rgba(30, 215, 96, 0.7);
      transition-duration: 0.3s;
      cursor: pointer;
      border-radius: 0px;
    }
  `;

  const overlayOpen = overlay == true ? "home-overlay" : "home";

  const rightScroll = () => {
    let container = document.getElementById("song-Container");
    let container2 = document.getElementById("song-Container2");
    sideScroll(container, "right", 50, 200, 50);
  };
  const leftScroll = () => {
    let container = document.getElementById("song-Container");
    sideScroll(container, "left", 50, 200, 50);
  };

  const sideScroll = (element, direction, speed, distance, step) => {
    let container2 = document.getElementById("song-Container2");
    let scrollAmount = 0;
    let slideTimer = setInterval(function () {
      if (direction == "left") {
        element.scrollLeft -= step;
        container2.scrollLeft -= step*0.9999;
      } else {
        element.scrollLeft += step;
        container2.scrollLeft += step*0.9999;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  };
  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`,
    });
  });
  return (
    <div className={overlayOpen}>
      <Nav overlay={overlay} setOverlay={setOverlay} {...props}/>
      <h1 className="home-title">Jump back in</h1>
      <h3 className="jumbotron">
        Pick up your music right where you left off.
      </h3>
      <Link to="/webplayer">
        <GrnBtn className="greenboy">OPEN WEB PLAYER</GrnBtn>
      </Link>
     <div className="double-container">
        <GrnBtn2 className="thin-green-mod" onClick={() => leftScroll()}>
          <img
            className="slidebtn"
            src="https://i.imgur.com/8fZSZwW.png"
            alt="left"
          />
        </GrnBtn2>
        <div className="home-cards">
        <ul id="song-Container" className="songContainer" {...bind()}>
          {songList}
        </ul>

        <ul id="song-Container2" className="songContainer" {...bind()}>
          {songList2}
        </ul>
        </div>
        <GrnBtn2 className="thin-green-mod-right" onClick={() => rightScroll()}>
          <img
            className="slidebtn"
            src="https://i.imgur.com/KyI9cqF.png"
            alt="right"
          />
        </GrnBtn2>
        </div>
        <div className="mobile-homepage-vars">
          <span id="mobile-favorite-genres">Your Favorite Genres</span>
      <Cards lists={lists}/>
      <span className="mobile-header">Browse All</span>
      <HomeTiles />
      </div>
    </div>
  );
};

export default Home;
