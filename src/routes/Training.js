import React from "react";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import TrainingSection from '../components/Training'

function Training() {
    return (
        <div>
            <Navbar />
            <HeroImage headinh='TRAINING.' text='Pre-Flight and In-Flight Training'/>
            <TrainingSection />
            <Footer />
        </div>
    )
}
export default Training