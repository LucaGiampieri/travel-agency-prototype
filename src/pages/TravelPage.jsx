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
            <div className="d-flex justify-content-center">
                <input
                    className="form-search"
                    name="name"
                    type="text"
                    placeholder="Chi stai cercando?"
                    onChange={setFieldValue}

                />
            </div>
            <div className="accordion accordion-flush container accordion-container" id="accordionFlushExample">

                {
                    partecipantiFiltrati.map((part, index) => {

                        const collapseId = `flush-collapse-${index}`;

                        return (
                            <div key={index} className="accordion-item">
                                <h2 className="accordion-header">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target={`#${collapseId}`}
                                        aria-expanded="false"
                                        aria-controls={collapseId}
                                    >
                                        {part.nome} {part.cognome}
                                    </button>

                                </h2>
                                <div
                                    id={collapseId}
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#accordionFlushExample"
                                >
                                    <div className="accordion-body">
                                        {part.telefono}
                                    </div>
                                    <div className="accordion-body">
                                        {part.email}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }

            </div>

            <div className="d-flex justify-content-center">
                <Link className="home-link" to={"/"}>Torna alla home</Link>
            </div>
        </>

    )
}

export default TravelPage