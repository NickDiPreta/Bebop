import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/home";
import Playlist from "./Components/playlist";
import Webplayer from "./Components/webplayer";
import Favorites from "./Components/favorites";
import Personal from "./Components/personal";
import MyPlaylist from "./Components/shared/myplaylist";
import Search from "./Components/shared/search";
import Browse from "./Components/shared/browse"

const App = (props) => {
  return (
    <div className="App">
      <Switch>
      <Route path="/browse/:name" exact render={(props) => <Browse {...props} />} />
        <Route path="/search" exact render={(props) => <Search {...props} />} />
        <Route
          path="/myplaylists/:name"
          exact
          render={(props) => <MyPlaylist {...props} />}
        />
        <Route path="/webplayer" exact render={(props) => <Webplayer />} />
        <Route path="/playlists/1" exact render={(props) => <Playlist />} />
        <Route
          path="/songs/favorites"
          exact
          render={(props) => <Favorites />}
        />
        <Route path="/library" exact render={(props) => <Personal />} />
        <Route path="/" exact render={(props) => <Home {...props}/>} />
      </Switch>
    </div>
  );
};

export default App;
