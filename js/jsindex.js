
let dict=[
    ['Create your professional CV','Choose a template, fill out the form and get your CV in minutes.'],
    ['Créez votre CV professionnel','Choisissez un modèle, remplissez le formulaire et obtenez votre CV en quelques minutes.'],
    ['أنشئ سيرتك الذاتية الاحترافية','اختر قالبًا، واملأ النموذج واحصل على سيرتك الذاتية في دقائق']
]


function switchlang(){
    let index = document.getElementById("selectlang").selectedIndex;
    h1id.innerText=dict[index][0];
    h2id.innerText=dict[index][1];
    

}