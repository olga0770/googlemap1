$.getJSON("json.json", dataErHentet);


 function dataErHentet(data){

 data.forEach(visInformation);
 }
 function visInformation(sted){

console.log ("vis");
 //3. klon template så der kan indsættes data
 var klon = document.querySelector("#informationmarker").content.cloneNode(true);

 //4. hvilke data skal med?
klon.querySelector(".data_billede").src = "picture/" + sted.billede + "-sted.jpg";
klon.querySelector(".data_navn").innerHTML = sted.navn;
klon.querySelector(".data_adresse").innerHTML = sted.adresse;
klon.querySelector(".data_beskrivelse").innerHTML = sted.beskrivelse;


 //5. tilføj html fra template til DOM
 document.querySelector(".moreinfo").appendChild(klon);

}


