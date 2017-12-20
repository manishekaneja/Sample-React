import React from 'react';
import { Button, Modal, Form, FormGroup, Col, ControlLabel, FormControl } from 'react-bootstrap';

export default class ClassComp extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.ele);
        this.state = {
            date: this.props.ele.date,
            name: this.props.ele.name,
            id: this.props.ele.id,
            info: this.props.ele.info,
            duration: this.props.ele.duration,
            coachName: this.props.ele.coachName,
            maxEnrolls: this.props.ele.maxEnrolls,
            groupLink: this.props.ele.groupLink,
            reqCredits: this.props.ele.reqCredits

        }
    }
    reset() {
        this.setState({ date: "", name: "", id: "", info: "", duration: "", coachName: "", maxEnrolls: "", groupLink: "", reqCredits: "" })
    }
    render() {
        return (
            <Modal show={this.props.showModal} onHide={() => { this.props.hide(); }}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form horizontal>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} sm={2}>
                                Date
                        </Col>
                            <Col sm={10}>
                                <FormControl type="date" value={this.state.date} onChange={(e) => this.setState({ 'date': e.target.value })} placeholder="Date" />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="formHorizontalPassword">
                            <Col componentClass={ControlLabel} sm={2}>
                                ClassName
                                                        </Col>
                            <Col sm={10}>
                                <FormControl type="text" value={this.state.name} onChange={(e) => this.setState({ 'name': e.target.value })} placeholder="Password" />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} sm={2}>
                                Class Id
                        </Col>
                            <Col sm={10}>
                                <FormControl type="text" value={this.state.id} onChange={(e) => this.setState({ id: e.target.value })} placeholder="Class Id" />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} sm={2}>
                                Class Information
                        </Col>
                            <Col sm={10}>
                                <FormControl type="text" value={this.state.info} onChange={(e) => this.setState({ info: e.target.value })} placeholder="Class Information" />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} sm={2}>
                                Duration
                        </Col>
                            <Col sm={10}>
                                <FormControl type="text" value={this.state.duration} onChange={(e) => this.setState({ duration: e.target.value })} placeholder="Duration" />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} sm={2}>
                                Coach Name
                        </Col>
                            <Col sm={10}>
                                <FormControl type="text" value={this.state.coachName} onChange={(e) => this.setState({ coachName: e.target.value })} placeholder="Coach Name" />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} sm={2}>
                                Max number of enroll
                        </Col>
                            <Col sm={10}>
                                <FormControl type="number" value={this.state.maxEnrolls} onChange={(e) => this.setState({ maxEnrolls: e.target.value })} placeholder="Max Number" />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} sm={2}>
                                Credits Required
                        </Col>
                            <Col sm={10}>
                                <FormControl type="number" value={this.state.reqCredits} onChange={(e) => this.setState({ reqCredits: e.target.value })} placeholder="Credits" />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} sm={2}>
                                Group Link
                        </Col>
                            <Col sm={10}>
                                <FormControl type="text" value={this.state.groupLink} onChange={(e) => this.setState({ groupLink: e.target.value })} placeholder="Group Link" />
                            </Col>
                        </FormGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button bsStyle="success" onClick={() => { this.props.ele.u(this.state.date, this.state.name, this.state.id, this.state.info, this.state.duration, this.state.coachName, this.state.maxEnrolls, this.state.groupLink, this.state.reqCredits); this.props.fun(this.props.ele); }}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>

        );
    }

}