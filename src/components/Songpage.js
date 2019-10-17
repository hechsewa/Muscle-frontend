import React from "react"
import Audioplayer from "./Audioplayer";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ForwardIcon from '@material-ui/icons/Forward';
import IconButton from "@material-ui/core/IconButton/index";
import { withRouter } from "react-router-dom";
import Rating from "./Rating";


class Songpage extends React.Component{
    constructor(props){
        super(props);
        this.liked = this.liked.bind(this);
        this.disliked = this.disliked.bind(this);
        this.redirect = this.redirect.bind(this);
        this.ratingChanged = this.ratingChanged.bind(this);
        this.state = {
            songId: this.props.match.params.id,
            stars: 0
        };
        this.nextSong = React.createRef();
    };

    ratingChanged(r) {
        this.setState({stars: r});
    }

    liked(e) {
        //e.target.style.color='#ffffff';
        e.preventDefault();
        this.state.like = true;
        const upBtn = this.thumbUp.current;
        const downBtn = this.thumbDown.current;
        upBtn.style.color = '#d77a61';
        downBtn.style.color = '#0000008A';
    };

    disliked(e) {
        e.preventDefault();
        this.state.like = false;
        const upBtn = this.thumbUp.current;
        const downBtn = this.thumbDown.current;
        upBtn.style.color = '#0000008A';
        downBtn.style.color = '#d77a61';
    }

    redirect(e) {
        if (this.state.stars === 0) {
            window.alert("Proszę ocenić utwór");
        } else if (this.state.stars === 2) {
            window.alert("Dwójeczka");
        } else {
            let newId = parseInt(this.state.songId);
            newId = newId + 1;
            if (newId > 100) {
                this.props.history.push('/finish');
                window.location.reload();
            } else {
                this.props.history.push('/song/' + newId);
                window.location.reload();
            }
        }
    }

    // <button className="buttonGrade" type="button" onClick={disliked}>-</button>
    render() {
        return (
            <div className="audio">
                <h1>Ocena piosenki {this.state.songId}</h1>
                <Audioplayer cover={''}
                             title={'All Of Me'}
                             band={'DixiBand'}
                             genre={'Jazz'}
                             recommended={'yes'}
                />
                <br/>
                <div className="btnPanel">
                    <div className="buttonGradeHolder">
                        <Rating stars={this.state.stars} onRatingChange={this.ratingChanged}/>
                    </div>
                    <div className="btnNextHolder">
                        <IconButton className="nextBtn"
                                            aria-label="next song"
                                            onClick={this.redirect}
                                            ref={this.nextSong}>
                                    <ForwardIcon/>
                        </IconButton>
                    </div>
                </div>
            </div>
        );
    };
}

export default withRouter(Songpage);