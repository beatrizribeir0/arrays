let numeros = []
let num = 0;
let contador = 0;

for (let i = 0; i <15; i++){
    numero.push(parseInt(prompt(`Entre com o valor" ${i}: `)));
}

num = parseInt(prompt("Entre com um numero"));
for(let i = 0; i <15; i++) {
  if (numeros [i]== num){
    contador++;
  }
} 
console.log(`O numero ${num} aparece ${contador} vezes no array`)