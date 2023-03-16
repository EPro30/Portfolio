import React from 'react'
import "./about.css";
import AboutPic from "../../assets/avatar-4.svg";
import AboutBox from "./AboutBox";
import Resume from "../../assets/RiyaSinghResume.pdf"

const handleClick = () => 
{
    window.open(Resume);
};

const About = () => {
    return (
        <section className="about container" id = "about">
            <h2 className = "section_title">About Me</h2>

            <div className = "about__container grid">
                <img src = {AboutPic} alt = "" className = "about__img" />

                <div className = "about__data grid">
                    <div className = "about__info"> <br/>
                        <p className = "about_description">
                            I am Riya Singh, attaining a Bachelors degree in Computer Science at University of Central Florida.

                        </p><br/>
                        <a className = "btn" onClick={handleClick}> Download CV</a>
                    </div>

                    <div className = "about__skills grid">
                        <div className = "skills__data">
                            <div className = "skills__titles">
                                <h3 className = "skills__name">Development</h3>
                                <span className = "skills__number">90%</span>
                            </div>

                            <div className = "skills__bar">
                                <span className = "skills__percentage development"></span>
                            </div>
                        </div>

                        <div className = "skills__data">
                            <div className = "skills__titles">
                                <h3 className = "skills__name">UI/UX design</h3>
                                <span className = "skills__number">80%</span>
                            </div>

                            <div className = "skills__bar">
                                <span className = "skills__percentage ui__design"></span>
                            </div>
                        </div>

                        <div className = "skills__data">
                            <div className = "skills__titles">
                                <h3 className = "skills__name">Painting/Sketching</h3>
                                <span className = "skills__number">80%</span>
                            </div>

                            <div className = "skills__bar">
                                <span className = "skills__percentage painting"></span>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <AboutBox />
        </section>
    )
}

export default About