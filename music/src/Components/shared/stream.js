// import React, { useState, useEffect } from "react";
// import axios from "axios";


// const Stream = (props) => {

//   const [ele, setEle] = useState("https://listen.hs.llnwd.net/g3/6/6/2/0/1/1426010266.mp3")

//   // let newComp = ()=>{
//   //   return(<audio className={props.artist + "-" + props.album}>
//   //       <source src={ele}></source>
//   // </audio>)}

//   // const playAudio = () => {
//   //   let aud = newComp()
//   //   console.log(aud)
    
//   //   aud.play()
//   // }
//   // console.log(props.artist, props.album) 
//   // useEffect(() => {
//   //   const makeAPICall = async () => {
//   //     try {
//   //       const res = await fetch(`http://api.napster.com/v2.2/search/verbose?apikey=YTkxZTRhNzAtODdlNy00ZjMzLTg0MWItOTc0NmZmNjU4Yzk4&query=${props.artist}+${props.album}`);
//   //       const json = await res.json();
      
//   //       setEle(json.search.data.tracks[0].previewURL)
//   //       console.log(ele)
//   //     } catch (err) {
//   //       console.error(err);
//   //     }
//   //   };
//   //   makeAPICall();
//   // }, []);  

//   // let aud2 = <audio className={props.artist + "-" + props.album}>
//   <source src={ele}></source>
//   </audio>
//   return (
//     <div>
//         <button onClick={playAudio}>
//   <span>Play {props.title}</span>
//         </button>
//         <audio className={props.artist + "-" + props.album}>
//         <source src={ele}></source>
//         </audio>
//       </div>
//   )

// };

// export default Stream;


// // const url =
// // "https://cors-anywhere.herokuapp.com/api.napster.com/v2.2/tracks/weezer/weezer-blue-album-deluxe-edition/say-it-aint-so/apikey=MTI1NTU5NjctMTA4YS00Zjc4LWIyY2EtYmNkZjJkOGUyYTk3";

