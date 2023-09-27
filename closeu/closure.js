function makeFun(){
    const name = "Mozila";

    function displayName(){
        console.log(name);
    }

    return displayName;
}

const myfunc = makeFun();
myfunc()