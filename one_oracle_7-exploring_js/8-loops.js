console.log(`Trabalhando com loops\n`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
let estaAcompanhada = false;
let temPassagem =  false;
const destino = "Rio de Janeiro";

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

while (contador < 3) {
    if (listaDeDestinos[contador] == destino) {
        destinoExiste = false;
        break;
    }
    contador ++;
};

console.log("Destino existe? ", destinoExiste);