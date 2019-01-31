import React from "react";
import PageTitle from "../components/PageTitle";
import Menu from "../components/Menu";
import {UncontrolledCollapse, Button} from 'reactstrap';
import EmergencyCard from "../components/EmergencyCard";
import Navbar from "../components/FollowNavbar";
import LargeNavbar from "../components/LargeNavbar"

function Emergency () {
    return(
        <div>
            <LargeNavbar />
            <Navbar />
            <div style={{height: "100%", minHeight: "80vh", display: "block", overflow: "scroll"}}>
                <PageTitle>
                    Emergency Info
                </PageTitle>
                <div style={{textAlign: "center", fontFamily: "Ubuntu", margin: "20px 0"}}>
                    <h5>First-Aid Tips</h5>
                </div>
                <Button id="toggler" className="emergencyToggleBtn" style={{width: "70%", marginBottom: "5px", marginLeft: "15%", borderRadius: "0", boxShadow: "1.5px 1.5px #EDEAE5", fontFamily: "Ubuntu"}}>Trauma</Button>
                <UncontrolledCollapse toggler="#toggler">
                    <EmergencyCard>Includes road accidents, falls, bites, and gunshot wounds. Wounds can be more severe than they appear and should be assessed by a vet as soon as possible. If there is any bleeding, apply pressure to the wound with a clean cloth, sterile dressing, or sanitary pad.</EmergencyCard>
                </UncontrolledCollapse>
                <Button id="toggler2" style={{width: "70%", marginBottom: "5px", marginLeft:"15%", borderRadius: "0", boxShadow: "1.5px 1.5px #EDEAE5", fontFamily: "Ubuntu"}}>Minor Wound Care</Button>
                <UncontrolledCollapse toggler="#toggler2">
                    <EmergencyCard>If the wound is dirty, clean with warm salt water (1 teaspoon salt per pint of water). Use a soft towel or cloth to dry and bandage the wound to keep the pet from licking it. Bandages will need to be changed every day until the wounds heal. Try to ensure the bandage remains dry. Seek advice from your vet if there are any signs of infection.</EmergencyCard>
                </UncontrolledCollapse>
                <Button id="toggler3" style={{width: "70%", marginBottom: "5px", marginLeft:"15%", borderRadius: "0", boxShadow: "1.5px 1.5px #EDEAE5", fontFamily: "Ubuntu"}}>Breathing Difficulties</Button>
                <UncontrolledCollapse toggler="#toggler3">
                    <EmergencyCard>Wheezing, choking, weak and raspy breathing. In cats, open-mouth breathing is also a concern. These could be an indication of foreign bodies in the throat, allergic reaction, asthma, heart disease, or lung disease. Breathing problems are serious and should be investigated immediately by a vet.</EmergencyCard>
                </UncontrolledCollapse>
                <Button id="toggler4" style={{width: "70%", marginBottom: "5px", marginLeft:"15%", borderRadius: "0", boxShadow: "1.5px 1.5px #EDEAE5", fontFamily: "Ubuntu"}}>Poisoning</Button>
                <UncontrolledCollapse toggler="#toggler4">
                    <EmergencyCard>If you are concerned your pet has eaten something they shouldn't have, call your vet immediately. The most common poisonings are chocolate, grapes/rasins, human medications, lilies including daffodils, rat poisons and slug poisons. These can cause vomiting, diarrhoea, restlessness, staggering, disorientation, convulsions, lethargy, unconsciousness, and dilated pupils.Try to figure out what your pet consumed or was exposed to if at all possible.</EmergencyCard>
                </UncontrolledCollapse>
                <Button href="https://maps.google.com/?q=pet+hospital+near+me" target="_blank" style={{width: "70%", marginBottom: "5px", marginTop:"30px", background: "#026670", marginLeft:"15%", borderRadius: "0", boxShadow: "1.5px 1.5px #EDEAE5", fontFamily: "Ubuntu"}}>Find Nearby Pet Hospitals</Button>
            </div>
            <Menu />
        </div>
    )
}

export default Emergency;