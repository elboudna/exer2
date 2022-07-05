
(function(){

    let elBoite__modale;
    let elBoite__X;
    let elBody = document.querySelector('body');
    let elBoiteContenu;

    function creerBoiteModale() {
        elBoiteContenu = document.createElement('div');
        elBoiteContenu.classList.add('elBoiteContenu');
        elBoite__modale = document.createElement('div');
        elBoite__X = document.createElement('button');
        elBoite__X.classList.add('boite__x');
        elBoite__modale.appendChild(elBoite__X);
        elBoite__modale.appendChild(elBoiteContenu);
        
        elBoite__X.innerHTML = "X";
        elBoiteContenu.innerHTML = "3 800, rue Sherbrooke Est Montréal (Québec) H1X 2A2 | 514 254-7131";
        elBoite__modale.classList.add('boite__modale');
        elBody.appendChild(elBoite__modale);
    }

    creerBoiteModale();

    let btn = document.querySelector("#mon_bouton");
    //document.querySelector('.boite__modale');
    
    btn.addEventListener("mousedown", function(){
        console.log("Bravo, le script fonctionne");
        elBoite__modale.classList.add('boite__modale__ouvrir');
    })

    elBoite__X.addEventListener('mousedown', function(){
        elBoite__modale.classList.remove('boite__modale__ouvrir');
    })

})()
