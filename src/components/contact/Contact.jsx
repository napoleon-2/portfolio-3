
import "./contact.css"
import Phone from "../img/phone.png"
import Email from "../img/email.png"
import Address from "../img/address.png"
import React, { useContext, useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";


const Contact = () => {
        const formRef = useRef();
        const [done, setDone] = useState(false)
        const theme = useContext(ThemeContext);
        const darkMode = theme.state.darkMode;

        const handleSubmit = (e) => {
            e.preventDefault()
            emailjs.sendForm('service_rzcb5qa', 'template_nci3qmq', formRef.current, 'Apuyq2mT9nbRjJVr9')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
            });
        };

    return (
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Contacto</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} alt="" className="c-icon"/>
                        +54090 12313 12313
                    </div>
                    <div className="c-info-item">
                        <img className="c-icon" src={Email} alt="" />
                        contact@email.dev
                    </div>
                    <div className="c-info-item">
                        <img className="c-icon" src={Address} alt="" />
                        bs as
                    </div>
                </div>
            </div>
            <div className="c-right">
                <p className="c-desc">
                    <b>Queres mas detalles? Contactame.</b> 
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Nombre" name="user_name"/>
                    <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Asunto" name="user_subject"/>
                    <input style={{backgroundColor: darkMode && "#333"}} type="email" placeholder="Email" name="user_email"/>
                    <textarea style={{backgroundColor: darkMode && "#333"}} row="5" placeholder="Mensaje" name="message"/>
                    <button>Enviar</button>
                    {done && " Mensaje enviado"}    
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact