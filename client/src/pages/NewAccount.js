import React, {Component} from 'react';
import NewAccountForm from "../components/NewAccountForm";
import Jumbotron from 'reactstrap/lib/Jumbotron';

class NewAccount extends Component {
    render(){
        return(
        <div>
            <Jumbotron style={{backgroundColor: "#026670", color: "#FFF", fontFamily: "Ubuntu, Leto", textAlign: "center"}}>
                <h3>Create A New Account</h3>
            </Jumbotron>
            <div style={{width: "70%", marginLeft: "15%"}}>
                <NewAccountForm />
            </div>
        </div>
        )
    }
}

export default NewAccount;