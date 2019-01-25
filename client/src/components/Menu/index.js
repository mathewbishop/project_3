import React from "react";
import "./style.css";
import { Button, ButtonGroup } from 'reactstrap';
import {Link} from "react-router-dom";
import home from "../../images/followHome.png";
import remind from "../../images/followToDo.png";
import contact from "../../images/followPhone.png";
import emergency from "../../images/followEmergency.png";

class Menu extends React.Component {
    render(){
        return(
            <div className="wrapper" size="lg">
                <ButtonGroup className="btnGroup">
                    <Link to={"/Home"}><Button className="homeBtn menuBtn"><img src={home} className="menuImg" alt="Home"></img></Button></Link>
                    <Link to={"/Reminders"}><Button className="remBtn menuBtn"><img src={remind} className="menuImg" alt="Reminders"></img></Button></Link>
                    <Link to={"/Contacts"}><Button className="contBtn menuBtn"><img src={contact} className="menuImg" alt="Contact"></img></Button></Link>
                    <Link to={"/Emergency"}><Button className="emerBtn menuBtn"><img src={emergency} className="menuImg" alt="Emergency"></img></Button></Link>
                </ButtonGroup>
            </div>
        )
    }
}

export default Menu;

