import React from 'react';
import { Form, FormGroup, Col, Button, ControlLabel, Radio, FormControl } from 'react-bootstrap';
import { Link,Redirect } from 'react-router-dom';
import { list, User } from '../data/dataStruct';
import MyAlert from './MyAlert';
export default class RegisterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            cpassword: "",
            role: "",
            alertVisible: false
        }
    }
    render() {
        return (
            <div>
                {this.state.re}
                <MyAlert message={this.state.message} ty={this.state.box} alertVisible={this.state.alertVisible} change={() => { this.setState({ alertVisible: false }) }} />
                <Form horizontal onSubmit={(event) => {
                    event.preventDefault();
                    if (this.state.username === "" || this.state.password === "" || this.state.password !== this.state.cpassword || this.state.role === "") {
                        this.setState({ alertVisible: true, box: 'danger', message: 'Opps! Info you enter is either not Acceptable or blank!' });
                    }
                    else {
                        if (list.userList.addUser(new User(this.state.username, this.state.password, this.state.role))) {
                            this.setState({ alertVisible: true, box: 'success', message: 'Done' });
                            this.setState({'re':(<Redirect to="/login" />)})
                            
                        }
                    }
                }}>
                    <FormGroup controlId="formHorizontalEmail">
                        <Col componentClass={ControlLabel} sm={2}>
                            Enter Username
                        </Col>
                        <Col sm={10}>
                            <FormControl ref="username" type="text" onChange={(e) => this.setState({ 'username': e.target.value })} placeholder="Username" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Enter Password
                        </Col>
                        <Col sm={10}>
                            <FormControl ref="password" type="password" onChange={(e) => this.setState({ 'password': e.target.value })} placeholder="Password" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formHorizontalPassword">
                        <Col componentClass={ControlLabel} sm={2}>
                            Confirm Password
                        </Col>
                        <Col sm={10}>
                            <FormControl ref="cpassword" type="password" onChange={(e) => this.setState({ 'cpassword': e.target.value })} placeholder="Password" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col componentClass={ControlLabel} sm={2}>
                            Register as
                        </Col>
                        <Col sm={10}>
                            <Radio name="radioGroup" onClick={(e) => {
                                this.setState({ 'role': 'user' })
                                    ; console.log("no");
                            }} inline>
                                User
                            </Radio>
                            {' '}
                            <Radio name="radioGroup" onClick={(e) => { this.setState({ 'role': 'admin' }); console.log("no"); }} inline>
                                Admin
                            </Radio>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit" bsStyle="success">
                                Register
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
                <Link to='/login' style={{ margin: '1em' }}><Button bsStyle="primary" block active >Login</Button></Link>
            </div>
        );
    }
}