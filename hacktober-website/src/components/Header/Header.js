import React from "react";
import './Header.css';
import Countdown from "../Countdown/CountdownTimer";


function Header() {
    const eventDate = "2024-10-21";

    const scrollToRegistration = () => {
        const registrationSection = document.getElementById("registration");
        if (registrationSection) {
            registrationSection.scrollIntoView({ behavior: "smooth" });
        }
    };



    return (
        <div className="header section ">
            <div className="header-top" >
                <img src='/assets/amfoss_logo.png' alt="amfoss logo" className="logo" />
                <img src='/assets/amrita_logo.png' alt="amrita logo" className="logo" />
            </div>
            <div className="header-main" >
                <div className="box">
                </div>
                <div className="left-content">
                    <img src='/assets/hacktoberfest1.png' alt="hacktoberfest logo" className="mainLogo" />
                    <p className="subtext"> It's that time of year again.<br />HacktoberFest is nearly upon us!</p>
                    <button className="register-btn" onClick={scrollToRegistration}>Register Now</button>
                </div>
                <div className="right-content">
                </div>

                <Countdown eventDate={eventDate} />
            </div>

        </div>
    )
}

export default Header;