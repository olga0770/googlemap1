$.getJSON("json.json", dataErHentet);


 function dataErHentet(data){

 data.steder.forEach(visInformation);
 }
 function visInformation(sted){
 //3. klon template så der kan indsættes data
 var klon = document.querySelector("#informationmarker").content.cloneNode(true);

 //4. hvilke data skal med?
klon.querySelector(".data_billede").src = "picture/" + sted.billede + "-sted.jpg";
klon.querySelector(".data_navn").textContent = sted.navn;
klon.querySelector(".data_adresse").textContent = sted.adresse;
klon.querySelector(".data_beskrivelse").textContent = sted.beskrivelse;


 //5. tilføj html fra template til DOM
 document.querySelector(".moreinfo").appendChild(klon);

}


