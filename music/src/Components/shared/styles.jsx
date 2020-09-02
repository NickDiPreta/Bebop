import { animated } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'


const Container = styled(animated.div)`
z-index: 1000;
margin-top: 5vh;
  position: absolute;
  top:0px;
  right:0px;
  display:flex;
  flex-direction:column;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
  color:white;
  
`

const Item = styled(animated.div)`
  width: 80%;
  height: 80%;
  background: white;
  border-radius: 5px;
  will-change: transform, opacity;
  margin-bottom: 10px;
  :hover {
    color: rgba(45, 70, 185,1)
  }
`
const BHover = styled.div`
:hover {
  cursor: pointer;
  background-color: rgba(29, 185, 84, 0.2);
  transition-duration: 0.3s;
}`

const BrowserHover = styled.div`
color: white;
:hover {
  cursor: pointer;
  background-color: rgba(29, 185, 84, 0.2);
  transition-duration: 0.3s;
}
`
const Hover = styled.div`
:hover {
  cursor: pointer;
  background-color: rgba(29, 185, 84, 0.2);
  transition-duration: 0.3s;
}
`;
const HeartBtn = styled.div`
opacity: 0.5;

:hover {
  color: black;
  filter: invert(1);
  opacity: 1;

  transition-duration: 0.3s;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.4);
}
`;
const MBtn = styled.div`
opacity: 0.5;
:hover {
  filter: brightness(0) invert(1);
  opacity: 1;
  color: white;
  transition-duration: 0.3s;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.4);
}
`;
const PLBtn = styled.div`
opacity: 0.5;
:hover {
  filter: brightness(0) invert(1);
  opacity: 1;
  color: white;
  transition-duration: 0.3s;
  cursor: pointer;
}
`;

export { Container, Item, BHover, BrowserHover, Hover, HeartBtn, PLBtn, MBtn }
