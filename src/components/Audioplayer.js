import React from "react"
import ReactAudioPlayer from 'react-audio-player';


class Audioplayer extends React.Component {
    constructor(props) {
        super(props);
        let filename = `/songs/song${this.props.id-1}.mp3`;
        this.state = {
            playing: false,
            src: filename,
            cover: 'https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/514dc845-04f5-4538-8a4f-869b64243265/1-2.jpg',
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
                   <img src={this.props.cover==='' ? this.state.cover : this.props.cover} alt="CD cover"/>
               </div>
               <div className="metadata">
                   <ul>
                       <li><b>Tytuł</b>: {this.props.title}</li>
                       <li><b>Wykonawca</b>: {this.props.band}</li>
                       <li><b>Gatunek</b>: {this.props.genre}</li>
                       <li><b>Wybrane dla ciebie</b>: {this.props.recommended}</li>
                   </ul>
               </div>
               <div className="player">
                  <audio controls>
                      <source src = {process.env.PUBLIC_URL + this.state.src} />
                  </audio>
               </div>
           </div>
        );
    };
}

export default Audioplayer;