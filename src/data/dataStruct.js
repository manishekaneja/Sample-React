export class Class {
    date;
    name;
    id;
    info;
    duration;
    coachName;
    maxEnrolls;
    groupLink;
    reqCredits;
    membersEnrolled;
    constructor(date = new Date(), name = "", id = "", info = "", duration = "", coachName = "", maxEnrolls = "", groupLink = "", reqCredits = "") {
        this.date = date;
        this.name = name;
        this.id = id;
        this.info = info;
        this.duration = duration;
        this.coachName = coachName;
        this.maxEnrolls = maxEnrolls;
        this.groupLink = groupLink;
        this.reqCredits = reqCredits;
        this.membersEnrolled = [];
    }
    addMember(mem) {
        this.membersEnrolled.push(mem);
        console.log(this.membersEnrolled);
    }
    u(date = new Date(), name = "", id = "", info = "", duration = "", coachName = "", maxEnrolls = "", groupLink = "", reqCredits = "") {
        this.date = date;
        this.name = name;
        this.id = id;
        this.info = info;
        this.duration = duration;
        this.coachName = coachName;
        this.maxEnrolls = maxEnrolls;
        this.groupLink = groupLink;
        this.reqCredits = reqCredits;
    }
}
var list = {
    classList: {
        list: [],
        getList: function () {
            return this.list;
        },
        addToList: function (cl) {
            this.list.push(cl);
        },
        editList: function (ele, newV) {
            this.list.map((e) => {
                if (e === ele) {
                    return newV;
                }
                else {
                    return e;
                }
            })
        }
    },
    userList: {
        list: [],
        addUser: function (user) {
            return this.list.push(user);
        },
        getUserInfo: function (u) {
            return this.list.find((e) => e.userName === u).userInfo;
        },
        getMemberList: function () {
            return this.list.filter((e) => e.userRole === "user").length;
        },
        checkUser: function (u, p) {
            let x = this.list.filter((ele) => (ele.userName === u && ele.userPassword === p));
            if (x.length > 0) {
                return {
                    'valid': true, username: x[0].userName, role: x[0].userRole
                }
            }
            else {
                return {
                    'valid': false
                };
            }
        },
        removeCredits: function (cre, user) {
            this.list.map((ele) => {
                if (ele.userName === user) {
                    ele.userInfo.credits = ele.userInfo.credits - cre;
                }
                return ele;
            })
        }
    }
}
export { list };
export class User {
    userName;
    userPassword;
    userRole;
    userInfo;
    constructor(name, password, role) {
        this.userName = name;
        this.userPassword = password;
        this.userRole = role;
        if (this.userRole === 'user') {
            this.userInfo = {
                credits: 2,
            }
        }
        else {
            this.userInfo = {

            }
        }
    }
}