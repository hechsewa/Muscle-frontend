import React from "react"
import sound from "./01 All Of Me.mp3"

class Audioplayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            src: sound,
            cover: "https://cdn.shopify.com/s/files/1/0812/1837/products/0114-0008_grande.jpeg",
            title: "All of me",
            band: "Dixie Band",
            genre: "jazz",
            recommended: "nie"
        };
    };

    render() {
        return (
           <div className="audio-container">
               <div className="coverPhoto">
                   <img src={this.state.cover} alt="CD cover"/>
               </div>
               <div className="metadata">
                   <ul>
                       <li><b>Tytuł</b>: {this.state.title}</li>
                       <li><b>Wykonawca</b>: {this.state.band}</li>
                       <li><b>Gatunek</b>: {this.state.genre}</li>
                       <li><b>Wybrane dla ciebie</b>: {this.state.recommended}</li>
                   </ul>
               </div>
               <div className="player">
                   <audio controls="controls">
                        <source src={this.state.src} />
                   </audio>
               </div>
           </div>
        );
    };
}

export default Audioplayer;