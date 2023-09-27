const promiseOne = new Promise(function (resolve, _reject){
    setTimeout(function(){  
        let error = true
        if(!error){
            resolve({
                userName: "habi",
                email:"habiib@examp.com",
                password: 123456
            })
        }else{
            _reject("Error Occure")
        }
    }, 1000)
})
.then((user)=>{
    console.log(user);
    return user.userName
})
.then((userName)=>{
    console.log(userName);
})
.catch((err)=>{
    console.log(err);
})
.finally(()=>{
    console.log("the promise is resolve or reject");
})