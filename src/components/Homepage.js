import React from "react"
import logoPink from './imgs/logo-pelne-pink.png'

class Homepage extends React.Component {
    constructor(props){
        super(props);
        this.startSongs = this.startSongs.bind(this);
    }

    startSongs(e) {
        this.props.history.push('/metric');
        window.location.reload();
    }

    render() {
        return (
            <div className="home">
                <img className='logoHome' src={logoPink} alt={'muscle logo pink'} />
                <div className="welcome">
                    <p>Cześć! Dzięki za chwilę twojego czasu. Ocenianie powinno zająć maksymalnie do 30 minut.
                        Jeśli chcesz wiedzieć więcej o tym po co to robisz i po co ja to robię - kilknij <a href="/about">tutaj</a> lub w
                        nawigacji.</p>
                </div>

                <h4>Jak będzie wyglądać ankieta?</h4>
                <div className="instrukcje">
                    <ul>
                        <li>posłuchaj 30 sekundowego fragmentu utworu</li>
                        <li>oceń utwór w skali 1-5, przyznając mu gwiazdki</li>
                        <li>po kliknięciu przycisku strzałki strona automatycznie przeniesie Cię do następnego utworu</li>
                        <li>powtórz operację aż dojdziesz do strony informującej o końcu oceniania</li>
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

