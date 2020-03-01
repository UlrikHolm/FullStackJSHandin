var names = ["Lars", "Peter", "Jan", "Bo"];
var numbers = [1,3,5,7,10];

function myFilter(array, callback){
    var newArray = [];
    for (let i = 0; i < array.length; i++) {
        if(callback(array[i])){
            newArray.push(array[i])
        }
}
return newArray
};

function myMapper(array, callback){
    var newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]))
}
return newArray
};


function callback(){
return name => name.length <= 4
}

function callback1(){
    return number => number*2
}

Array.prototype.myFilterV2 = function(callback){
    var newArray = [];
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i])){
            newArray.push(this[i])
        }
}
return newArray
};


console.log(myFilter(names, callback()))
console.log(myMapper(numbers, callback1()))
console.log(names.myFilterV2(name => name.length <= 4))