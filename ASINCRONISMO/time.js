//SetTimeout
setTimeout(() => {
    console.log('Yo amo soacha')
}, 2000);

setTimeout(function(){
    console.log('Hola mundo')
    
}, 4000);

//Funciones con setTimeout
function externa(){
    console.log('Función externa')
}
setTimeout(externa, 3000)

function saludos(){
    console.log('Hola Ficha');
}
setTimeout(saludos);

const functionext=()=>{
    console.log('Yo amo soacha');
}

//SetInterval

setInterval(() => {
    console.log('se repite')
}, 2000);


let timeId=setInterval(()=> console.log('yick'),5000);


//Detener el bucle
setTimeout(()=>{
    clearInterval(timeId)
    console.log('stop')
}, 10000);

//Escriba un progrma que escriba hasta 10 se muestre cada 2 segundos

function calcular(){
  for(var i=1; i<=10; i++){
    count++
    console.log(i)
  }
}
setTimeout(calcular, 2000)


for(let i=1; i< 20; i++){
    setTimeout(() => {
        console.log(i)
    }, (i*1000));
   
  }
