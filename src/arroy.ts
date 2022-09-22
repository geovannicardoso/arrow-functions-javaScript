import Prompt = require ('prompt-sync');
 const prompt = Prompt
 let calimc = (peso:number,altura:number) => {
    return peso / Math.pow(altura, 2)
    
 };
 const altura = Number (prompt("Qual sua altura "))
 const peso = Number (prompt("Qual seu peso "))
 const imc = calimc(peso,altura);
 console.log(`Seu IMC é: ${imc}`);
 
 

 
 
