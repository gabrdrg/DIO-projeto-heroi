let heroiNome = "Miss Fortune"
let quantidadeVitorias = 0
let nivelHeroi = ""

quantidadeVitorias = saldoRankeadas(30, 10)

function saldoRankeadas(vitorias, derrotas) {
  return vitorias - derrotas
}

if (quantidadeVitorias <= 10) {
  nivelHeroi = "Ferro"
} else if (quantidadeVitorias <= 20) {
  nivelHeroi = "Bronze"
} else if (quantidadeVitorias <= 50) {
  nivelHeroi = "Prata"
} else if (quantidadeVitorias <= 80) {
  nivelHeroi = "Ouro"
} else if (quantidadeVitorias <= 90) {
  nivelHeroi = "Diamante"
} else if (quantidadeVitorias <= 100) {
  nivelHeroi = "Lendário"
} else {
  nivelHeroi = "Imortal"
}

console.log(
  "A heroína " + heroiNome +
  " tem saldo de " + quantidadeVitorias +
  " e está no nível de " + nivelHeroi
)