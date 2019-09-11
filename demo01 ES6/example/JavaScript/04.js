// (function microtask() {
//     process.nextTick(() => {
//         microtask()
//         console.log(new Date().getTime())
//     })

//   })()

// console.log(1);

// setTimeout(e=>{ console.log(2); },0)

// setTimeout(e=>{ console.log(3); },0)

// new Promise((resolve,reject)=>{ 
//     console.log(4); resolve();
// })
// .then(e=>{ console.log(5); })

// setTimeout(e=>{ console.log(6);

// new Promise((resolve,reject)=>{ console.log(7); resolve(); })
//      .then(e=>{ console.log(8);})
// })

setImmediate(function(){
    console.log(1);
},0);

setTimeout(function(){
    console.log(2);
},0);

new Promise(function(resolve){
    //primise(A).then(B),A执行完，才执行B，所以A是同步的，就跟在外部console.log(6),执行一样
    console.log(3);
    resolve();
    console.log(4);
}).then(function(){
        console.log(5);
    });
console.log(6);
process.nextTick(function(){
    console.log(7);
});

console.log(8);

