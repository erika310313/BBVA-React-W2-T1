import React from "react";
import ContactUs from "../../img/ContactUs.jpg";

function Contact() {

    return(
        <>
            <div>
                <h1>Información general sobre la ONG</h1>

                <img src={ContactUs} className="contact-img" alt="" />

                <p><b>Datos de contacto:</b></p>
                <p><b>● Mail:</b> somosfundacionmas@gmail.com</p>
                <p><b>● Instagram:</b> SomosMás</p>
                <p><b>● Facebook:</b> Somos_Más</p>
                <p><b>● Teléfono de contacto:</b> 1160112988</p>
            </div>
        </>
    )
}

export default Contact;