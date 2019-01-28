import React, {Component} from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button } from 'reactstrap';

class PetFormConfirm extends Component {

    submit = () => {
        this.props.handleSubmit();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {

        const {
            values: { petName, petBirthday, petType, breed, color, markings, weight, foodBrand, microchipNumber, rabiesTagNumber, insurance, medication, allergies, careNotes }
        } = this.props;
        return(
            <div>
                <ListGroup>
                    <ListGroupItem>
                        <ListGroupItemHeading>Name: </ListGroupItemHeading>
                        <ListGroupItemText>{petName}</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Birthday: </ListGroupItemHeading>
                        <ListGroupItemText>{petBirthday}</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Type: </ListGroupItemHeading>
                        <ListGroupItemText>{petType}</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Breed: </ListGroupItemHeading>
                        <ListGroupItemText>{breed}</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Color: </ListGroupItemHeading>
                        <ListGroupItemText>{color}</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Markings: </ListGroupItemHeading>
                        <ListGroupItemText>{markings}</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Weight: </ListGroupItemHeading>
                        <ListGroupItemText>{weight}</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Brand of Food: </ListGroupItemHeading>
                        <ListGroupItemText>{foodBrand}</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Microchip Number: </ListGroupItemHeading>
                        <ListGroupItemText>{microchipNumber}</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Rabies Tag Number: </ListGroupItemHeading>
                        <ListGroupItemText>{rabiesTagNumber}</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Insurance: </ListGroupItemHeading>
                        <ListGroupItemText>{insurance}</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Medication: </ListGroupItemHeading>
                        <ListGroupItemText>{medication}</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Allergies: </ListGroupItemHeading>
                        <ListGroupItemText>{allergies}</ListGroupItemText>
                    </ListGroupItem>
                    <ListGroupItem>
                        <ListGroupItemHeading>Care Notes: </ListGroupItemHeading>
                        <ListGroupItemText>{careNotes}</ListGroupItemText>
                    </ListGroupItem>
                </ListGroup>
                <Button className="formBtn" onClick={this.back}>Back</Button>{' '}
                <Button className="formBtn" onClick={this.submit}>Confirm & Continue</Button>
            </div>
        );
    }
}

export default PetFormConfirm;