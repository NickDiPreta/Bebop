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

export { Container, Item }
