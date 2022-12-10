let numero = [];
let media = 0;

for (let i = 0; i <4; i++){
numero.push(parseInt(prompt(`adicione o valor" ${i}: `)));
}
 media = (numero[0] + numero[1] + numero[2] + numero[3]) /4
 console.log("Média aritmetica =", media);