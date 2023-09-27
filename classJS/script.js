const user = {
    username: "Ripon",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log(`UserName: ${this.userName}`);
        console.log(this);
    }
}


console.log(user.username);
// console.log(user.getUserDetails());
console.log(this);

const promiseOne = new Promise()
const date = new Date()