import React from "react";
import './Video.css'
import spaceVideo from '../assets/space.mp4'
import {Link} from "react-router-dom";

function Video() {
    return (
        <div className='hero'>
            <video autoPlay loop playsInline id='video'>
                <source src={spaceVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Galaxy. Travel.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                <div>
                    <Link to='/training' className='btn'>Training</Link>
                    <Link to='/contact' className='btn btn-light'>Lauch</Link>
                </div>
            </div>
        </div>
    )
}

export default Video