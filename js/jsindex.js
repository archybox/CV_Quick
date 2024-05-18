
let dict=[
    ['Create your professional CV','Choose a template, fill out the form and get your CV in minutes.'],
    ['Créez votre CV professionnel','Choisissez un modèle, remplissez le formulaire et obtenez votre CV en quelques minutes.']
]


function switchlang(){
    let index = document.getElementById("selectlang").selectedIndex;
    h1id.innerText=dict[index][0];
    h2id.innerText=dict[index][1];

}