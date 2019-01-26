import React from "react";
import "./style.css";
import {Card, CardBody} from 'reactstrap';

function EmergencyCard({children}) {
    return(
        <div>
            <Card>
                <CardBody className="emergencyText">
                    {children}
                </CardBody>
            </Card>
        </div>
    );
}

export default EmergencyCard;