function base(){
    return new Promise((resolve,reject)=>{
        if(falso){
            resolve()
        setTimeout(() => {
            console.log('línea de código dentro de la función promesa')    
        }, 500);
    }else{
        reject(new Error('Presten atención'))
    }
        
       
    });
}

// const miFuncion=new Promise((resolve,reject)=>{
//     resolve();
//         setTimeout(() => {
//             console.log('línea de código dentro de la función promesa')    
//         }, 500);
// })
base()
    .then(()=>{
        console.log('En el .then');
        return 1000;
    })
    .then((dato)=>{
        console.log('En el then 2 recibo=',dato)
    })
    .then(auxiliar)
    .catch(error=>console.error('Se activo el reject'))
    
    function auxiliar(){
        console.log('Función auxiliar');
    }










// function prueba(cb){
//     let x;
//     cb();
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
        
//     }
// }

// prueba(()=>{

// })
// prueba(externa)
// function externa(){

// }