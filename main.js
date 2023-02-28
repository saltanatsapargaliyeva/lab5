//first problem
//I have chosen 7th exercise as first problem
function product(a, b, c) {
    return a*b*c;
}

//second problem
//I have chosen 14th exercise as second problem
function max(a, b, c) {
    if (a >= b && a >= c){
        return a;
    }else if (b >= a && b>= c){
        return b;
    }else{
        return c;
    }
}

//third problem
//I have chosen 9th exercise as third problem
function sign(a){
    if(a > 0){
        return 'a positive number';
    }else if(a = 0){
        return 'neither positive nor negative';
    }else{
        return 'a negative number';
    }
}

console.log("Product of three numbers is:", product(134, 76, 183));
console.log("Greatest among the three numbers is:", max(46, 4, 45));
console.log("The number is:", sign(-89));