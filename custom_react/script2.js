let sum =0;
const add = (n)=>{
    let x
    for (let i = 0; i < n; i++) {
        x=sum+i;
        
    }
    return x;
}
const memoize=(func)=>{
    let cache={};
    return function(params) {
        if (cache[params]) {
            console.log("from cache");
            return cache[params];
        } else {
            console.log("first")
            let result= func(params);
            cache[params]=result;
            return result;
        }
    }
}

console.time();
const eff=memoize(add);
console.log(eff(50000));
//console.log(calc(50000))
console.timeEnd();

console.time();
//console.log(calc(50000))
console.log(eff(40000));
console.timeEnd();