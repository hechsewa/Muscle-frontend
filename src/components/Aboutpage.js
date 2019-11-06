import React from "react"

function Aboutpage() {
    return(
        <div className="about">
            <h1>O MuSCLe</h1>
            <p>MuSCLe jest aplikacją webową z systemem rekomendacji piosenek, która powstała w ramach mojej pracy
            inżynierskiej. Tematem pracy jest rekomendacja utworów muzycznych na podstawie ocen innych użytkowników
                oraz cech audio piosenek.<br/><br/>
            Głównym celem mojej pracy jest jednak zebranie danych, czyli Twoich ocen utworów. Im więcej użytkowników
            przejdzie proces oceniania, tym więcej danych zbierzemy, dlatego podaj linka dalej znajomym :)
            Takie dane są potrzebne do lepszego działania systemów rekomendacji bazujących na podobieństwie innych
            użytkowników, jak i tych hybrydowych.
            </p>
        </div>
    )
}

export default Aboutpage;
