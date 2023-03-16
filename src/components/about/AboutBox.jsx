import React from 'react'

const AboutBox = () =>
{
    return (
        <div className="about__boxes grid">
            <div className = "about__box">
                <i className = "about__icon icon-fire"></i>

                <div>
                    <h3 className = "about__title">7</h3>
                    <span className = "about__subtitle">Project Completed</span>
                </div>
            </div>

            <div className = "about__box">
                <i className = "about__icon icon-cup"></i>

                <div>
                    <h3 className = "about__title">3389</h3>
                    <span className = "about__subtitle">Cup(s) of Coffee</span>
                </div>
            </div>
            
            {/*<div className = "about__box">
                <i className = "about__icon icon-people"></i>

                <div>
                    <h3 className = "about__title">427</h3>
                    <span className = "about__subtitle">Satisfied clients</span>
                </div>
            </div>
            */}

        </div>
    )
}

export default AboutBox