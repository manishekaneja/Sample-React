import React from 'react';
import { Table } from 'react-bootstrap';
import { list } from '../data/dataStruct';
export default class SchComp extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            x: list.classList.getList().filter((ele) => new Date(ele.date) >= new Date())
        }
    }
    render() {
        return (
            <div>
                <h1>Class Schedule is</h1>
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


                        </tr>
                    </thead>
                    <tbody>

                        {this.state.x.map((ele, index) => {
                            return (
                                <TableRow id={index} index={index} data={ele} />
                            );
                        })}

                    </tbody>
                </Table>
            </div>
        );
    }
}
class TableRow extends React.Component {
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
            </tr>

        );
    }
}