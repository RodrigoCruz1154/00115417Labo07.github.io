window.addEventListener('load',()=>{
    /* Ejercicio 1 */
    var container = document.getElementById("c1");
    container.innerHTML = "¡Hola Mundo!";
    container.style.backgroundColor = "#000000";
    container.style.color = "#1cb723";
    container.style.width = "200px";
    container.style.height = "200px";

    container.innerHTML = "<input type=”text” placeholder=’Escriba su texto’>";

    /*Ejercicio 2*/
    //var containers = document.getElementsByClassName("c2");
    var containers = document.querySelectorAll(".c2"); /*Guarda todos los elementos que contiene esa clase en un arreglo para poder manipularlos con un forEach que busca objeto por objeto*/
    containers.forEach(e =>{
        e.style.backgroundColor = "#009999";
    });
    containers.forEach(d =>{
        d.innerHTML = "<input type='text' placeholder='Escriba su texto'>";
    });
    /*containers.array.forEach(element => {
        containers.style.backgroundColor = "#009999";
    });*/
   /* for(var element in containers)
    {
     console.log(element);   
    }*/

    /*Ejercicio 3*/
    var boton = document.getElementById("btn-click");
    boton.onclick = function(evt){
        alert("Hola mundo");
    }
    var btnCopy = document.getElementById("btnCopy");
    btnCopy.onclick = function(evt){
        let msj = document.getElementById('textMsj').value;
        document.getElementById('showMsj').innerText = msj;
    } 
});