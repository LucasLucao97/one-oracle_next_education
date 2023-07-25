console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18){
    console.log("Cliente maior de idade")
    listaDeDestinos.splice(1,1); //Removendo item hipoteticamente indisponível
} else {
    if (estaAcompanhada){
        console.log("Menor acompanhada de um adulto");
        listaDeDestinos.splice(1,1);
    } else {
        console.log("Cliente menor de idade. Não é possível finalizar a operação");
    };
};

console.log(listaDeDestinos);