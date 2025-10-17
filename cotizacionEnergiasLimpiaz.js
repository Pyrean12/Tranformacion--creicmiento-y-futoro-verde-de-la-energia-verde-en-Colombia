
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

function calularValor(){
    let numero1 = Number(document.getElementById("cantidadPanels").value);
    let numero2 = Number(document.getElementById("precioUnidad").value);
    let resultado = 0;
   
    resultado = numero1 * numero2;

    
    document.getElementById("resulPanel").innerText = resultado;
 
} 