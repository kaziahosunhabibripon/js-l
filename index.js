const myNums = [1,2,3,4]

const total = myNums.reduce((acc, curv)=>acc +curv,0)
    
// console.log(total);



const shoppingCart = [
    {
    itemName: "Js course",
    price: 2999
   },
    {
    itemName: "DSA course",
    price: 1999
   },
    {
    itemName: "Typescript course",
    price: 999
   },
    {
    itemName: "NodeJS course",
    price: 3999
   }
]


const pay = shoppingCart.reduce((acc, item)=> acc + item.price, 0)

console.log(pay);