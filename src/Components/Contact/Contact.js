import React from "react";
import ContactUs from "../../img/ContactUs.jpg";

import './Contact.scss';

function Contact() {

    return(
        <>
            <div>
                <h2 className="title-contact" >Información general sobre la ONG</h2>

                <img src={ContactUs} className="contact-img" alt="" />

                <div className="card border-dark" >
                  <h2 className="card-header">Datos de contacto:</h2>
                    <div className="card-body text-dark">
                        <ul>
                            <li class="card-text">Mail: somosfundacionmas@gmail.com</li>
                            <li class="card-text">Instagram: SomosMás</li>
                            <li class="card-text">Facebook: Somos_Más</li>
                            <li class="card-text">Teléfono de contacto: 1160112988</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;