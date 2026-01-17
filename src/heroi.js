let nomeHeroi = "Feiticeira Escarlate"
let nivelHeroi = ""

for (let xp = 0; xp <= 10000; xp = xp + 1000) {

if (xp <= 1000) {
  nivelHeroi = "Ferro"
} else if (xp >= 1001 && xp <= 2000) {
  nivelHeroi = "Bronze"
} else if (xp >= 2001 && xp <= 5000) {
    nivelHeroi = "Prata"
} else if (xp >= 5001 && xp <= 7000) {
    nivelHeroi = "Ouro"
} else if (xp >= 7001 && xp <= 8000) {
    nivelHeroi = "Platina"
} else if (xp >= 8001 && xp <= 9000) {
    nivelHeroi = "Ascendente"
} else if (xp >= 9001 && xp <= 10000) {
    nivelHeroi = "Imortal"
} else {
    nivelHeroi = "Radiante"
}
console.log ("A heróina de nome " + nomeHeroi + " está no nível de " + nivelHeroi)
}