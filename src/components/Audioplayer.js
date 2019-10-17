import React from "react"
import sound from "./01-Until_We_Get_By.mp3"

class Audioplayer extends React.Component {
    constructor(props) {
        super(props);
        let cover = this.props.cover==='' ?
            'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/514dc845-04f5-4538-8a4f-869b64243265/1-2.jpg'
            :this.props.cover;
        this.state = {
            playing: false,
            src: sound,
            cover: cover,
            title: this.props.title,
            band: this.props.band,
            genre: this.props.genre,
            recommended: this.props.recommended
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