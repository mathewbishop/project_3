import React, {Component} from "react";
import {Row, Col} from "react-bootstrap";
import FontAwesome from "react-fontawesome";

class Task extends Component{
    render() {
        return (
            <div>
                <Row style={{backgroundColor: "#058a96", color: "white"}}>
                    <Col xs={1}>
                        <div>
                            <p style={{textAlign: 'center', fontWeight: 'bold', paddingTop: '10px', paddingLeft: '5px'}}>{this.props.time}
                                <br/>
                                <span>{this.props.period}</span>
                            </p>
                        </div>
                    </Col>
                    <Col xs={10}>
                        <h4>{this.props.task_name}</h4>
                        <p>{this.props.task_description}</p>
                    </Col>
                    <Col xs={1}>
                        <Row style={{paddingTop: "10px"}}>
                            <Col xs={6}>
                                <FontAwesome name= 'times'/>
                            </Col>
                            <Col xs={6}>
                                <FontAwesome name= 'check'/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            
            </div>
        );
    }
}

export default Task;