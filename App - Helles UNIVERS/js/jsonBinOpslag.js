// lavet af Maria
"use strict";


// GLOBAL VARIABLES - link til jsonBin og globale variabler
let _opslag = [];
let _nyheder = [];
let _opslagId;
let _nyhederId
const _baseUrl = "https://api.jsonbin.io/b/626bc4cc019db46796934ed7";
const _headers = {
    "X-Master-Key": "$2b$10$6CWwxJQJou9fkW/moxmTFe9J.KsWNUmFdERE4UtvbqZLmSfzkrxfm",
    "Content-Type": "application/json"
};

//Fetch opslag data from jsonbin - Man tager noget fra en API 
async function loadOpslag() {
    const url = _baseUrl + "/latest";
    const response = await fetch(url, {
        headers: _headers
    });
    const data = await response.json();
    console.log(data);
    _opslag = data;
    appendOpslag(_opslag);
}

//Fetch opslag data from jsonbin - Man tager noget fra en API 
async function loadNyheder() {
    const url = _baseUrl + "/latest";
    const response = await fetch(url, {
        headers: _headers
    });
    const data = await response.json();
    console.log(data);
    _nyheder = data;
    appendNyheder(_nyheder);
}

/* kør functionen */
loadOpslag();
loadNyheder();



//Append/tilføj opslag til hjemmeside
function appendOpslag(opslag) {
    let htmlTemplate = "";
    for (const enkeltOpslag of opslag) {
        htmlTemplate += /*html*/ (`
            <article>
                <div class="nyhedsbox">
                    <div class="helle">
                        <img class="nyhedMiniImg" src="${enkeltOpslag.helleImg}">
                        <p class="navn">${enkeltOpslag.helleNavn}</p>
                    </div>
                    <img src="${enkeltOpslag.storImg}" class="nyhedImg">
                    <div class="like">
                        <h3 class="overskrifth3">${enkeltOpslag.overskrift}</h3>
                        <img src="${enkeltOpslag.sletOpslag}" class="sletIkon">
                    </div>
                </div>
            </article>
        `);
    }
    document.querySelector("#opslagJson").innerHTML = htmlTemplate;
}

/* kør functionen */
appendOpslag(_opslag);
/* tjek for fejl i console */
console.log(_opslag);

//Append/tilføj nyheder til DOM
function appendNyheder(nyheder) {
    let htmlTemplate = "";
    for (const enkeltnyhed of nyheder) {
        htmlTemplate += /*html*/ (`
            <article>
                <div class="nyhedsbox">
                <div class="hjerteOgNavn">
                    <div class="helle">
                        <img class="nyhedMiniImg" src="${enkeltnyhed.helleImg}">
                        <p class="navn">${enkeltnyhed.helleNavn}</p>
                    </div>
                    <img src="${enkeltnyhed.likeOpslagIkon}" class="likeIkon">
                    </div>
                    <a href="${enkeltnyhed.opslag_Link}">
                        <img src="${enkeltnyhed.storImg}" class="nyhedImg">
                    </a>
                    <div class="like">
                        <h3 class="overskrifth3">${enkeltnyhed.overskrift}</h3>
                    </div>
                </div>
            </article>
        `);
    }
    document.querySelector("#nyhederJson").innerHTML = htmlTemplate;
}

/* kør functionen */
appendNyheder(_nyheder);
/* tjek for fejl i console */
console.log(_nyheder);



//Detail view 
//let _slet = '';
//function showDetailView(sletOpslag) {
//    _slet = sletOpslag;
  //  const enkeltOpslag = _opslag.find(enkeltOpslag => enkeltOpslag.sletOpslag == _slet);
    //document.querySelector("#detailViewContainer").innerHTML = /*html*/`
      //  <article>
        //    <img src="${enkeltOpslag.sletOpslag}">
       // </article>
    //`;
   // navigateTo("detailView");
//}

// ========== DELETE ========== 

//async function deleteOpslag() {
  //  _opslag = _opslag.filter(enkeltOpslag => enkeltOpslag.sletOpslag !== _slet);
//    await updateJSONBIN(_opslag);
//    navigateTo("#hellesNyheder");
//}
