import React from "react"
import axios from "axios";

function close() {
    axios
            .get('https://muscle-server.herokuapp.com/finish',
                )
            .then(response => {
                }).catch((error) => {
                console.log(error);
        })
}

function Finishpage() {
    close();
    return(
        <div className="finish">
            <h1>Koniec</h1>
            <p>Dziękuję za oceny, to już koniec piosenek.</p>
        </div>
    )
}

export default Finishpage;