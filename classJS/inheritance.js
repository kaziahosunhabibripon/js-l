class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}



class Teacher extends User{
    constructor(username, email,password){
        super(username)
        this.email = email
        this.password = password

    }

    addCourse(){
        console.log(`A new course was adeed by ${this.username}`);
    }
}


const chai = new Teacher("teacher", "teacher@gmail.com", "1234")

chai.addCourse()
const tea = new User("masla")

tea.logMe()

console.log(chai instanceof Teacher);
