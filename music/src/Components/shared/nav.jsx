import React, { useState } from "react";
import PopupMenu from "./popupmenu";

const Nav = (props) => {
  const [menuOpen, setOpen] = useState(false);

  const handleOpen = () =>{
    setOpen(!menuOpen)
    props.setOverlay(!props.overlay)
  }
  return (
    <>
      <nav>
        <div className="nav-left">
          <img id="logo" src="https://i.imgur.com/4a3BQ7B.png" alt="logo" />
          <h3>Bebop</h3>
        </div>
        <div className="nav-right">
          
          {menuOpen ? (
            <PopupMenu overlay={props.overlay} setOverlay={props.setOverlay} setOpen={setOpen} menuOpen={menuOpen} {...props}/>
          ) : (
            <img id="burger" onClick={()=>handleOpen()}alt="menu" src="https://i.imgur.com/YGLMIUe.png" />
          )}
        </div>
      </nav>
    </>
  );
};

export default Nav;
