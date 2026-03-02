import { useParams } from "react-router-dom"

import travels from "../data/Travels";

import { Link } from "react-router-dom";

function TravelPage() {

    const { id } = useParams();

    const partecipantiViaggio = travels.find(part => (part.id === parseInt(id)))

    return (

        <>
            <input type="text" placeholder="Chi stai cercando?" />
            <ul>
                {partecipantiViaggio.partecipanti.map((part, index) => {
                    return (
                        <li key={index}>
                            <strong>Nome: {part.nome} {part.cognome}</strong>
                            <div>Telefono: {part.telefono}</div>
                            <div>Email: {part.email}</div>

                        </li>
                    )
                })}
            </ul>

        </>

    )
}

export default TravelPage