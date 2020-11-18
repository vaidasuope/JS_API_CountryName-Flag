"use strict"

const gautiDuomenis= fetch(`https://restcountries.eu/rest/v2/all`);
console.log(gautiDuomenis);
gautiDuomenis.then(atsakymas => {
        return atsakymas.json();
}).then(visiDuomenys => {
        console.log(visiDuomenys);
        const vienaSalis = visiDuomenys.map(vienaSalis => { //map cikliukas, su kuriuo galiu issitraukineti duomenis is duomenu strukturos
                vienaSalis.name;
                console.log(vienaSalis.name);
                const veliavos = vienaSalis.flag;
                console.log(veliavos);
                const visosSalys = document.getElementById("vietaKurDesim");
                const saliesVieta = document.createElement("div");
                const saliesPav = document.createElement("h4");
                const foto = document.createElement("img");

                saliesPav.innerHTML=vienaSalis.name;
                foto.setAttribute("src", vienaSalis.flag,);
                visosSalys.appendChild(saliesVieta);
                saliesVieta.appendChild(saliesPav);
                saliesVieta.appendChild(foto);
        });
});
