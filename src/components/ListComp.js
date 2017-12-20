import React from 'react';
import { Table, Button, Row, Col, FormControl } from 'react-bootstrap';
import { list, Class } from '../data/dataStruct';
import ClassComp from './ClassComp';

export default class ListComp extends React.Component {
    constructor(props) {
        super(props);
        this.backupList = list.classList.getList();
        this.state = {
            list: this.backupList,
            fun: "",
            ele: new Class()
        };
        this.addToList = function (e) {
            list.classList.addToList(e);
            this.backupList = list.classList.getList();
            this.setState({ list: this.backupList });
        };
        this.edit = function (e) {
            this.backupList = list.classList.getList();
            this.setState({ list: this.backupList });
        };
    }
    getEle() {
        if (localStorage.role === "admin") {
            return (
                <div>
                    <Button block style={{ margin: '5px' }} bsStyle="primary" onClick={() => this.setState({ showModal: true, fun: this.addToList.bind(this), ele: new Class() })}>
                        Add new Class
                    </Button>
                    <Row style={{ margin: '5px' }}>
                        <Col sm={4}>
                            <strong>  Enter Class name to Search
                            </strong>
                        </Col>
                        <Col sm={8}>
                            <FormControl type="text" onKeyUp={(e) => {
                                this.setState({ list: this.backupList.filter((ele) => ele.name.includes(e.target.value)) });
                            }} />
                        </Col>
                    </Row>
                    <Row style={{ margin: '5px' }}>
                        <Col sm={4}>
                            <strong>Enter Class name to Search
                            </strong>
                        </Col>
                        <Col sm={8}>
                            <FormControl type="date" onChange={(e) => {
                                this.setState({
                                    list: this.backupList.filter((ele) => ele.date >= e.target.value)
                                });
                            }} />
                        </Col>
                    </Row>
                </div>

            );
        }
        else {
            return (<div></div>);
        }
    }
    render() {
        return (
            <div>
                {this.getEle()}
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Info</th>
                            <th>Duration</th>
                            <th>CoachName</th>
                            <th>Max Enrolls</th>
                            <th>Group Link</th>
                            <th>Required Credits</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.list.map((ele, index) => {
                            return (
                                <TableRow id={index} index={index} data={ele}
                                    userFun={localStorage.role === 'admin' ? (() => this.setState({ showModal: true, ele: ele, fun: this.edit.bind(this) })) : (() => {
                                        if (list.userList.getUserInfo(localStorage.user).credits > 0) {
                                            list.userList.removeCredits(1, localStorage.user);
                                            ele.addMember(localStorage.user);

                                        }
                                        this.backupList = list.classList.getList();
                                        this.setState({ list: this.backupList })
                                    })} />
                            );
                        })}

                    </tbody>
                </Table>
                <ClassComp showModal={this.state.showModal}
                    fun={this.state.fun}
                    ele={this.state.ele}
                    hide={() => { this.setState({ showModal: false }) }}
                />
            </div >
        );
    }
}
class TableRow extends React.Component {
    constructor(props) {
        super(props);
        this.role = localStorage.role;
    }
    getButton() {
        if (this.role === "admin") {
            return (
                <td>
                    <Button onClick={this.props.userFun}>
                        Edit
               </Button>
                </td>
            );
        }
        else {
            return (
                <td>
                    <Button onClick={this.props.userFun} disabled={this.props.data.membersEnrolled.find((e) => e === localStorage.user)}>
                        Enroll
                    </Button>
                </td>
            )
        }
    }
    render() {
        return (
            <tr>
                <td>{this.props.index + 1}</td>
                <td><input type="date" disabled value={this.props.data.date} style={{ border: "0px solid white", backgroundColor: 'transparent' }} /></td>
                <td>{this.props.data.name}</td>
                <td>{this.props.data.id}</td>
                <td>{this.props.data.info}</td>
                <td>{this.props.data.duration}</td>
                <td>{this.props.data.coachName}</td>
                <td>{this.props.data.maxEnrolls}</td>
                <td>{this.props.data.groupLink}</td>
                <td>{this.props.data.reqCredits}</td>
                {this.getButton()}

            </tr>

        );
    }
}