import React from "react"
import logo from './imgs/logo-pelne-grey.png'

function NavigationBar() {
    return (
        <header className="site-header">
            <nav className="navbar navbar-expand-md navbar-dark bg-steel fixed-top">
                <div className="container">
                    <a className="navbar-brand mr-4" href="/">
                        <img className="logoHeader" src={logo} height='50px'/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggle"
                            aria-controls="navbarToggle" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarToggle">
                        <div className="navbar-nav mr-auto">
                            <a className="nav-item nav-link" href="/">strona główna</a>
                            <a className="nav-item nav-link" href="/about">o aplikacji</a>
                            <a className="nav-item nav-link" href="/credits">źródła</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavigationBar

