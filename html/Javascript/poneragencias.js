import { get } from "./getajax.js";
var listaAgencias = document.getElementById("listadeagencias");
/*<li class="bg-secondary badge text-wrap rounded fw-bold"><a class="text-decoration-none fw-bold text-dark" href="agenciainfo.html">DOTA</a></li> */
var agregarAgencias = function(nombre,id){
    let nuevoLi = document.createElement("li");
    let nuevoA = document.createElement("a");
    let nombreAgencia = document.createTextNode(nombre.replace('?','Ñ'));
    nuevoA.appendChild(nombreAgencia);
    nuevoA.className = "fw-bold colorParaBoton";
    nuevoA.href="agenciainfo.html" + "?agenciaid=" + id;
    nuevoLi.className = "colorParaBoton badge text-wrap rounded fw-bold mx-2";
    nuevoLi.appendChild(nuevoA);
    listaAgencias.appendChild(nuevoLi);
}
get("https://api.jsonbin.io/b/61786245aa02be1d445f3dc5")
    .done((data)=>{
        for(let i=0;i<data.length;i++)
        {
            agregarAgencias(data[i].agency_name,data[i].agency_id);
        }        
    })
    .fail(() => {
        alert("Ocurrió un error al hacer la petición.")
    })
