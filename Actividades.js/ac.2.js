

let n= Math.round(Math.random()*(10000-1000)+1000)
var x,z,y,a
 var t=0

console.log(`Tamaño Población : ${n}`)
function nacimiento(){
    a=(n/100*10)
    return Math.floor(a) 
}
nacimiento();
console.log('RESULTADO NACIMIENTOS:' +a)

function mortalidad(){
    b=(n/100*3)
    return Math.floor(b)
}
mortalidad();
console.log('RESULTADO MORTALIDAD:' +b)
function tasacrecimiento(){
    x=(a - b)
    f =x/n
}
tasacrecimiento();
console.log('RESULTADO TASA CRECIMIENTO :' +f)

console.log('----------------------------------------------------------------------------')

function salgebraica(){
    for (let t = 1; t <=10; t++){
        let n= Math.round(Math.random()*(10000-1000)+1000)
        setTimeout(() => {
         x = (1*0.3);
         z= Math.pow(x,t);
         y= n*z
    console.log(`El tiempo es ${t} y el tamaño de la poblacion es ${y}`) 
        }, 1000);
    }
    }
    salgebraica()


console.log('----------------------------------------------------------------------------')
var u
function porcentajepob(){
    u=(ns /10)
    return u;
}
console.log(u)
const casa= new Promise((resolve, reject)=>{
    if (t=10){
        resolve('Se ha ganado una casa')
    }else{
        reject('No tuvo exito')
    }
    });

casa
.then(res =>{
    console.log('sucess:'+ res);
})
.catch(error =>{
    console.log('error:'+error);
})
