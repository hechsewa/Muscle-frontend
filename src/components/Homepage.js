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
                    <p>Cześć! Dzięki za chwilę twojego czasu. Ocenianie powinno zająć maksymalnie do 10 minut.
                        Jeśli chcesz wiedzieć więcej o projekcie - kilknij
                        <a href="/about"> tutaj</a>.
                    </p>
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
                    Na początku posłuchasz i ocenisz 30 losowych utworów. Następnie na podstawie twoich ocen
                    i ocen innych użytkowników, system poleci 10 piosenek, które mogą Ci się spodobać. Posłuchaj
                    rekomendacji i oceń je.
                    Nie przerywaj oceniania. Jak
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

