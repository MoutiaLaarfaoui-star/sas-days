let personne = {
    nom: "laarfaoui",
    prenom: "moutia",
    age: 18
};


console.log("Informations de la personne :");

for (let cle in personne) {
    console.log(cle, personne[cle])
}