// let children = 0;
// children = 5;
// console.log(children);

// const children = 2;
// children = 5;
// console.log(children);

// var children = 2;
// children = 56;
// console.log(children);

// var car = "Honda";
// car = "Toyota";
// console.log(car);

let student1 = {
    name:"Tosin",
    score: 70
}

let student2 = {
    name:"John",
    score: 50
}

let passOrFail = function(obj, min){
    if (obj.score >= min) {
        obj.pass = true;
    }
    else{
        obj.pass = false;
    }
}
console.log("Tosin", 50);