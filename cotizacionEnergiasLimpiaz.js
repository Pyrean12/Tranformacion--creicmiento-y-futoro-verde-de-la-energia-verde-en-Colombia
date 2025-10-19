
const seleccion = document.getElementById("selector");
const precio = document.getElementById("precioUnidad");


seleccion.addEventListener("change", function()
{
    let valor = seleccion.value;
    if (valor === "1") 
    {
        document.getElementById("precioUnidad").value = "130000";
    }
    else if( valor === "2")
    {
        document.getElementById("precioUnidad").value = "7000";
    }
    else if(valor ==="3")
    {
        document.getElementById("precioUnidad").value = "90000";
    }
});

function calularValor()
{
    let numero1 = Number(document.getElementById("cantidadPanels").value);
    let numero2 = Number(document.getElementById("precioUnidad").value);
    let resultado = 0;
   
    resultado = numero1 * numero2;

    
    document.getElementById("resulPanel").innerText = resultado;
 
} 
const seleccion1 = document.getElementById("selector1");
const precio1 = document.getElementById("precioUnidadEolica");

seleccion1.addEventListener("change", function()
{
    let valor1=seleccion1.value;
    if(valor1 === "eo1")
    {
        document.getElementById("precioUnidadEolica").value = "170000";
    }
    else if(valor1 ==="eo2")
    {
        document.getElementById("precioUnidadEolica").value = "180000";
    }
    else if(valor1 === "eo3")
    {
        document.getElementById("precioUnidadEolica").value = "190000";
    }
});

l
function calularValor1()
{
    let numeroEo1 = Number(document.getElementById("cantidadEolica").value);
    let numeroEo2 = Number(document.getElementById("precioUnidadEolica").value);
    let resultadoEo = 0;
    resultadoEo= numeroEo1 * numeroEo2;
    document.getElementById("resulEolico").innerText = resultadoEo;
    
}