import React, {Component} from "react";
import "./style.css";
import logo from "../../images/followLogo.svg";
import {Nav, NavItem, NavLink} from "reactstrap";
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
                    <img src={logo} alt="Follow Logo" style={{width: "15%"}}></img>
                </div>
                    <Nav tabs style={{background: "#FFF", textAlign: "center", width: "70%", marginLeft: "15%"}}>
                        <NavItem>
                        <Link to={"/Home"}><NavLink className="largeLink"><img src={home} className="menuImg" alt="Home"></img> Home</NavLink></Link>
                        </NavItem>
                        <NavItem>                    
                            <Link to={"/Reminders"}><NavLink className="largeLink"><img src={remind} className="menuImg" alt="Reminders"></img> Reminders</NavLink></Link>
                        </NavItem>
                        <NavItem>
                            <Link to={"/Contacts"}><NavLink className="largeLink"><img src={contact} className="menuImg" alt="Contact"></img> Contacts</NavLink></Link>
                        </NavItem>
                        <NavItem>
                            <Link to={"/Emergency"}><NavLink className="largeLink"><img src={emergency} className="menuImg" alt="Emergency"></img> Emergency</NavLink></Link>
                        </NavItem>
                    </Nav>
                
            </div>
        )
    }

}

export default LargeNavbar;