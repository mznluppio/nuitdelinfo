// Init AOS
AOS.init();

// Pages animations
/* function showpage(page, btn) {
    let div = document.querySelector(".mainDiv.active");
    let newDiv = document.querySelector(`#${page}`);

    document.querySelector(".navbtn.active").classList.remove("active");
    btn.classList.add("active");

    newDiv.classList.remove("hidden");
    div.classList.remove("active");

    setTimeout(() => {
        div.classList.add("hidden");
        newDiv.classList.add("active");
    }, 500);
} */

function VerifForm() {
    var res = 9;

    // ici une serie de tests : (exmple si les champs sont vides)
    const nom = document.getElementsByName("nom");
    const prenom = document.getElementsByName("prenom");
    const email = document.getElementsByName("email");
    const adresse = document.getElementsByName("adresse");
    const ville = document.getElementsByName("ville");
    const cp = document.getElementsByName("cp");
    const pays = document.getElementsByName("pays");
    const tel = document.getElementsByName("tel");
    const msg = document.getElementsByName("msg");

    if (nom[0].value !== "") {
        res--;
    }
    if (prenom[0].value !== "") {
        res--;
    }
    if (email[0].value !== "") {
        res--;
    }
    if (adresse[0].value !== "") {
        res--;
    }
    if (ville[0].value !== "") {
        res--;
    }
    if (cp[0].value !== "") {
        res--;
    }
    if (pays[0].value !== "") {
        res--;
    }
    if (tel[0].value !== "") {
        res--;
    }
    if (msg[0].value !== "") {
        res--;
    }
    console.log(res);

    return res;
    //ici le retour de la fonction
    /*  if (AllIsOk == 0) {
        
     }
  */
    //retourne true si tous les champs sont remplis
    //retourner false si un seul des champs est vide
}
const btn = document.getElementById('groscaca');



btn.addEventListener('mouseover', function () {
    if (VerifForm() === 9) {
        const height = Math.floor(Math.random() * window.innerHeight);
        const width = Math.floor(Math.random() * window.innerWidth);
        btn.style.top = `${height}px`;
        btn.style.left = `${width}px`;
    }
    if (VerifForm() === 0) {
        btn.style.top = `105%`;
        btn.style.left = `50%`;
        btn.style.transform = `translate(-50%)`;
    }
});





btn.addEventListener('click', function () {
    btn.innerText = "Bravo tu as réussi";
    document.body.style.backgroundColor = "green";
})

//Animation
/* function play() {

    var div = document.getElementById("caca");
    var start = document.getElementById("startbutton");
    div.style.display = "block";
    start.style.display = "none";

}

function Alert() {



    var total = document.getElementById("total");
    var start = document.getElementById("startbutton");
    alert("Entrez toutes les informations !");
    total.value = total.value * 1 + 1;
    start.style.display = "block";
    div.style.display = "none";

}

function Random() {
    var button = document.getElementById("button");
    var RandomX = Math.random() * 90 + "%";
    var RandomY = Math.random() * 92 + "%";
    button.style.left = RandomX;
    button.style.top = RandomY;

}

 */




