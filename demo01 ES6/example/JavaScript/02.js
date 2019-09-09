var i=20; 

function fn(){  
    i-=2
    console.log('i:'+i)
    return function(n){
        console.log(n)
        console.log(i)
        console.log((++i)-n);
    }
}
var f=fn()
// f(1)
// f(1)
// f(1)
// f(1) 
fn()(4)
fn()(6)
f(7)