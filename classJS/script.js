function User(username, logincount, isLoggedIn){
    this.username= username
    this.logincount = logincount
    this.isLoggedIn = isLoggedIn


    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}


const userOne = new User("Ripon", 12, true)
const userTwo =  new User("Turan", 2, false)
console.log(userOne.constructor);
console.log(userOne instanceof User);


