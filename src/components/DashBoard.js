import React from 'react';
import { list } from '../data/dataStruct';
export class DashBoard extends React.Component {
    render() {
        if (localStorage.role === "user") {
            return (
                <div>
                    <h2>
                        Your Credits are {list.userList.getUserInfo(localStorage.user).credits}
                    </h2>
                </div>
            );
        }
        else {
            return (
                <div>
                    <h2>
                        Total Enrolled Members are {list.userList.getMemberList()}
                    </h2>
                </div>
            );
        }
    }
}