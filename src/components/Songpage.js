import React from "react"
import Audioplayer from "./Audioplayer";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ForwardIcon from '@material-ui/icons/Forward';
import IconButton from "@material-ui/core/IconButton/index";
import { withRouter } from "react-router-dom";
import axios from 'axios';
import Rating from "./Rating";

class Songpage extends React.Component{
    constructor(props){
        super(props);
        this.redirect = this.redirect.bind(this);
        this.ratingChanged = this.ratingChanged.bind(this);
        this.state = {
            songId: this.props.match.params.id,
            userId: this.props.match.params.userid,
            stars: 0,
            img: '',
            fetchedMeta: {
                album: '',
                band: '',
                genre: '',
                title: ''
            },
            recommended: '',
            counter: ''
        };
        this.nextSong = React.createRef();
        this.componentWillMount = this.componentWillMount.bind(this);
        this.getBase64 = this.getBase64.bind(this);
        this.setCounter = this.setCounter.bind(this);
    };

    getBase64() {
        axios
            .get('https://muscle-server.herokuapp.com/pic/cover'+this.state.songId+'.jpg',
                { responseType: 'arraybuffer' })
            .then(response => {
                const base64 = btoa(
                    new Uint8Array(response.data).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    '',),);
                if (base64 === '') {
                    this.setState({ img: ''});
                } else {
                    this.setState({ img: "data:;base64," + base64 });
                }
                }).catch((error) => {
                console.log(error);
        })
    }

    setCounter() {
       axios
            .get('https://muscle-server.herokuapp.com/user/'+this.state.userId+'/grades/sum')
            .then((response) => {
                   this.setState({
                       counter: response.data["grade"]+1,
                       recommended: (response.data["grade"])<=30?'losowy':'polecony'
                   });
                   console.log(response.data);
                }).catch((error) => {
                console.log(error);
        })
    }

    componentWillMount () {
        axios.get('https://muscle-server.herokuapp.com/meta/'+this.state.songId)
            .then( (response) => {
                console.log("zrobił reload..");
                //console.log("response", response);
                this.setState({
                    fetchedMeta: response.data
                });
                let title = response.data.title;
                if (title.length > 50) {
                    title = title.substr(0,40)+'...';
                    this.setState({fetchedMeta: {
                        album: response.data.album,
                        band: response.data.band,
                        genre: response.data.genre,
                        title: title
                    }});
                }
            }).catch( (error) => {
            console.log(error);});

        this.setCounter();
        this.getBase64();
     }

    ratingChanged(r) {
        this.setState({stars: r});
    }

    redirect(e) {
        if (this.state.stars === 0) {
            window.alert("Proszę ocenić utwór");
        } else {
            //zapis oceny do bazy

            const grade_obj = {
            "song_id": this.state.songId,
            "user_id": this.state.userId,
            "grade": this.state.stars
            };
            // zapisz ocenę do bazy
            let urlL = "https://muscle-server.herokuapp.com/user/1/song/1/grade";
            const options = {
             method: 'POST',
             headers: { 'content-type': 'application/json' },
             data: JSON.stringify(grade_obj),
             url: urlL,
            };
            console.log("przed zapisem do bazy oceny...");
            axios(options).then((res) => {
                console.log("po zapisie do bazy oceny...");
                if (this.state.counter+1===40) {
                    this.props.history.push('/finish');
                    window.location.reload();
                } else {
                    if (this.state.counter < 30) { // pierwsze 30 utworów jest losowe
                        axios.get('https://muscle-server.herokuapp.com/user/' + this.state.userId + '/random')
                            .then((response) => {
                                if (response.data['song_id'] !== -1) {
                                    this.props.history.push('/user/' + this.state.userId + '/song/' + response.data['song_id']);
                                    window.location.reload();
                                }
                            }).catch((error) => {
                            console.log(error);
                        });
                    } else { // pobieramy id rekomendowanej piosenki
                        axios.get('https://muscle-server.herokuapp.com/user/' + this.state.userId + '/recommend')
                            .then((response) => {
                                let rec_song = response.data['song_id'];
                                console.log("jest rekomendowany..."+rec_song);
                                if (rec_song !== -1) {
                                    this.props.history.push('/user/' + this.state.userId + '/song/' + rec_song);
                                    window.location.reload();
                                }
                            }).catch((error) => {
                            console.log(error);
                        });
                    }
                }
            });
        }
    }

    // <button className="buttonGrade" type="button" onClick={disliked}>-</button>
    render() {
        return (
            <div className="audio">
                <h1>Ocena piosenki</h1>
                <Audioplayer cover={this.state.img}
                             id = {this.state.songId}
                             title={this.state.fetchedMeta.title}
                             band={this.state.fetchedMeta.band}
                             genre={this.state.fetchedMeta.genre}
                             recommended={this.state.recommended}
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