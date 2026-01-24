// bloco 1 - definir a classe dos campeões
// classe é a "forma" dos objetos que serão os campeões do LOL
// aqui definimos as características e comportamentos que todos os campeões terão

class Campeoes {


// se a classe é a forma, o constructor é a receita em execução.
// todo campeão tem nome, idade, tipo e lane (a rota ideal que ele deve jogar dependendo do tipo que ele é)

    constructor(nome, idade, tipo, lane) {
        this.nome = nome; // nome do campeão
        this.idade = idade; // idade do campeão
        this.tipo = tipo; // tipo do campeão (mago, atirador, assassino, lutador, tanque, suporte)
        this.lane = lane; // lane ideal do campeão (top, mid, bot, jungle)
    }


// aqui definimos os métodos (comportamentos) que os campeões terão, neste caso, o método atacar
// dentro de classe não precisamos usar let ou var para definir métodos ou funções, podemos definir direto
// método de ataque do campeão

    atacar() {

        // nesse caso criamos uma variavel vazia pq ainda não sabemos qual será o tipo de ataque
        // ela será definida conforme o tipo do campeão, depois de executar o if abaixo dela

        let ataque = ""

// aqui precisamos usar estrutura de decisão para definir o ataque do campeão
// dependendo do tipo do campeão, o ataque será diferente

            if (this.tipo === "mago") {
                ataque = "magia"
            } else if (this.tipo === "atirador") {
                ataque = "arma de fogo"
            } else if (this.tipo === "assassino") {
                ataque = "adagas"
            } else if (this.tipo === "lutador") {
                ataque = "corpo a corpo"
            }

// console log precisa ficar dentro do método para mostrar o ataque do campeão
// como ele usa o this.nome e this.tipo, ele pega o nome e o tipo do campeão que chamou o método
// a variavel ataque so existe dentro do método atacar, por isso o console log também precisa estar dentro

console.log (
    `O campeão ${this.nome}, do tipo ${this.tipo} atacou usando ${ataque}!`
        )
    }
}



// bloco 2 - criar os objetos, nesse caso os campeões
// cada campeão é um objeto da classe Campeoes
// aqui criamos campeões diferentes com suas características

let missFortune = new Campeoes("Miss Fortune", 24, "atirador", "bot")
let lux = new Campeoes("Lux", 19, "mago", "mid")
let katarina = new Campeoes("Katarina", 21, "assassino", "mid")
let garen = new Campeoes("Garen", 30, "lutador", "top")

//bloco 3 - usar os campeões
// aqui usamos os campeões, chamando seus métodos para ver as execuções das funções

missFortune.atacar()
lux.atacar()
katarina.atacar()
garen.atacar()