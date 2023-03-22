var vídeos = [
  {"título":"Título 1", "id":"UvWb6tBUx6w"},
  {"título":"Título 2", "id":"UvWb6tBUx6w"},
  {"título":"Título 3", "id":"UvWb6tBUx6w"},
  {"título":"Título 4", "id":"UvWb6tBUx6w"},
  {"título":"Título 5", "id":"UvWb6tBUx6w"},
  {"título":"Título 6", "id":"UvWb6tBUx6w"},
  {"título":"Título 7", "id":"UvWb6tBUx6w"},
  {"título":"Título 8", "id":"UvWb6tBUx6w"},
  {"título":"Título 9", "id":"UvWb6tBUx6w"},
  {"título":"Título 10", "id":"UvWb6tBUx6w"},
  {"título":"Título 2", "id":"UvWb6tBUx6w"},
  {"título":"Título 3", "id":"UvWb6tBUx6w"},
  {"título":"Título 4", "id":"UvWb6tBUx6w"},
  {"título":"Título 5", "id":"UvWb6tBUx6w"},
  {"título":"Título 6", "id":"UvWb6tBUx6w"},
  {"título":"Título 7", "id":"UvWb6tBUx6w"},
  {"título":"Título 8", "id":"UvWb6tBUx6w"},
  {"título":"Título 9", "id":"UvWb6tBUx6w"},
  {"título":"Título 2", "id":"UvWb6tBUx6w"},
  {"título":"Título 3", "id":"UvWb6tBUx6w"},
  {"título":"Título 4", "id":"UvWb6tBUx6w"},
  {"título":"Título 5", "id":"UvWb6tBUx6w"},
  {"título":"Título 6", "id":"UvWb6tBUx6w"},
  {"título":"Título 7", "id":"UvWb6tBUx6w"},
  {"título":"Título 8", "id":"UvWb6tBUx6w"},
  {"título":"Título 9", "id":"UvWb6tBUx6w"},
  {"título":"Título 2", "id":"UvWb6tBUx6w"},
  {"título":"Título 3", "id":"UvWb6tBUx6w"},
  {"título":"Título 4", "id":"UvWb6tBUx6w"},
  {"título":"Título 5", "id":"UvWb6tBUx6w"},
  {"título":"Título 6", "id":"UvWb6tBUx6w"},
  {"título":"Título 7", "id":"UvWb6tBUx6w"},
  {"título":"Título 8", "id":"UvWb6tBUx6w"},
  {"título":"Título 9", "id":"UvWb6tBUx6w"},
  {"título":"Título 2", "id":"UvWb6tBUx6w"},
  {"título":"Título 3", "id":"UvWb6tBUx6w"},
  {"título":"Título 4", "id":"UvWb6tBUx6w"},
  {"título":"Título 5", "id":"UvWb6tBUx6w"},
  {"título":"Título 6", "id":"UvWb6tBUx6w"},
  {"título":"Título 7", "id":"UvWb6tBUx6w"},
  {"título":"Título 8", "id":"UvWb6tBUx6w"},
  {"título":"Título 9", "id":"UvWb6tBUx6w"},
  {"título":"Título 2", "id":"UvWb6tBUx6w"},
  {"título":"Título 3", "id":"UvWb6tBUx6w"},
  {"título":"Título 4", "id":"UvWb6tBUx6w"},
  {"título":"Título 5", "id":"UvWb6tBUx6w"},
  {"título":"Título 6", "id":"UvWb6tBUx6w"},
  {"título":"Título 7", "id":"UvWb6tBUx6w"},
  {"título":"Título 8", "id":"UvWb6tBUx6w"},
  {"título":"Título 9", "id":"UvWb6tBUx6w"},
  {"título":"Título 2", "id":"UvWb6tBUx6w"},
  {"título":"Título 3", "id":"UvWb6tBUx6w"},
  {"título":"Título 4", "id":"UvWb6tBUx6w"},
  {"título":"Título 5", "id":"UvWb6tBUx6w"},
  {"título":"Título 6", "id":"UvWb6tBUx6w"},
  {"título":"Título 7", "id":"UvWb6tBUx6w"},
  {"título":"Título 8", "id":"UvWb6tBUx6w"},
  {"título":"Título 9", "id":"UvWb6tBUx6w"},
  {"título":"Título 2", "id":"UvWb6tBUx6w"},
  {"título":"Título 3", "id":"UvWb6tBUx6w"},
  {"título":"Título 4", "id":"UvWb6tBUx6w"},
  {"título":"Título 5", "id":"UvWb6tBUx6w"},
  {"título":"Título 6", "id":"UvWb6tBUx6w"},
  {"título":"Título 7", "id":"UvWb6tBUx6w"},
  {"título":"Título 8", "id":"UvWb6tBUx6w"},
  {"título":"Título 9", "id":"UvWb6tBUx6w"},
]

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var mostrar = 8;
var players = [];
for (let i = 0; i < vídeos.length; i++) {
  if (i>0)
    {
      let elem = document.getElementsByClassName('vídeo')[i-1];
      console.log(mostrar);
      var clone = elem.cloneNode(true);
      clone.firstElementChild.innerHTML = vídeos[i]["título"];
      clone.lastElementChild.firstElementChild.id = "vid" + (i+1).toString();
      elem.after(clone);
    }
    else {
      let elem = document.getElementsByClassName('vídeo')[i];
      elem.firstElementChild.innerHTML = vídeos[i]["título"];
    }
}

var feito = 0;
function funcaoSearch() {
    var input, filter, vídeos, vídeo, a, i, txtValue, resultados;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    vídeos = document.getElementById("vídeos");
    vídeo = vídeos.getElementsByClassName('vídeo');

    resultados = 0;
    
    for (i = 0; i < vídeo.length; i++) {
      a = vídeo[i].getElementsByTagName("h1")[0];

        if (feito == 0){
            vídeo[i].addEventListener("transitionend", (event) => {
                const element = event.target;
                if (element.style.transform == "scale(0)") {
                    element.style = "transform: scale(0%);  overflow:hidden; display:none;";
                }
                
            });
        }
      
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        resultados += 1;
        if (resultados > mostrar) {
          vídeo[i].style = "transform: scale(100%); display: none;";
        }
        else {
          vídeo[i].style = "transform: scale(100%); display: block;";
        }
      } else {
        vídeo[i].style = "transform: scale(0%);  overflow:hidden; display: none;";
      }
    }
    if (resultados == 0) {
        scrollTo(0, 0);
        document.getElementById("vídeos").style = "height: 768px;";
        document.getElementById("mensagem").style = "opacity: 1;";
    }
    else {
        document.getElementById("vídeos").style = "";
        document.getElementById("mensagem").style = "opacity: 0;";
    }

    if (resultados < 2) {
        scrollTo(0, 0);
        document.getElementById("vídeos").style = "height: 768px;";
    }
    update(1);
  }

var mostrarMais = document.getElementById("mostrarMais");
var carregados = 0;
var load = document.getElementById("load-div-container");

async function update(fromSearch=0) {  
  document.body.style = "overflow: hidden";
  load.style = "opacity: 1; pointer-events:auto;";
  await sleep(350);
    for (let i = 0; i < vídeos.length; i++) {
      if (i>0 && fromSearch == 0)
        {
          let elem = document.getElementsByClassName('vídeo')[i];
          if (i > mostrar) {
            elem.style = "display: none";
          }
          else {
            elem.style = "display: block";
          }
        }
        if (i <= mostrar*(fromSearch*999+1) && i > mostrar-9*(fromSearch*999+1)) {
          const e = vídeos[i];
          v = videojs("vid" + (i+1).toString(),{
            techOrder: ["youtube"],
            sources: [{ "type": "video/youtube", "src": "http://www.youtube.com/watch?v=" + e["id"]}]
        });
          v.on('ended', function() {
            this.exitFullscreen();
            this.hasStarted(false);
        });
        v.on('ready', function() {
          console.log(carregados);
          if (carregados >= mostrar) {
            document.getElementById("load-div-container").style = "opacity: 0; pointer-events:none;";
            document.body.style = "";
          }
          carregados++;
      });
          players.push(v);
        }
  
  if (vídeos.length > mostrar+1) {
    mostrarMais.style = "display: block;"
  }
  else {
    mostrarMais.style = "display: none;"
  }
  }
}

function aumentarQnt() {
  console.log(mostrar);
  mostrar += 9;
  update();
}

update();