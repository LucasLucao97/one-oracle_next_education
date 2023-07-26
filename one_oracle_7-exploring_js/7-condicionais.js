console.log(`Trabalhando com condicionais\n`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagem =  true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("\nVenda aprovada. Selecione o destino:");
    listaDeDestinos.splice(1, 1); //Removendo item hipoteticamente indisponível
} else {
    console.log("\nCliente menor de idade! Não é possível finalizar a operação.");
};

console.log("\nEmbarque:");
if (idadeComprador >= 18 && temPassagem == true) {
    console.log("Boa viagem!");
} else {
    console.log("Você não pode embarcar.\n");
    console.log("*Verifique sua passagem e as condições para a viagem.*");
}
