/* let portionsmenge = 5;

let zutatenMenge = 200;

let berechneteMenge = zutatenMenge * portionsmenge ;

if (portionsmenge <= 0 ){
    alert("Die Eingabe ist ungültig");
} else {
    console.log(berechneteMenge = zutatenMenge * portionsmenge);
}
*/
/*
let zutaten = ["Kartoffel", "Zwiebel", "Drachenpulver"];
let mengen = [200, 100, 1];
let einheit = ["Gramm", "Gramm", "Prise"];

/* console.log(zutaten[0], mengen[0], Einheit[0]); */
/*
let i=0;
for (i=0; i<zutaten.length; i++){
    console.log("Zutat" + ":" + zutaten[i] + "-" + mengen[i] + " " + einheit[0]);
}
*/

let popup = document.getElementById("popup");
let openBtn = document.getElementById("openPopup");
let closeBtn = document.querySelector(".close");

openBtn.addEventListener("click", function() {
    popup.style.display="flex";
})

closeBtn.addEventListener("click", function() {
    popup.style.display="none";
})

let zutaten = ["Huhn", "Currypulver", "Kokosmilch", "Ingwer", "Zwiebel", "Reis", "Zitronensaft", "Chili"];
let mengen = [1, 10, 250, 2, 1, 200, 20, 0.5];
let einheiten = ["Stk.", "g", "ml", "ml", "Stk.", "g", "ml", "g"];

let input = document.getElementById("portionInput");
let liste = document.getElementById("zutatenListe");

/* Rezept Anzeigen */
function rezeptAnzeiger(portionen){
    liste.innerHTML = "";
    for (let i=0; i < zutaten.length; i++){
        let neuMengen = mengen[i]*portionen;
        liste.innerHTML += "<li>" + zutaten[i] + "<span>" + neuMengen + "" + einheiten[i]+"</span></li>";
    }
}

/* Prüfung ob die Eingabe großer als 0*/

input.addEventListener("change", function(){
    let portionsmenge = parseInt(input.value);

    if (portionsmenge <= 0){
        alert("Die Eingabe ist ungültig!");
        input.value = 1;
        rezeptAnzeiger(1);
    } else{ rezeptAnzeiger(portionsmenge);}
});

rezeptAnzeiger(1);