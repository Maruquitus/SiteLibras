
var módulos = [
    {"título":"O Alfabeto", "id":"sntDyFlilGE"},
    {"título":"Cumprimentos", "id":"sntDyFlilGE"},
    {"título":"Emoções", "id":"sntDyFlilGE"},
    {"título":"Expressões", "id":"sntDyFlilGE"}
]

var vistos;
var players = [];
for (let i = 0; i < módulos.length; i++) {
    const e = módulos[i];
    players.push(videojs("vid" + (i+1).toString(),{
        techOrder: ["youtube"],
        sources: [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=" + e["id"]}]
    }));

    }

    


function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
 
var checar = function() {
    for (ii = 0; ii < coll.length; ii++) {
        let at = coll[ii];

        var content = at.nextElementSibling;
    
        if (at.disabled == true){
            content.style.maxHeight = null;
            at.style.borderRadius = "10px";
            at.style.transition = "border-radius 1s";
          } else {
            content.style.maxHeight = content.scrollHeight*4 + "px";
            at.style.transition = "";
            at.style.borderRadius = "10px 10px 0px 0px";
          }
    }
}

var coll = document.getElementsByClassName("collapsible");
var i;
var vistos = parseInt(getCookie("modulosvistos"));
if (vistos != NaN) {
    vistos = 1;
    document.cookie = "modulosvistos=1;";
}

for (i = 0; i < coll.length; i++) {
  
    let atual = coll[i];
    if (i+1 > vistos) {

        atual.disabled = true;
        atual.firstElementChild.innerHTML = 'Módulo ' + (i+1).toString() + " - " +  módulos[i]["título"] +  '  <i class="fa-solid fa-lock"></i>';
        }
    else {
        atual.firstElementChild.innerHTML = 'Módulo ' + (i+1).toString() + " - " +  módulos[i]["título"];
    }

  //coll[i].addEventListener("click", checar);
}

function teste() {
    console.log("Terminou!");
}

checar();