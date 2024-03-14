//nG numero grande
//nP numero piccolo


/* let nG = 12;

let nP = 3;

console.log(nG % nP)

for(let i = nG; i >= nP; i-=nP){
    console.log(i);
} */


let n = 10;

nextPrime:
for(let i = 2; i <= n; i++){
    
    for(let j = 2; j < i; j++ ){
        
        if(i % j == 0) continue nextPrime;
    }

        console.log(i);        
}