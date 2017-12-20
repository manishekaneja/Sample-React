import React from 'react';
import { Form, FormGroup, Col, Button, ControlLabel, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { list } from '../data/dataStruct';
import MyAlert from './MyAlert';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            role: "",
            alertVisible: false,
            message: ""
        }
    }
    render() {
        return (
            <div>
                <MyAlert message={this.state.message} ty={this.state.box} alertVisible={this.state.alertVisible} change={() => { this.setState({ alertVisible: false }) }} />
                <Form horizontal onSubmit={(event) => {
                    event.preventDefault();
                    if (this.state.username === "" || this.state.password === "") {
                        this.setState({ message: "Opps! Info you enter is either not Acceptable or blank!", box: 'danger', alertVisible: true });
                    }
                    else {
                        let r = list.userList.checkUser(this.state.username, this.state.password);
                        if (r.valid) {
                            this.setState({ message: "Logged In", box: 'success', alertVisible: true });
                            localStorage.loggedIn = r.valid;
                            localStorage.role = r.role;
                            localStorage.user = r.username;
                            this.props.log(true);


                        }
                        else {
                            this.setState({ message: "Opps! Incorrent Password ", box: 'danger', alertVisible: true });
                            localStorage.loggedIn = false;
                        }

                    }
                }}>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Username
                        </Col>
                        <Col sm={10}>
                            <FormControl ref="username" type="text" onChange={(e) => this.setState({ 'username': e.target.value })} placeholder="Username" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>
                        <Col sm={10}>
                            <FormControl ref="password" type="password" onChange={(e) => this.setState({ 'password': e.target.value })} placeholder="Password" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit" bsStyle="success" onClick={() => {
                                let r = list.userList.checkUser();
                                if (r.loggedIn) {
                                    localStorage.loggedIn = r.loggedIn;
                                    localStorage.role = r.role;
                                    localStorage.user = r.username;
                                }
                                else {
                                    localStorage.loggedIn = false;
                                }
                            }}>
                                Sign in
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
                <Link to='/register' style={{ margin: '1em' }}>
                    <Button bsStyle="primary" block active >Register</Button></Link>
            </div >);
    }
}