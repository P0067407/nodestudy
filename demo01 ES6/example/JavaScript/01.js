var i=5; 

function fn(i){  
    return function(n){
        console.log(n)
        console.log(i)
        console.log(n+(++i));
    }
}
var f=fn(1)
f(2)
// fn(3)(4)
// fn(5)(6)
f(7)