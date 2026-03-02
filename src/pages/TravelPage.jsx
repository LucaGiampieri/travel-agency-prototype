import { useParams } from "react-router-dom"

import { useState } from "react";

import travels from "../data/Travels";

import { Link } from "react-router-dom";

function TravelPage() {

    const { id } = useParams();

    const partecipantiViaggio = travels.find(part => (part.id === parseInt(id)))

    const [formData, setFormData] = useState("");


    function setFieldValue(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    return (

        <>
            <input
                name="name"
                type="text"
                placeholder="Chi stai cercando?"
                onChange={setFieldValue}

            />





            <ul>
                {partecipantiViaggio.partecipanti.nome.filter(partName => {
                    if (partName === formData)
                        return (
                            partecipantiViaggio.partecipanti.map((part, index) => {
                                return (
                                    <li key={index}>
                                        <strong>Nome: {part.nome} {part.cognome}</strong>
                                        <div>Telefono: {part.telefono}</div>
                                        <div>Email: {part.email}</div>

                                    </li>
                                )
                            }))
                })}
            </ul>

        </>

    )
}

export default TravelPage