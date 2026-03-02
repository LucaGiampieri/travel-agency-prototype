import { useParams } from "react-router-dom"

import { useState } from "react";

import travels from "../data/Travels";

import { Link } from "react-router-dom";

function TravelPage() {

    const { id } = useParams();

    const partecipantiViaggio = travels.find(part => (part.id === parseInt(id)))

    const [formData, setFormData] = useState("");

    function setFieldValue(e) {
        setFormData(e.target.value)
    }

    const partecipantiFiltrati =
        partecipantiViaggio.partecipanti.filter(part =>
            `${part.nome} ${part.cognome}`.toLowerCase().includes(formData.toLowerCase())
        );

    return (

        <>
            <input
                name="name"
                type="text"
                placeholder="Chi stai cercando?"
                onChange={setFieldValue}

            />
            <ul>
                {
                    partecipantiFiltrati.map((part, index) => {
                        return (
                            <li key={index}>
                                <strong>Nome: {part.nome} {part.cognome}</strong>
                                <div>Telefono: {part.telefono}</div>
                                <div>Email: {part.email}</div>

                            </li>
                        )
                    })
                }

            </ul>

        </>

    )
}

export default TravelPage