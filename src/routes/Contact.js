import React from "react";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import Form from "../components/Form";


function Contact() {
    return (
        <div>
            <Navbar/>
            <HeroImage heading='CONTACT.' text='Contact GALAXY Traver' />
            <Form />
            <Footer/>
        </div>
    )
}

export default Contact