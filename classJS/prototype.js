let myName = "Ripon        "
let myChanel = " lazzy   "

// console.log();

let myHeros = [ "thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.ripon = function(){
    // console.log(`Ripon is present all objects`);
}

// heroPower.ripon()

Array.prototype.sayRipo = function(){
    // console.log(`Ripon say hello`);
}

myHeros.ripon()
myHeros.sayRipo()
// heroPower.sayRipo()

// inheritances

const User = {
    name: "ripon",
    email:"google.com"
}

const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fulltime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__ = User



// 

Object.setPrototypeOf(TeachingSupport, Teacher)



let anotherUsername = "chai     "




String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}


anotherUsername.trueLength()
"Ripon".trueLength()
"icetea ".trueLength()