//loop

const greetings = "Hello Kazi, !"
for (const greet of greetings) {
    if(greet === " " || greet === "," || greet === "!"){
        continue
    }
    // console.log(greet);
}

const map = new Map()

map.set("BD", "Bangladesh")
map.set("PK", "Pakistan")
map.set("UK", "Englad")
map.set("CN", "China")

// console.log(map);

for (const [ key, val] of map) {
    console.log(key, '-', val);
    
}
const myObj = {
   JS :"Javascript",
    cpp :"C++",
    

}


for (const key in myObj) {
    console.log(`${key} for ${myObj[key]}`);
    
}