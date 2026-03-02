import travels from "../data/Travels"

import { Link } from "react-router-dom"

function HomePage() {

    return (
        <>
            <ul>
                {travels.map((travel, index) => (
                    <li key={travel.id}>
                        <Link to={`/travel/${travel.id}`} >
                            <strong>{travel.destinazione}</strong>
                            <div>Inizio Viaggio: {travel.dataInizio}</div>
                            <div>Fine Viaggio: {travel.dataFine}</div>
                        </Link>
                    </li>)
                )}
            </ul>
        </>
    )
}

export default HomePage