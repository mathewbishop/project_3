import React from "react";
import PageTitle from "../components/PageTitle";
import Menu from "../components/Menu";
import {UncontrolledCollapse, Button} from 'reactstrap';
import EmergencyCard from "../components/EmergencyCard";
import Navbar from "../components/FollowNavbar";

function Emergency () {
    return(
        <div>
            <Navbar />
            <div style={{height: "100%", minHeight: "80vh", display: "block", overflow: "scroll"}}>
                <PageTitle>
                    Emergency Info
                </PageTitle>
                {/* https://www.google.com/maps/search/pet+hospital+near+me/ */}
                <Button id="toggler" style={{width: "80%", marginBottom: "5px", marginLeft: "10%"}}>Trauma</Button>
                <UncontrolledCollapse toggler="#toggler">
                    <EmergencyCard>Includes road accidents, falls, bites, and gunshot wounds. Wounds can be more severe than they appear and should be assessed by a vet as soon as possible. If there is any bleeding, apply pressure to the wound with a clean cloth, sterile dressing, or sanitary pad.</EmergencyCard>
                </UncontrolledCollapse>
                <Button id="toggler2" style={{width: "80%", marginBottom: "5px", marginLeft:"10%"}}>Minor Wound Care</Button>
                <UncontrolledCollapse toggler="#toggler2">
                    <EmergencyCard>If the wound is dirty, clean with warm salt water (1 teaspoon salt per pint of water). Use a soft towel or cloth to dry and bandage the wound to keep the pet from licking it. Bandages will need to be changed every day until the wounds heal. Try to ensure the bandage remains dry. Seek advice from your vet if there are any signs of infection.</EmergencyCard>
                </UncontrolledCollapse>
                <Button id="toggler3" style={{width: "80%", marginBottom: "5px", marginLeft:"10%"}}>Breathing Difficulties</Button>
                <UncontrolledCollapse toggler="#toggler3">
                    <EmergencyCard></EmergencyCard>
                </UncontrolledCollapse>
                <Button id="toggler4" style={{width: "80%", marginBottom: "5px", marginLeft:"10%"}}>Poisoning</Button>
                <UncontrolledCollapse toggler="#toggler4">
                    <EmergencyCard></EmergencyCard>
                </UncontrolledCollapse>
            </div>
            <Menu />
        </div>
    )
}

export default Emergency;