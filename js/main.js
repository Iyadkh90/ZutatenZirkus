/* let portionsmenge = 5;

let zutatenMenge = 200;

let berechneteMenge = zutatenMenge * portionsmenge ;

if (portionsmenge <= 0 ){
    alert("Die Eingabe ist ungültig");
} else {
    console.log(berechneteMenge = zutatenMenge * portionsmenge);
}

 */

let zutaten = ["Kartoffel", "Zwiebel", "Drachenpulver"];
let mengen = [200, 100, 1];
let einheit = ["Gramm", "Gramm", "Prise"];

/* console.log(zutaten[0], mengen[0], Einheit[0]); */

let i=0;
for (i=0; i<zutaten.length; i++){
    console.log("Zutat" + ":" + zutaten[i] + "-" + mengen[i] + " " + einheit[0]);
}
