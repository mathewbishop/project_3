import React from "react";
import PageTitle from "../components/PageTitle";
import Menu from "../components/Menu";
import {UncontrolledCollapse, Button, CardBody, Card} from 'reactstrap';

function Emergency () {
    return(
        <div>
            <PageTitle>
                Emergency Info
            </PageTitle>
            {/* https://www.google.com/maps/search/pet+hospital+near+me/ */}
            <Button id="toggler" style={{width: "80%", marginBottom: "5px", marginLeft: "10%"}}>Trauma</Button>
            <UncontrolledCollapse toggler="#toggler">
                <Card>
                    <CardBody>
                        <p>If your pet has had any event.............</p>
                    </CardBody>
                </Card>
            </UncontrolledCollapse>
            <Button id="toggler2" style={{width: "80%", marginBottom: "5px", marginLeft:"10%"}}>Trauma</Button>
            <UncontrolledCollapse toggler="#toggler2">
                <Card>
                    <CardBody>
                        <p>If your pet has had any event.............</p>
                    </CardBody>
                </Card>
            </UncontrolledCollapse>
            <Menu />
        </div>
    )
}

export default Emergency;