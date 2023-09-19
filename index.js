

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

`${newDate.getDate()}`
newDate.toLocaleString('default',{
    weekday: "long"
})

console.log(newDate);