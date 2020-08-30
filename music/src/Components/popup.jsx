import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import styled, { css } from "styled-components";

const Popup = (props) => {
  return (
    <div className="popup">
        
      <form onSubmit={props.submitPlaylist}id="newChannelForm">
        <input type="text" value={props.Name} onChange={props.handleNameChange} placeholder="Name"></input>
      </form>
    </div>
  );
};

export default Popup;