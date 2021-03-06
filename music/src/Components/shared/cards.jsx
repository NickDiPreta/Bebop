import * as React from "react";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
import styled from "styled-components";
import "../../App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

const clamp = (value: number, clampAt: number = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};

const movies = [
  { url: "https://i.imgur.com/cqEKorG.png", link: "/browse/hiphop" },
  { url: "https://i.imgur.com/MP9os3g.png", link: "/browse/electronic" },
  { url: "https://i.imgur.com/SxMdohA.png", link: "/browse/rock" },
  { url: "https://i.imgur.com/UDzlFUH.png", link: "/browse/pop" },
];

const Cards = () => {
  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)",
  }));

  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`,
    });
  });

  const sideScroll = (element, direction, speed, distance, step) => {
    let scrollAmount = 0;
    let slideTimer = setInterval(function () {
      if (direction == "left") {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  };
  const rightScroll = () => {
    let container = document.getElementById("container");
    sideScroll(container, "right", 50, 340, 340);
  };
  const leftScroll = () => {
    let container = document.getElementById("container");
    sideScroll(container, "left", 50, 340, 340);
  };

  const GrnBtn = styled.button`
    :hover {
      cursor: pointer;
    }
  `;
  return (
    <>
      <div className="cards-wrapper">
        <GrnBtn className="thin-green" onClick={() => leftScroll()}>
          <img
            className="slidebtn"
            src="https://i.imgur.com/8fZSZwW.png"
            alt="left"
          />
        </GrnBtn>
        <div id="container" className="container" {...bind()}>
          {movies.map((src) => (
            <Link to={src.link}>
            <animated.div
              key={src}
              className="card-genre"
              style={{
                ...style,
                backgroundImage: `url(${src.url})`,
              }}
            />
            </Link>
          ))}
        </div>

        <GrnBtn className="thin-green" onClick={() => rightScroll()}>
          <img
            className="slidebtn"
            src="https://i.imgur.com/KyI9cqF.png"
            alt="right"
          />
        </GrnBtn>
      </div>
    </>
  );
};

export default Cards;
