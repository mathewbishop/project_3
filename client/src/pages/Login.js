import React, {Component} from "react";
import LoginForm from "../components/LoginForm";
import {Jumbotron} from 'reactstrap';
import {Link} from "react-router-dom";


class Login extends Component{
    render(){
        return(
            <div>
                <Jumbotron style={{backgroundColor: '#026670', borderRadius: "0", height: "200px", color:"#fff", fontFamily:"Lato", textAlign:"center", fontSize: "20pt", paddingTop: "60px"}}>
                    <p>Keep All of Your Pet Information in One Spot</p>
                </Jumbotron>
                <LoginForm />
                <div style={{textAlign: "center"}}>
                    <Link to="{/NewAccount}" style={{color: "#026670"}}>Create A New Account</Link>
                </div>
            </div>
        )
    };
}

export default Login;

