const des = Object.getOwnPropertyDescriptor(Math, "PI")


// // console.log((Math.ceil(Math.PI)));
// Math.PI = 4
// console.log(Math.PI);

// console.log(des);


const myObj = {
    name: 'ginger',
    price: 250, 
    isAvailable: true,

    oderchai: function(){
        console.log('chai banie nai');
    }
}
console.log(Object.getOwnPropertyDescriptor(myObj, "name"));

// Object.defineProperty(myObj, 'name', {
//     writable: false,
//     enumerable: false
// })

// console.log(Object.getOwnPropertyDescriptor(myObj, "name"));



for (let [key, value] of Object.entries(myObj) ){
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);
}}