import React , {useState, useEffect} from 'react';
import './App.css';
import Song from "./Components/song"
import Nav from "./Components/nav"

const App = (props) => {
  const[songs, setSongs] = useState([])

  useEffect( () => {
    const makeAPICall = async () => {
      try {
      const res = await fetch('http://localhost:3000/songs')  
      const json = await res.json()
      setSongs(json)
      } catch (err) {
         console.error(err)
      }
    }
    makeAPICall()
  }, [])



  const songList = songs.map(e=>{
    
    return(
      <li  key={e.id}><Song info={e}/></li>
    )
  })
  return (
    <div className="App">
      <Nav className="Nav"/>
      <h1>Looking for music?</h1>
      <h3>Start listening to the best new releases.</h3>
      <button className="greenboy">OPEN WEB PLAYER</button>
      <ul className="songContainer">{songList}</ul>
    </div>
  );
}

export default App;
