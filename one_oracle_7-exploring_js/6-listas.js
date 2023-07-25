console.log(`Trabalhando com listas`);
//const salvador = `Salvador`;
//const saoPaulo = `São Paulo`;
//const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curtitiba`); //Adicionando um item na lista
listaDeDestinos.splice(2,1); //Posição e quantidade

console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);
