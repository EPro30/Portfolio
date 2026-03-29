import React from 'react'
import "./contact.css";
const Contact = () => {
    return (
        <section className = "contact container section" id = 'contact'> 
            <h2 className = "section__title">Get In Touch!</h2><br/><br/>

            <div className = "contact__container grid">
               <div className="contact__info">
                    <i className="fas fa-envelope"></i>
                    <span className="contact__details">
                        Feel free to reach out at <em>rise.s10618@gmail.com</em>
                    </span>
                </div>

                {/* <form action = "" className = "contact__form">
                    <div className = "contact__form-group">
                        <div className = "contact__form-div">
                            <input 
                                type = "text" 
                                className = "contact__form-input" 
                                placeholder = 'Insert your name' 
                            />
                        </div>

                        <div className = "contact__form-div">
                            <input 
                                type = "email" 
                                className = "contact__form-input" 
                                placeholder = 'Insert your email' 
                            />
                        </div>
                    </div>
                    

                    <div className = "contact__form-div">
                        <input 
                            type = "text"
                            className = "contact__form-input" 
                            placeholder = 'Insert your subject' 
                        />
                    </div>

                    <div className = "contact__form-div contact__form-area">
                        <textarea 
                            name = "" 
                            id = "" 
                            cols = "30" 
                            rows = "10" 
                            className = "contact__form-input"
                            placeholder = "Please write your message"
                        ></textarea>
                    </div>

                    <button className = "btn">Send Message</button>
                </form> */}
            </div>
        </section>
    )
}

export default Contact