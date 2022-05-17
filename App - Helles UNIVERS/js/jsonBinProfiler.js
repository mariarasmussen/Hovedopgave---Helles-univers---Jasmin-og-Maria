// lavet af Maria
"use strict";


// GLOBAL VARIABLES
let _profiler = [];
let _profilerId;
const _profilUrl = "https://api.jsonbin.io/b/626bc48938be296761f9d1fd";
const _headers2 = {
    "X-Master-Key": "$2b$10$6CWwxJQJou9fkW/moxmTFe9J.KsWNUmFdERE4UtvbqZLmSfzkrxfm",
    "Content-Type": "application/json"
};

//Fetch opslag data from jsonbin 
async function loadProfiler() {
    const url = _profilUrl + "/latest";
    const response = await fetch(url, {
        headers: _headers2
    });
    const data = await response.json();
    console.log(data);
    _profiler = data;
    appendProfiler(_profiler);
}

loadProfiler();

//Append profiler to hjemmeside
function appendProfiler(profiler) {
    let htmlTemplate = "";
    for (const enkeltProfil of profiler) {
        htmlTemplate += /*html*/ (`
            <article>
                <div class="profilerFlex">
                    <div class="ImgOgNavnProfiler">
                        <img class="profilerImg" src="${enkeltProfil.personImg}">
                        <p class="profilerNavn">${enkeltProfil.personName}</p>
                    </div>
                    <img src="${enkeltProfil.sletPerson}" class="slet" onclick="deletePerson()">
                </div>
            </article>
        `);
    }
    document.querySelector("#profilerJson").innerHTML = htmlTemplate;
}
appendProfiler(_profiler);
console.log(_profiler);

