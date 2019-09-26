import React from "react"
import Audioplayer from "./Audioplayer";

function Songpage({match}) {
    let song_id = match.params.id;

    return(
        <div className="audio">
            <h1>Ocena piosenki {song_id}</h1>
            <Audioplayer />
            <br/>
            <div className="ocena">
                 <div className="buttonHolder">
                        <button className="buttonGrade" type="button" onClick="alert(':)')">+</button>
                        <button className="buttonGrade" type="button" onClick="alert(':)')">-</button>
                </div>
                <h5>Ocena:</h5>
            </div>
        </div>
    )
}

export default Songpage;