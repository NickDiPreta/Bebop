import React, { useState, useEffect } from "react";



const Promo = (props) => {
    return(
        <div className="promo">
            <div>
            <h1 className="promo-header1">Make the most of Bebop</h1>
            <h3 className="promo-header3">Manage your account</h3>
            <p>Edit your profile, change your password and update your payment information.</p>
            </div>
            <div>
                <h3 className="promo-header3">Get our free app</h3>
                <p>Seamlessly listen to music you love. Download the spotify app for your computer.</p>
            </div>
            <div>
                <h3 className="promo-header3">Listen on the web</h3>
                <p>To play and share music without the app, all within your browser, go to play.spotify.com</p>
            </div>
        </div>
    )
}

export default Promo