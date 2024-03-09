import { get } from "./getajax.js";
var listadeLineas = document.getElementById("listadelineas");
    get("https://api.npoint.io/ee52fbe35f0ddca1d002")
        .done((routes)=>{
            for(let i=0;i<routes.length;i++)
            {
                    let nuevoLi = document.createElement("li");
                    let nuevoA = document.createElement("a");
                    let nombredeLinea = document.createTextNode(routes[i].route_short_name.replace('?','Ñ'));
                    nuevoA.appendChild(nombredeLinea);
                    nuevoA.className = "fw-bold colorParaBoton";
                    nuevoA.href="infolinea.html" + "?lineanombre=" + routes[i].route_short_name +"&agenciaide=" + routes[i].agency_id;
                    nuevoLi.className = "colorParaBoton badge text-wrap rounded fw-bold mx-2";
                    nuevoLi.appendChild(nuevoA);
                    listadeLineas.appendChild(nuevoLi);
            }
    })
    .fail(()=>{
        alert("Ocurrió un error al hacer la petición.")
    })
var buscarLinea = function() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('inputBuscar');
    filter = input.value.toUpperCase();
    li = listadeLineas.getElementsByTagName("li");

    for(let i = 0; i < li.length; i++)
    {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if(txtValue.toUpperCase().indexOf(filter) > -1)
        {
            li[i].style.display = "";
        }
        else
        {
            li[i].style.display = "none";
        }
    }
}