import React from "react"

class Audioplayer extends React.Component {
    constructor(props){
        super(props);
        //this.state.playing = false;
    }

    render() {
        return (
           <div className="audio-container">
               <div className="coverPhoto">
                   <img src="https://cdn.shopify.com/s/files/1/0812/1837/products/0114-0008_grande.jpeg" alt="CD cover"/>
               </div>
               <div className="metadata">
                   <ul>
                       <li><b>Tytuł</b>: Ray of sun</li>
                       <li><b>Wykonawca</b>: Ray Charles</li>
                       <li><b>Gatunek</b>: Pop</li>
                       <li><b>Wybrane dla ciebie</b>: Tak</li>
                   </ul>
               </div>
               <div className="player">
                   <audio controls preload="false">
                        <source src="" />
                   </audio>
               </div>
           </div>
        );
    };
}

export default Audioplayer;