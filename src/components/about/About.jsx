import React from 'react'
import "./about.css";
import AboutPic from "../../assets/avatar-4.svg";
import AboutBox from "./AboutBox";
import Resume from "../../assets/RiyaSinghResume.pdf"

import timelineElements from "./timelineElements";

import {
    VerticalTimeline, 
    VerticalTimelineElement
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";


const handleClick = () => 
{
    window.open(Resume);
};

const About = () => {

    let workIconStyle = { background: "#06D6A0" };
    let schoolIconStyle = { background: "#f9c74f" };

    return (
        <section className="about container" id = "about">
            <h2 className = "section_title">About Me</h2>

            <div className = "about__container grid">
                <img src = {AboutPic} alt = "" className = "about__img" />

                <div className = "about__data grid">
                    <div className = "about__info"> <br/>
                        <p className = "about_description">
                            Hi! I am Riya, Software Engineer by profession and overthinker by nature.
                            I graduated with a Bachelors degree in Computer Science from University of Central Florida.
                            Talk about different fields in software engineering and how/why you chose to experience a little bit of each
                            and then decided embedded!!!
                        </p><br/>
                        <a className = "btn" onClick={handleClick}> Download Resume</a>
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

                    <div>
                        <h1 className="timeline_title" >Timeline</h1>
                        <VerticalTimeline>
                            {
                                timelineElements.map((element) => {
                                    let isWorkIcon = element.icon === "work";

                                    return (
                                        <VerticalTimelineElement
                                          key={element.id}
                                          date={element.date}
                                          dateClassName="date"
                                          iconStyle={isWorkIcon ? workIconStyle : schoolIconStyle}
                                          icon={isWorkIcon
                                                ? <i className="fas fa-briefcase"></i>
                                                : <i className="fas fa-graduation-cap"></i>
                                               }
                                        >
                                            <h3 className="vertical-timeline-element-title">
                                                {element.title}
                                            </h3>
                                            <h5 className="vertical-timeline-element-subtitle">
                                                {element.subtitle}
                                            </h5>
                                            <p id="description">
                                                {element.description}
                                            </p>
                                        </VerticalTimelineElement>
                                    );
                                })
                            }
                        </VerticalTimeline>
                    </div>
                </div>

            </div>

            <AboutBox />
        </section>
    )
}

export default About