import * as React from "react";
import {withRouter} from "react-router-dom";


class NameForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            gender: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAgeChange = this.handleAgeChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.radioChange = this.radioChange.bind(this);
    };

    handleNameChange(event) {
    this.setState({name: event.target.value});
    };

    handleAgeChange(event) {
    this.setState({age: event.target.value});
    };

    handleSubmit(event) {
     //validation
     if (this.state.name === '') {
         alert('Proszę podać pseudonim');
     } else if (this.state.age === '') {
         alert('Proszę podać wiek');
     } else if (this.state.gender === '') {
         alert('Proszę podać płeć');
     } else {
         alert('Podano następujące imię: ' + this.state.name);
         //tu wysylanie do bazy danych
         //tu przejscie do piosenki
         this.props.history.push('/song/1');
         window.location.reload();
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