let x=10;
console.log ('1. proceso iniciado....')
setTimeout(() => {
    x=x*3+2;
    console.log('2. Proceso terminado....')
}, 2000);

console.log('3. el resultado es:'+ x)


const promesa=new Promise ((resolve, reject)=>{
    var x=0;
    setTimeout(() => {
        x=(x*3)+2;
        console.log('2. Proceso terminado....')
        resolve(x)
    }, 2000);

})

console.log('1. el proceso iniciado....')
promesa
.then (res=>{
    console.log('3. El resultado es:' +res)

})

console.log('-------------------------------------------------------------------------------------------')


const promise = new Promise((resolve, reject) => {
	const number = Math.floor(Math.random() * 10);
    console.log(number)

	setTimeout(
		() => number > 5
			? resolve('se cumple es mayor a 5')
			: reject(new Error('Menor a 5')),
		1000
	);
});

promise
	.then(number => console.log(number))
	.catch(error => console.error(error));