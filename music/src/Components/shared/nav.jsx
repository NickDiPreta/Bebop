import React from "react";


const Nav = (props) => {
  return (
    <nav>
        <div className="nav-left">
      <img id="logo" src="https://i.imgur.com/4a3BQ7B.png" alt="logo" />
      <h3>Bebop</h3>
      </div>
      <div className="nav-right">
      <img id="avatar" alt="avatar" src="https://i.imgur.com/H8FXn7l.png" />
      <img id="burger" alt="menu" src="https://i.imgur.com/YGLMIUe.png" />
      </div>
    </nav>
  );
};

export default Nav;
