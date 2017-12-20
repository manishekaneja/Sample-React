import React, { Component } from 'react';
export default class StyleBox extends Component {
    render() {
        return (
            <div style={{ width: (this.props.width || '100%'), backgroundColor: (this.props.color || 'white'), borderRadius: (this.props.radius || '0px'), border: '1px solid black', padding: '4em', overflow: 'hidden', margin: '2em auto' }} >
                {this.props.children}
            </div>

        );

    }
}

