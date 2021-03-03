/**
 MÉNDEZ JULIO - DIVISION G.
Censo Municipal
Realizar el algoritmo que permita ingresar 5 paises:
el continente (validar entre america , asia , europa ,africa y oceania)
el nombre del país,
cantidad de habitantes en millones entre 1 y 7000 (validar)
el nivel de pobresa entre (pobre, rico , muy rico) en europa no hay paises pobre(validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50)
-------------------------------------------------------------------------------------
a)La cantidad de temperaturas pares.
b)la cantidad de temperaturas impares de europa
c)El nombre del pais con menos habitantes
d)la cantidad de paises que superan los 40 grados.
e)la cantidad de paises de america que tienen menos de 0 grados .
f)el promedio de habitantes entre los paises ingresados .
g)el promedio de habitantes entre los paises que superan los 40 grados
H) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.
i) que continente tiene mas habitantes.
 */
function probarEjercicio()
{
	let continenteIngresado;
	let nombrePaisIngresado;
	let cantidadDeHabitantesIngresados;
	let nivelDePobrezaIngresado;
	let temperaturaMinimaIngresada;
	let contadorTemperaturasParesTotales=0;
	let contadorTemperaturasImparesEuropeas=0;
	let nombrePaisConMenosHabitantes;
	let habitantesPaisConMenosHabitantes;
	let banderaPrimerPaísIngresado=false;
	let acumuladorHabitantes=0;
	let promedioHabitantes;
	let acumuladorHabitantesTropicales=0;
	let promedioHabitantesTropicales;
	let temperaturaMinimaMenor;
	let nombrePaisConTemperaturaMinimaMenor;
	let ContinenteConMasHabitantes;
	let cantidadHabitantesContinenteConMasHabitantes;
	let contadorPaisesSuperanLosCuarentaGrados=0;
	let contadorPaisesAmericanosPolares=0;

	for (let i = 0; i < 5; i++)
	{
		do
		{
			continenteIngresado=prompt("Seleccione un continente: [america][asia][europa][africa][oceania]")
		}
		while(continenteIngresado!="asia" && continenteIngresado!="europa" && continenteIngresado!="america"&&continenteIngresado!="africa"&&continenteIngresado!="oceania");
		do
		{
			nombrePaisIngresado=prompt("ingrese el nombre del país elegido:")
		}
		while(isNaN(nombrePaisIngresado)==false || nombrePaisIngresado=="");
		do
		{
			cantidadDeHabitantesIngresados=parseInt(prompt("Ingrese la cantidad de habitantes de dicho país:(en millones de habitantes)"));
		}
		while(isNaN(cantidadDeHabitantesIngresados)==true || cantidadDeHabitantesIngresados<1 || cantidadDeHabitantesIngresados>7000);
		do
		{
			nivelDePobrezaIngresado=prompt("Ingrese el nivel de pobreza de dichi país:[pobre][rico][muy rico]");
			if (continenteIngresado=="europa" && nivelDePobrezaIngresado=="pobre")
			{
				alert("NO HAY EUROPEOS POBRES, INTENTA OTRA VEZ");	
				nivelDePobrezaIngresado="falacia;"
			}
		}
		while(nivelDePobrezaIngresado!="pobre" && nivelDePobrezaIngresado!="rico" && nivelDePobrezaIngresado!="muy rico");
		do
		{
			temperaturaMinimaIngresada=parseInt(prompt("Ingrese la temperatura minima de dicho país:"))
		}
		while(temperaturaMinimaIngresada<-50 || temperaturaMinimaIngresada>50);
		if (temperaturaMinimaIngresada%2==0)
		{
			contadorTemperaturasParesTotales++;	
		}
		else if (continenteIngresado=="europa")
		{
			contadorTemperaturasImparesEuropeas++;
		}
		if (banderaPrimerPaísIngresado==false)
		{
			habitantesPaisConMenosHabitantes=cantidadDeHabitantesIngresados;
			nombrePaisConMenosHabitantes=nombrePaisIngresado;
			ContinenteConMasHabitantes=continenteIngresado;
			cantidadHabitantesContinenteConMasHabitantes=cantidadDeHabitantesIngresados;
			temperaturaMinimaMenor=temperaturaMinimaIngresada;
			nombrePaisConTemperaturaMinimaMenor=nombrePaisIngresado;
			banderaPrimerPaísIngresado=true;
		}
		else
		{
			if (habitantesPaisConMenosHabitantes>cantidadDeHabitantesIngresados)
			{
				habitantesPaisConMenosHabitantes=cantidadDeHabitantesIngresados;
				nombrePaisConMenosHabitantes=nombrePaisIngresado;	
			}
			if (temperaturaMinimaMenor>temperaturaMinimaIngresada)
			{
				temperaturaMinimaMenor=temperaturaMinimaIngresada;
				nombrePaisConTemperaturaMinimaMenor=nombrePaisIngresado;
			}
			if (cantidadHabitantesContinenteConMasHabitantes< cantidadDeHabitantesIngresados)
			{
				cantidadHabitantesContinenteConMasHabitantes=cantidadDeHabitantesIngresados;
				ContinenteConMasHabitantes=continenteIngresado;
			}
		}
		if (temperaturaMinimaIngresada>40)
		{
			contadorPaisesSuperanLosCuarentaGrados++;
			acumuladorHabitantesTropicales=acumuladorHabitantesTropicales+cantidadDeHabitantesIngresados;
		}
		else if (continenteIngresado=="america" && temperaturaMinimaIngresada<0)
		{
			contadorPaisesAmericanosPolares++;
		}
		acumuladorHabitantes=acumuladorHabitantes+cantidadDeHabitantesIngresados;
	}
	promedioHabitantes=acumuladorHabitantes/5;
	promedioHabitantesTropicales=acumuladorHabitantesTropicales/contadorPaisesSuperanLosCuarentaGrados;

	document.write("A)Se hallaron "+contadorTemperaturasParesTotales+" temperaturas pares.<br>");
	document.write("B)Se hallaron "+contadorTemperaturasImparesEuropeas+" temperaturas impares en Europa.<br>");
	document.write("C)El país con menos habitantes es "+nombrePaisConMenosHabitantes+".<br>");
	document.write("D)La cantidad de paises que superan los 40º es de: "+contadorPaisesSuperanLosCuarentaGrados+".<br>");
	document.write("E)La cantidad de paises Americanos con una temperatura inferior a 0º es de: "+contadorPaisesAmericanosPolares+".<br>");
	document.write("F)El promedio de habitantes para los paises ingresados es de: "+promedioHabitantes+" millones por país.<br>");
	document.write("G)El promedio de habitantes para los paises que superan los 40º ingresados es de: "+promedioHabitantesTropicales+" millones por país.<br>");
	document.write("H)La menor temperatura minima ingresada fue de "+temperaturaMinimaMenor+"º y se registró en "+nombrePaisConTemperaturaMinimaMenor+".<br>");
	document.write("I)El continente con mas habitantes ingresado fue "+ContinenteConMasHabitantes+".<br>");
}