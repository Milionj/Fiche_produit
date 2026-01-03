const vignettes = document.querySelectorAll('.small');
console.log(vignettes);

const fullImg = document.getElementById('full');
console.log(fullImg);

vignettes.forEach((item)=>{
    console.log(item,'ce message apparait pour chaque item du tableau');

    item.addEventListener('click', function(){
    console.log(item, 'vignette cliquée');
});

item.addEventListener('click', function(){
    let imgSource = item.getAttribute('src');
    console.log(imgSource);
    fullImg.setAttribute('src', imgSource);
});
});

const btn = document.querySelector('.btn-add');
const panierContainer = document.querySelector('.panier-container');
let panier = 0;

btn.addEventListener('click', function(){
    console.log('bouton cliqué');
    panier = panier + 1;
    console.log(panier);

    if (!panierContainer) {
        return;
    }

    const produitLabel = panier < 2 ? 'produit' : 'produits';
    panierContainer.innerHTML = `Vous avez ${panier} ${produitLabel} dans votre panier`;
});



