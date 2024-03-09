import { get } from "./getajax.js";
const parametro = window.location.href;
const param = new URL(parametro);
var numeroagencia = param.searchParams.get("agenciaid");
var nombreagencia = document.getElementById("nombreagencia");
var lineasagencia = document.getElementById("agencialineas");
var infoagencia = document.getElementById("datosdelaagencia");
var urlagencia = document.getElementById("paginaagencia");
/*	<pclass="text-center"></p> */
/*	<p class="text-dark text-center fw-bold">Nombre de Agencia</p> */
/*<a class="text-dark text-center" href="agenciainfo.html">Nombre_De_Agencia</a>*/
var crearPaginaAgencia = function(nombre,sitio){
    let nuevoNombre = document.createElement("p");
    let nuevaInfo = document.createElement("a");
    let nuevoContacto = document.createElement("p");
    nuevoNombre.innerText= nombre.replace('?','Ñ');
    nuevoNombre.className = "text-dark text-center fw-bold";
    nuevaInfo.className = "text-center";
    nuevaInfo.href = sitio;
    nuevaInfo.innerText= sitio;
    nombreagencia.appendChild(nuevoNombre);
    infoagencia.appendChild(nuevaInfo);
}
var agencyide = "";
var agencyname = "";
get("https://api.jsonbin.io/b/61786245aa02be1d445f3dc5")
    .done((data) =>{
        for(let i=0;i<data.length;i++)
        {
            if(data[i].agency_id==numeroagencia)
            {
                crearPaginaAgencia(data[i].agency_name,data[i].agency_url);
                agencyide = data[i].agency_id;
            }
        }
    })
    .fail(() => {
        alert("Ocurrió un error al hacer la petición.")
    })

get("https://api.npoint.io/ee52fbe35f0ddca1d002")
    .done((data)=>{
        for(let i=0;i<data.length;i++)
        {
            if(data[i].agency_id==numeroagencia)
            {
                let nuevaLinea= document.createElement("li");
                nuevaLinea.className="text-center";
                let nuevaLineaURL = document.createElement("a");
                nuevaLineaURL.className="text-dark text-center";
                nuevaLineaURL.href = "infolinea.html" + "?lineanombre=" + data[i].route_short_name + "&agenciaide=" + agencyide;
                nuevaLineaURL.innerText= data[i].route_short_name;
                nuevaLineaURL.onmouseover = function(){
                    this.style.textDecoration = "underline";
                }
                nuevaLineaURL.onmouseout = function(){
                    this.style.textDecoration = "none";
                }
                nuevaLinea.appendChild(nuevaLineaURL);
                lineasagencia.appendChild(nuevaLinea);
            }
        }
    })
    .fail(() => {
        alert("Ocurrió un error al hacer la petición.")
    })