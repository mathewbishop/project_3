import React, {Component} from 'react';

class PetFormSuccess extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
            <div>
                <h3>Success!</h3>
            </div>
        )
    }
}

export default PetFormSuccess;