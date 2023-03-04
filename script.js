 
var tag = document.createElement('script')
 
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)


var módulos = [
    {"título":"O Alfabeto", "id":"sntDyFlilGE"},
    {"título":"Cumprimentos", "id":"sntDyFlilGE"},
    {"título":"Emoções", "id":"sntDyFlilGE"},
    {"título":"Expressões", "id":"sntDyFlilGE"}
]

var player;
var player2;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('player1', {
    height: '315',
    width: '512',
    videoId: módulos[0]["id"]
  });
  player2 = new YT.Player('player2', {
    height: '315',
    width: '512',
    videoId: '4eH4GWWWhC4'
  });
  player = new YT.Player('player3', {
    height: '315',
    width: '512',
    videoId: '4eH4GWWWhC4'
  });
  player2 = new YT.Player('player4', {
    height: '315',
    width: '512',
    videoId: '4eH4GWWWhC4'
  });
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

        console.log(this.enabled);
    
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

for (i = 0; i < coll.length; i++) {
  
  let atual = coll[i];
  if (vistos != "")
  {
    if (i+1 >= vistos) {
    
        atual.disabled = true;
        atual.firstElementChild.innerHTML = 'Módulo ' + (i+1).toString() + " - " +  módulos[i]["título"] +  '  <i class="fa-solid fa-lock"></i>';
      }
    else {
        atual.firstElementChild.innerHTML = 'Módulo ' + (i+1).toString() + " - " +  módulos[i]["título"];
    }
  }
  else {
    vistos = 1;
    document.cookie = "modulosvistos=1; SameSite=Strict; Secure";
  }

  //coll[i].addEventListener("click", checar);
}

checar();