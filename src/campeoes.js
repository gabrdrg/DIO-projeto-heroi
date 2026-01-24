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
// aqui usamos um vetor para armazenar os campeões criados a partir da classe Campeoes
// facilita o uso de laços de reetição

let campeoes = [
    new Campeoes("Miss Fortune", 24, "atirador", "bot"),
    new Campeoes("Lux", 19, "mago", "mid"),
    new Campeoes("Katarina", 21, "assassino", "mid"),
    new Campeoes("Garen", 30, "lutador", "top")
]

//bloco 3 - usar os campeões
// aqui usamos um laço de repetição para fazer cada campeão atacar
// o for tem sempre 3 partes: inicialização, condição e incremento
// inicialização: let i = 0 (começa do primeiro elemento do vetor, que é o índice 0)
// o i é usado como índice para acessar cada campeão dentro do vetor campeoes
// condição: i < campeoes.length (enquanto i for menor que o tamanho do vetor campeoes) 
// leght é uma propriedade que retorna o tamanho do vetor, nesse caso 4, pq tem 4 campeões
// incremento: i++ (a cada repetição, incrementa i em 1)

for (let i = 0; i < campeoes.length; i++) {
    campeoes[i].atacar()
}