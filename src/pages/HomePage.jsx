import travels from "../data/Travels"

import { Link } from "react-router-dom"

function HomePage() {

    return (
        <>
            <ul>
                {travels.map((travel, index) => (
                    <li key={travel.id}>

                        <Link className="travel-link" to={`/travel/${travel.id}`} >{travel.destinazione}</Link>

                        <div>Inizio Viaggio: {travel.dataInizio}</div>
                        <div>Fine Viaggio: {travel.dataFine}</div>

                    </li>)
                )}
            </ul>
        </>
    )
}

export default HomePage