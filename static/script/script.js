
var módulos = [
    {"título":"O Alfabeto", "id":"asQeqQ2b1fo"},
    {"título":"Cumprimentos", "id":"sntDyFlilGE"},
    {"título":"Emoções", "id":"sntDyFlilGE"},
    {"título":"Expressões", "id":"sntDyFlilGE"},
    {"título":"Objetos", "id":"sntDyFlilGE"}
]

var vistos;
var carregados = 0;
var load = document.getElementById("load-div-container");
var players = [];
document.body.style = "overflow: hidden";
load.style = "opacity: 1; pointer-events:auto;";
for (let i = 0; i < módulos.length; i++) {
    const e = módulos[i];
    v = videojs("vid" + (i+1).toString(),{
      techOrder: ["youtube"],
      sources: [{ "type": "video/youtube", "src": "http://www.youtube.com/watch?v=" + e["id"]}]
  });
    v.on('ready', function() {
      carregados++;
      if (carregados >= módulos.length) {
        document.getElementById("load-div-container").style = "opacity: 0; pointer-events:none;";
        document.body.style = "";
      }
    })
    v.on('ended', function() {
      let Id = this.id();
      console.log(Id)
      let mod = parseInt(Id.charAt(Id.length-1))+1;
      vistos = mod;
      document.cookie = "modulosvistos=" + mod.toString() + ";";
      this.exitFullscreen();
      this.hasStarted(false);
      update();
  });
  players.push(v);
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

function update() {
  var vistos = parseInt(getCookie("modulosvistos"));
  if (isNaN(vistos)) {
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
        atual.disabled = false;
        atual.firstElementChild.innerHTML = 'Módulo ' + (i+1).toString() + " - " +  módulos[i]["título"];
    }
  
  }
  checar();
}

update();