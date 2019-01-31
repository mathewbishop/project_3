import React, {Component} from "react";
import "./style.css";
import logo from "../../images/followLogo.svg";
import {Link} from "react-router-dom";
import home from "../../images/followHome.png";
import remind from "../../images/followToDo.png";
import contact from "../../images/followPhone.png";
import emergency from "../../images/followEmergency.png";

class LargeNavbar extends Component {
    render(){
        return(
            <div className="largeNavbarWrapper">
                <div className="logoWrapper">
                    <div>
                        <img src={logo} alt="Follow Logo" style={{width: "18%"}}></img>
                    </div>
                </div>
                <div className="container-extends mx-auto">
                <div className="row">
                    <div className="col" style={{padding: "0"}}>
                        <div className="row" style={{background: "#058A96", padding: "10px"}}>
                            <div className="col-2 offset-2">
                                <Link to={"/Home"} style={{fontFamily: "Ubuntu", color: "#FFF", backgroundColor: "#058A96"}}><img src={home} className="menuImg" alt="Home"></img> Home</Link>
                            </div>
                            <div className="col-2">                    
                                <Link to={"/Reminders"} style={{fontFamily: "Ubuntu", color: "#FFF", backgroundColor: "#058A96"}}><img src={remind} className="menuImg" alt="Reminders"></img> Reminders</Link>
                            </div>
                            <div className="col-2">
                                <Link to={"/Contacts"} style={{fontFamily: "Ubuntu", color: "#FFF", backgroundColor: "#058A96"}}><img src={contact} className="menuImg" alt="Contact"></img> Contacts</Link>
                            </div>
                            <div className="col-2">
                                <Link to={"/Emergency"} style={{fontFamily: "Ubuntu", color: "#FFF", backgroundColor: "#058A96"}}><img src={emergency} className="menuImg" alt="Emergency"></img> Emergency</Link>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }

}

export default LargeNavbar;