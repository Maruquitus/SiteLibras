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
        vídeo[i].style = "transform: scale(100%); display: block;";
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
  }
  