class User {
    constructor(email, pass){
        this.email = email
        this.pass = pass
    }

    get password(){
        return this.pass.toUpperCase()
    }
    set password(value){
        this.pass = value
    }
}
const ripon = new User("rip@g.com", "abc")
console.log(ripon.password);
