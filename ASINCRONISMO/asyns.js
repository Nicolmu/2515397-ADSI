function saySomething(x) {
    return new Promise((resolve,reject) => {
        reject();
    setTimeout(() => {
    //reject("something" + x);
    reject();
    }, 2000);
    });
}
async function talk(x) {
    try {
    const words = await saySomething(x);
    console.log(words);
    } catch (error) {
        console.log('mi errorrrrrrr',error)
    }
    
    }    
    talk(2);
    talk(4);
    talk(8);

    function sumaArreglo(vector){  
        let s=0;      
            for (let i = 0; i < vector.length; i++) {
                s+=vector[i];                    
            }
            console.log(s);
            //return s;
        }

   

    function promisoria(vec){
        return new Promise(function(resolve, reject){
            setTimeout(() => {
                if(vec instanceof Array){                                        
                    resolve(sumaArreglo(vec))                
                }
                else reject(new Error('!Debe ser arreglo'))    
            }, 2000);
            
    })
}

async function prueba(vector){
    try{
        const suma= await promisoria(vector);
       // console.log('Ir adelantando trabajo mientras se cumple la promesa')
        
        //console.log(suma)
    }catch(Error){
        console.log('Fallo')
    }
//console.log(suma);
}


let vectorReal=[1,2,3];
prueba(vectorReal);