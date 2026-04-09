import React from 'react'
import "./home.css";
import HeaderSocials from './HeaderSocials';
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";

const Home = () => {
    return (
        <section className="home container" id="home">
            <div className="intro">
                <video
                    className="home__img"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/Portfolio/videos/ri23.mp4" type="video/mp4" />
                </video>

                <h1 className="home__name">Riya Singh</h1>
                <span className="home__education">Work in progress...</span>

                <HeaderSocials/>
                <a href="#contact" className="btn">Please Contact me @</a>

                <ScrollDown/>
            </div>

            <Shapes />
        </section>
    )
}

export default Home
