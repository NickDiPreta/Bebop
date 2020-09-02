import React, { useState, useRef } from "react";
import { render } from "react-dom";
import { useTransition, useSpring, useChain, config } from "react-spring";
import { Container, Item } from "./styles";
import data from "./data";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

export default function PopupMenu(props) {
  const [open, set] = useState(true);

  const springRef = useRef();
  const { size, opacity, ...rest } = useSpring({
    ref: springRef,
    config: config.stiff,
    from: { size: "4px", background: "black" },
    to: { size: open ? "400%" : "4px", background: open ? "black" : "white" },
  });

  const transRef = useRef();
  const transitions = useTransition(open ? data : [], (item) => item.name, {
    ref: transRef,
    unique: true,
    trail: 400 / data.length,
    from: { opacity: 0, transform: "scale(0)" },
    enter: { opacity: 1, transform: "scale(1)" },
    leave: { opacity: 0, transform: "scale(0)" },
  });

  const handleClick = () => {
    set((open) => !open);
    props.setOpen(!props.menuOpen);
    props.setOverlay(!props.overlay)
  };


  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springRef, transRef] : [transRef, springRef], [
    0,
    open ? 0.1 : 0.6,
  ]);

  const handleRedirect = (link) =>{
    window.location = link
  }

  return (
    <>
      <Container
        style={{ ...rest, width: size, height: size }}
        onClick={() => handleClick()}
      >
          <span className="closer">X</span>
        {transitions.map(({ item, key, props }) => (
          <Item key={key} style={{ ...props, background: item.css }}>
            <div className="menu-text" onClick={()=>handleRedirect(item.link)}>{item.name}</div>
          </Item>
        ))}
      </Container>
    </>
  );
}
