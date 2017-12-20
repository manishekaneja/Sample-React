import React, { Component } from 'react';
import StyleBox from './StyleBox';
import Home from './Home';
import RegisterForm from './RegisterForm';
import ListComp from './ListComp';
import SchComp from './SchComp';
import { Col, Row } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import LoginForm from './LoginForm';
import { DashBoard } from './DashBoard';


export default class MyPage extends Component {
    getRoutes() {
        if (this.props.loggedIn === true) {
            return (
                <span>
                    <Route path="/dashboard" component={DashBoard} />
                    <Route path='/list' render={() => <ListComp />} />
                    <Route path="/schedule" component={SchComp} />
                </span>
            )
        }
        else {
            return (
                <span>
                    <Route path="/login" render={() => <LoginForm log={this.props.log} />} />
                    <Route path="/register" component={RegisterForm} />
                </span>
            )
        }
    }
    render() {
        return (
            <Row>
                <Col xs={10} xsOffset={1} smOffset={3} sm={6}>
                    <StyleBox width="100%" radius="1em" >
                        <div>
                            <Route exact path="/" component={Home} />
                            {this.getRoutes()}

                        </div>
                    </StyleBox >
                </Col>
            </Row >
        );
    }
}

