import React from 'react'
import "./home.css";
import Me from "../../assets/avatar-5.png"
import HeaderSocials from './HeaderSocials';
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
    return (
        <selection className="home container" id = "home">
            <div className = "intro">
                <img src={Me} alt="" className="home__img" />
                <h1 className="home__name">Riya Singh</h1>
                <span className="home__education">Work in progress...</span>

                <HeaderSocials/>
                <a href="#contact" className="btn">Please Contact me @ </a>

                <ScrollDown/>
            </div>

            <Shapes />
        </selection>
    )
}

export default Home