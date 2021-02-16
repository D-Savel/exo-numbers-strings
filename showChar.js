let texte = "C'était à Mégara, faubourg de Carthage, dans les jardins d'Hamilcar."
let auteur = 'Gustave Flaubert'
let titreLivre = 'Salammbô'
console.log(`La phrase : ${texte} est extraite du livre ${titreLivre} de ${auteur}\nCette dernière contient ${texte.length} caractères\n`)
for (let index = 0; index < texte.length; index++) {
  console.log(`Le caractère ${texte[index]} est à l'index ${index}`)
}