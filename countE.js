let text = "Je suis le ténébreux, - le veuf, - l'inconsolé,\n\
Le prince d'Aquitaine à la tour abolie :\n\
Ma seule étoile est morte, - et mon luth constellé\n\
Porte le soleil noir de la Mélancolie.\n\
\n\
Dans la nuit du tombeau, toi qui m'as consolé,\n\
Rends - moi le Pausilippe et la mer d'Italie, \n\
La fleur qui plaisait tant à mon cœur désolé, \n\
Et la treille où le pampre à la rose s'allie.\n\
\n\
Suis - je Amour ou Phébus ? ...Lusignan ou Biron ?\n\
Mon front est rouge encor du baiser de la reine; \n\
J'ai rêvé dans la grotte où nage la sirène...\n\
\n\
Et j'ai deux fois vainqueur traversé l'Achéron; \n\
Modulant tour à tour sur la lyre d'Orphée\n\
Les soupirs de la sainte et les cris de la fée."
let nb_e = 0
let regex = /[eéèêë]/gi
for (char of text) {
  if (char.match(regex)) {
    nb_e += 1
  }
}
console.log(`Le nombre de e contenu dans le texte est égal à ${nb_e}`)
