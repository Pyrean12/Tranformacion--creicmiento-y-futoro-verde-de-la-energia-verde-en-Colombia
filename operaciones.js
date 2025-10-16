function calcularOp()
{
    let numero1 = parseFloat(document.getElementById("num1").value)
    let numero2 = parseFloat(document.getElementById("num2").value)
    let operpacionSeleccionada = document.getElementById("operacion").value
    let resultado = 0

    if(isNaN(numero1) || isNaN(numero2))
    {
        document.getElementById("opeRes").innerText = "Por favor digite datos numericos"
        return;
    }

    switch(operpacionSeleccionada)
    {
        case "sum":
            resultado=numero1+numero2;
            break;
        case"res":
            resultado = numero1 - numero2;
            break;
        case"mul":
            resultado = numero1 * numero2;
            break;
        case"div":
            if(numero2 == 0)
            {
                document.getElementById("opeRes").innerText ="Cambie el numero no puede ser cero"
            }
            else
            {
                resultado = numero1 / numero2
            }
            break;
    }
    document.getElementById("opeRes").innerText= resultado;
}