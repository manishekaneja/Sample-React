import React from 'react';
import { Alert } from 'react-bootstrap';
export default class MyAlert extends React.Component {

    render() {
        if (this.props.alertVisible) {
            return (
                <Alert bsStyle={this.props.ty} onDismiss={this.props.change}>
                    <h4>{this.props.message}</h4>
                </Alert>
            );
        }
        else {
            return (<span></span>);
        }
    }


}
