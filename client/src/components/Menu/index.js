import React from "react";
import "./style.css";
import { Button, ButtonGroup } from 'reactstrap';
import {Link} from "react-router-dom";

class Menu extends React.Component {
    render(){
        return(
            <div className="wrapper" size="lg">
                <ButtonGroup className="btnGroup">
                    <Link to={"/Home"}><Button className="homeBtn">Pets</Button></Link>
                    <Link to={"/Reminders"}><Button className="remBtn">Reminders</Button></Link>
                    <Link to={"/Contacts"}><Button className="contBtn">Contacts</Button></Link>
                    <Link to={"/Emergency"}><Button className="emerBtn">Emergency</Button></Link>
                </ButtonGroup>
            </div>
        )
    }
}

export default Menu;

