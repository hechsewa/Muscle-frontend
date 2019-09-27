import React from "react"

class Homepage extends React.Component {
    constructor(props){
        super(props);
        this.startSongs = this.startSongs.bind(this);
    }

    startSongs(e) {
        this.props.history.push('/song/1');
        window.location.reload();
    }

    render() {
        return (
            <div className="home">
                <h1>MuSCLe - Music Score Collection for machine Learning</h1>
                <div className="welcome">
                    <p>Cześć! Dzięki za chwilę twojego czasu. Ankieta powinna zająć maksymalnie do 30 minut.
                        Jeśli chcesz wiedzieć więcej o tym po co to robisz i po co ja to robię - kilknij tutaj lub w
                        nawigacji.</p>
                </div>

                <h4>Jak będzie wyglądać ankieta?</h4>
                <div className="instrukcje">
                    <ul>
                        <li>posłuchaj 30 sekundowego fragmentu utworu</li>
                        <li>kliknij + jeżeli utwór Ci się podobał, - jeżeli nie</li>
                        <li>po kliknięciu strona automatycznie przeniesie Cię do następnego utworu</li>
                        <li>powtórz operację aż dojdziesz do strony informującej o końcu ankiety</li>
                    </ul>
                </div>
                <p>
                    Kolejne wyświetlane przez aplikację utwory będą bazować na twoich poprzednich ocenach i dobierać
                    piosenki,
                    które odpowiadają twoim gustom. Im więcej utworów ocenisz, tym dokładniejsze będą propozycje. Jak
                    będziesz gotowy
                    kliknij poniższy przycisk, aby rozpocząć.
                </p>
                <div className="buttonHolder">
                    <button className="buttonMain" type="button" onClick={this.startSongs}>ROZPOCZNIJ</button>
                </div>
            </div>
        );
    };
}

export default Homepage;

