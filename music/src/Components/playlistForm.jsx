import React, { useState, useEffect } from "react";
import Song from "./song";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

const playlistForm = (props) =>{
    return(
<div className="New-playlist">
          <form
          //   onSubmit={handleSubmit}
          >
            <input
              placeholder="New Playlist"
              // value={playlist.name}
              name="name"
              // onChange={handleChange}
            />
            <br />
            <select
              // value={playlist.is_secret}
              name="is_secret"
              // onChange={handleChange}
            >
              <option value="false">Public</option>
              <option value="true">Secret</option>
            </select>
            <br />
            <button className="add-button" type="submit">
              <span className="material-icons add-icon">queue</span>
            </button>
          </form>
        </div>)
}

export default playlistForm