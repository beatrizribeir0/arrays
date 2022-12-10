let numero = [];
let multiplicar;

for (let i = 1; i <=10; i++){
    numero [i]= prompt(`Coloque o numero ${i}`);

}

multiplicar= prompt ("Digite o valor para multiplicar");

for (let i = 1; i <=10; i++){
    numero [i] = numero [i] * multiplicar;
}

console.log("O produto escalar do vetor de numeros é:");

for (let i = 1; i <=10; i++){
console.log(numero [i]);
}