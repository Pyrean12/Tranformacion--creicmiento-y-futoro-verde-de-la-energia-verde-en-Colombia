    const FACTORES = {
        carro: 0.192,
        bus: 0.089,
        metro: 0.041,
        moto: 0.103,
        bicicleta: 0
    };

    document.getElementById('calcularb').addEventListener('click', () => {
        let medio = document.getElementById('medio').value;
        let distancia = parseFloat(document.getElementById('distancia').value);
        let viajes = parseInt(document.getElementById('viajes').value);
        let pasajeros = parseInt(document.getElementById('pasajeros').value) || 1;

        if (isNaN(distancia) || isNaN(viajes) || distancia <= 0 || viajes <= 0) {
        alert("Por favor, completa todos los campos correctamente.");
        return;
        }

        let factor = FACTORES[medio];
        let totalKm = distancia * viajes;
        let co2 = (totalKm * factor) / pasajeros;
        let resultado = co2.toFixed(2);

        let resultadoElemento = document.getElementById('resultadoTransporte');
        resultadoElemento.style.display = 'block';
        resultadoElemento.innerHTML = ` Tu huella de transporte estimada es de <strong>${resultado} kg CO₂e/semana</strong>.`;
        
        let mensaje = "";
        if (co2 < 5) {
            mensaje = " ¡Excelente! Tu huella de carbono es muy baja. Sigue usando medios sostenibles. ";
        } else if (co2 < 20) {
            mensaje = " Tu huella de carbono es moderada. Intenta combinar transporte público o compartir vehículo. ";
        } else {
            mensaje = " Tu huella de carbono es alta. Considera alternativas más ecológicas. ¡Cada kilómetro cuenta! ";
        }

        resultadoElemento.innerHTML += `<br>${mensaje}`;
        });
        
    function calcularAlimentacion() {
    let frecuenciaCarne = parseInt(document.getElementById("frecuenciaCarne").value);
    let productosLocales = parseInt(document.getElementById("productosLocales").value);
    let desperdicio = parseInt(document.getElementById("desperdicio").value);

    let co2 = 0;

    if (frecuenciaCarne == 0) co2 =co2 + 5;
    else if (frecuenciaCarne == 1) co2= co2 + 15;
    else if (frecuenciaCarne == 2) co2= co2 + 25;
    else co2 = co2 + 40;

    if (productosLocales == 1) co2 = co2 - 5;
    else if (productosLocales == 2) co2 = co2 + 0;
    else co2 = co2 + 5;

    if (desperdicio == 1) co2= co2 - 3;
    else if (desperdicio === 2) co2= co2 + 3;
    else co2= co2 + 8;

    let totalCO2 = co2 * 4;

    if(totalCO2 < 0){
        totalCO2 = 0
    }

    document.getElementById("resultadoAlimentacion").innerHTML =
        ` Tu huella alimentaria estimada es de <strong>${totalCO2.toFixed(2)} kg de CO₂ al mes</strong>.`;

    if (totalCO2 < 40) {
        document.getElementById("resultadoAlimentacion").innerHTML += " ¡Excelente! Tu alimentación es bastante sostenible. ";
    } else if (totalCO2 < 80) {
        document.getElementById("resultadoAlimentacion").innerHTML += " Vas por buen camino, podrías mejorar reduciendo el desperdicio o consumiendo comida local. ";
    } else {
        document.getElementById("resultadoAlimentacion").innerHTML += " Considera reducir la carne o el desperdicio de comida para ayudar al planeta. ";
    }
    }

    function calcularEnergia() {
    let electrodomesticos = parseInt(document.getElementById("electrodomesticos").value);
    let bombillos = parseInt(document.getElementById("bombillos").value);
    let tipoEnergia = document.getElementById("tipoEnergia").value;

    let co2 = 0;

    if (electrodomesticos == 1) co2 = co2 + 20;
    else if (electrodomesticos == 2) co2 = co2 + 40;
    else co2 = co2 + 70;

    if (bombillos == 1) co2 = co2 - 10;
    else if (bombillos == 2) co2 = co2 + 0;
    else co2 = co2 + 10;

    if (tipoEnergia == "renovable") co2 = co2 - 10;
    else if (tipoEnergia == "mixta") co2 = co2 + 0;
    else co2 = co2 + 15;

    let totalCO2 = co2;

    document.getElementById("resultadoEnergia").innerHTML =
        ` Tu huella energética estimada es de <strong>${totalCO2.toFixed(2)} kg de CO₂ al mes</strong>.`;

    if (totalCO2 < 30) {
        document.getElementById("resultadoEnergia").innerHTML += " ¡Excelente! Tu consumo energético es muy eficiente. ";
    } else if (totalCO2 < 60) {
        document.getElementById("resultadoEnergia").innerHTML += " Estás en un nivel aceptable, podrías mejorar usando más bombillos LED y desconectando aparatos. ";
    } else {
        document.getElementById("resultadoEnergia").innerHTML += " Tu huella energética es alta. Considera reducir el uso de electrodomésticos o cambiar a energía más limpia. ";
    }
    }
