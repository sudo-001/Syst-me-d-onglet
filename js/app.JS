/*
    Lorsque l'on click sur un lien
        on retire la classe active sur le lien actuel
        on rajoute la classe active sur le lien cliqué

        on retire la classe active sur le contenu courant
        on rajoute la classe active sur le contenu correspondant au lien cliqué
*/

//On recupère tout les liens
let links = document.querySelectorAll('.tabs li a');

//On recupère tout les contenus
let contents = document.querySelectorAll('.tabs-content .tab-content');

//On met un ecouteur d'évènement sur chaque lien qui met en rouge le nouveau lien cliqué ;
for (let link of links)
{
    link.addEventListener('click', function(){

        // On retire la décoration
        link.parentNode.parentNode.querySelector('.active').classList.remove('active-link-decoration');

        //On retire la classe active sur le lien courant
        link.parentNode.parentNode.querySelector('.active').classList.remove('active');

        //On rajoute la classe active sur le lien cliqué
        link.parentNode.classList.add('active');
        link.parentNode.classList.add('active-link-decoration')

        //On s'occupe directement du contenu
        for (let content of contents)
        {
            
            // On enlève la classe active sur le content courant
            // console.log(content.parentNode.querySelector('.active'))
            content.parentNode.querySelector('.active').classList.remove('active');

            // On selectionne le contenu correspondant au lien cliqué
            content.parentNode.querySelector(link.getAttribute('href')).classList.add('active');
        }
    })
}
