import * as React from "react";
import {withRouter} from "react-router-dom";
import axios from 'axios';

class NameForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            gender: '',
            user_id: 0
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.radioChange = this.radioChange.bind(this);
        this.postUserData = this.postUserData.bind(this);
    };

    handleNameChange(event) {
    this.setState({name: event.target.value});
    };

    handleAgeChange(event) {
    this.setState({age: event.target.value});
    };

    postUserData() {
        const user = {
            pseudo: this.state.name.toString(),
            age: this.state.age.toString(),
            gender: this.state.gender.toString()
        };
    }

    handleSubmit(event) {
     //validation
     if (this.state.name === '') {
         alert('Proszę podać pseudonim');
     } else if (this.state.age === '') {
         alert('Proszę podać wiek');
     } else if (this.state.gender === '') {
         alert('Proszę podać płeć');
     } else if (isNaN(this.state.age)) {
         alert("Wiek to tylko liczba");
     } else {
         //alert('Podano następujące imię: ' + this.state.name);
         //this.postUserData();
        const user = {
            "pseudo": this.state.name.toString(),
            "age": this.state.age.toString(),
            "gender": this.state.gender.toString()
        };

        let urlL = "https://muscle-server.herokuapp.com/user/1";
        const options = {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          data: JSON.stringify(user),
          url: urlL,
        };
        axios(options).then((res) => {
            this.setState({user_id: res.data.user_id});
            if (this.state.user_id !== 0) {
                this.props.history.push('/user/' + this.state.user_id + '/song/1');
                window.location.reload();
            } else {
                alert("Coś poszło nie tak, spróbuj ponownie.");
            }
        });
     }
    event.preventDefault();
    };

    radioChange(e) {
    this.setState({
      gender: e.currentTarget.value
    });
  };

    render(){
        return (
            <div className='nameForm'>
                <h2>Metryczka</h2>
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="nameInput">Pseudonim</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleNameChange}
                           className="form-control" id="nameInput" placeholder="pseudo"/>
                </div>
                 <div className="form-group">
                    <label htmlFor="ageInput">Wiek</label>
                    <input type="text" name="name" value={this.state.age} onChange={this.handleAgeChange}
                           className="form-control" id="ageInput" placeholder="wiek"/>
                </div>
                <div className="form-group">
                    <label htmlFor="genderInput">Płeć</label>
                    <br/>
                    <div className="radio-option">
                        <input type="radio"
                               value="f"
                               checked={this.state.gender === "f"}
                               onChange={this.radioChange} /> kobieta
                    </div>
                    <div className="radio-option">
                        <input type="radio"
                               value="m"
                               checked={this.state.gender === "m"}
                               onChange={this.radioChange}/> mężczyzna
                    </div>
                    <div className="radio-option">
                        <input type="radio"
                               value="n"
                               checked={this.state.gender === "n"}
                               onChange={this.radioChange}/> wolę nie podawać
                    </div>
                </div>
                <input type="submit" value="Rozpocznij" className="buttonMain" />
            </form>
            </div>
        )
    };
}

export default withRouter(NameForm);