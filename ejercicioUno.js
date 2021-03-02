/**
MÉNDEZ JULIO - DIVISION G.
Censo Municipal
Para un censo municipal debemos cargar los datos de TODAS las mascotas de nuestra veterinaria:
necesitan saber si es un gato o un perro u "otra cosa",(solo hay esos tres tipos)
el tipo de pelaje (corto, largo , sin pelo),
la edad de la mascota (edad validada);
el nombre (una palabra)
la raza (una palabra)
el peso (peso validado)
el estadoClinico (enfermo,internado o adopcion)
la temperaruta corporal
-------------------------------------------------
y nos piden informar solo si existe
a)El perro mas pesado
b)El porcentaje de enfermos sobre el total de mascotas
c)El nombre de la ultima mascota de tipo "otra cosa"
d)El animal sin pelo con menor temperatura corporal
e)Que tipo de mascota(gato o un perrro u "otra cosa") que tiene el mayor promedio de temperatura corporal
f)Sumando gatos y perros que porcentaje del total de mascotas son?
g)Que estado clinico tiene la menor cantidad de mascotas
H)Cual es el promedio de kilos de peso de tomando todas las mascotas
i)El nombre y raza del gato sin pelos mas liviano
 */
function probarEjercicio()
{
	let tipoMascotaIngresado;
	let tipoPelajeIngresado;
	let edadMascotaIngresado;
	let nombreMascotaIngresado;
	let razaMascotaIngresado;
	let pesoMascotaIngresado;
	let estadoClinicoIngresado;
	let temperaturaCorporalIngresada;  //hasta acá las ingresadas.
	let pesoPerroMasPesado;
	let banderaPrimerPerro=false;
	let porcentajeEnfermos;
	let contadorEnfermos=0;
	let contadorInternados=0;
	let contadorAdopcion=0;
	let contadorTotalMascotas=0;
	let ultimaOtroIngresado;
	let banderaPrimerSinPelo=false;
	let nombreSinPeloConMenorTemperatura;
	let temperaturaSinPeloConMenorTemperatura;
	let contadorPerros=0;
	let contadorGatos=0;
	let ContadorOtras=0;
	let acumuladorTemperaturaPerros;
	let acumuladorTemperaturaGatos;
	let acumuladorTemperaturaOtras;
	let promedioTemperaturaPerros;
	let promedioTemperaturaGatos;
	let promedioTemperaturaOtras;
	let tipoConMayorPromedioTemperatura;
	let porcentajeGatosYPerros;
	let estadoClinicoMasHabitual;
	let acumuladorPesoTotal=0;
	let promedioPesoTotal;
	let banderaPrimerGatoSinPelo=false;
	let nombreGatoSinPelosMasLiviano;
	let pesoGatoSinPelosMasLiviano;
	let razaGatoSinPelosMasLiviano;
	let continuarAgregandoMascotas=true;

	do
	{
		do
		{
		tipoMascotaIngresado=prompt("Ingrese el tipo de mascota: [perro][gato][otro]");
		}
		while (tipoMascotaIngresado!="gato" && tipoMascotaIngresado!="perro" && tipoMascotaIngresado!= "otro");
		do
		{
			tipoPelajeIngresado=prompt("Ingrese el tipo de pelaje de dicha mascota:[corto][largo][sin pelo]");
		}
		while(tipoPelajeIngresado!="corto" && tipoPelajeIngresado != "largo" && tipoPelajeIngresado!="sin pelo");
		do
		{
			edadMascotaIngresado=parseInt(prompt("Ingrese la edad de dicha mascota:"));
		}
		while (isNaN(edadMascotaIngresado)==true || edadMascotaIngresado <0 || edadMascotaIngresado >60);
		do
		{
			nombreMascotaIngresado=prompt("Ingrese el nombre de dicha mascota:");
		}
		while (isNaN(nombreMascotaIngresado)==false || nombreMascotaIngresado=="");
		do
		{
			razaMascotaIngresado=prompt("Ingrese la raza de dicha mascota:");
		}
		while(isNaN(razaMascotaIngresado)==false || razaMascotaIngresado=="");
		do
		{
			pesoMascotaIngresado=parseInt(prompt("Ingrese el peso de dicha mascota:(en kilogramos)"));
		}
		while(isNaN(pesoMascotaIngresado)==true || pesoMascotaIngresado<0 || pesoMascotaIngresado>100);
		do
		{
			estadoClinicoIngresado=prompt("Ingrese el estado clinico de dicha mascota: [enfermo][internado][adopcion]");
		}
		while(estadoClinicoIngresado!="enfermo" && estadoClinicoIngresado!="internado" && estadoClinicoIngresado!="adopcion");
		do
		{
			temperaturaCorporalIngresada=prompt("Ingrese la temperatura de dicha mascota en grados Cº:");
		}
		while(isNaN(temperaturaCorporalIngresada) || temperaturaCorporalIngresada<10 || temperaturaCorporalIngresada>45);
		if (tipoMascotaIngresado=="perro")
		{
			if (banderaPrimerPerro==false)
			{
			pesoPerroMasPesado=pesoMascotaIngresado;
			banderaPrimerPerro=true;
			}
			else if (pesoPerroMasPesado<pesoMascotaIngresado)
			{
				pesoPerroMasPesado=pesoMascotaIngresado;
			}	
		}
		switch (tipoMascotaIngresado)
		{
			case "perro":
				contadorPerros++;
				acumuladorTemperaturaPerros=acumuladorTemperaturaPerros+temperaturaCorporalIngresada;
				break;
			case "gato":
				contadorGatos++;
				acumuladorTemperaturaGatos=acumuladorTemperaturaGatos+temperaturaCorporalIngresada;
				break;
			case "otro":
				ContadorOtras++;
				acumuladorTemperaturaOtras=acumuladorTemperaturaOtras+temperaturaCorporalIngresada;
				ultimaOtroIngresado=nombreMascotaIngresado;
				break;
		}
		switch (estadoClinicoIngresado)
		{
			case "enfermo":
				contadorEnfermos++;
				break;
			case "internado":
				contadorInternados++;
				break;
			case "adopcion":
				contadorAdopcion++;
				break;
		}
		if (tipoPelajeIngresado=="sin pelo")
		{
			if (banderaPrimerSinPelo==false)
			{
				nombreSinPeloConMenorTemperatura=nombreMascotaIngresado;
				temperaturaSinPeloConMenorTemperatura=temperaturaCorporalIngresada;
				banderaPrimerSinPelo=true;	
			}
			else
			{
				if (temperaturaSinPeloConMenorTemperatura>temperaturaCorporalIngresada)
				{
					temperaturaSinPeloConMenorTemperatura=temperaturaCorporalIngresada;
					nombreSinPeloConMenorTemperatura=nombreMascotaIngresado;	
				}
			}
			if (tipoMascotaIngresado=="gato")
			{
				if (banderaPrimerGatoSinPelo==false)
				{
					razaGatoSinPelosMasLiviano=razaMascotaIngresado;
					nombreGatoSinPelosMasLiviano=nombreMascotaIngresado;
					pesoGatoSinPelosMasLiviano=pesoMascotaIngresado;
					banderaPrimerGatoSinPelo=true;
				}
				else if (pesoGatoSinPelosMasLiviano>pesoMascotaIngresado)
				{
				razaGatoSinPelosMasLiviano=razaMascotaIngresado;
				nombreGatoSinPelosMasLiviano=nombreMascotaIngresado;
				pesoGatoSinPelosMasLiviano=pesoMascotaIngresado;	
				}
			}
		}
		contadorTotalMascotas++;
		acumuladorPesoTotal=acumuladorPesoTotal+pesoMascotaIngresado;
		continuarAgregandoMascotas=confirm("¿Desea continuar agregando mascotas?");
	}
	while (continuarAgregandoMascotas==true);
	porcentajeEnfermos=(contadorEnfermos/contadorTotalMascotas)*100;
	promedioTemperaturaPerros=acumuladorTemperaturaPerros/contadorPerros;
	promedioTemperaturaGatos=acumuladorTemperaturaGatos/contadorGatos;
	promedioTemperaturaOtras=acumuladorTemperaturaOtras/ContadorOtras;
	if (promedioTemperaturaPerros>= promedioTemperaturaGatos && promedioTemperaturaPerros>=promedioTemperaturaGatos)
	{
		tipoConMayorPromedioTemperatura="Perros";
	}
	else
	{
		if (promedioTemperaturaGatos>= promedioTemperaturaPerros && promedioTemperaturaGatos >= promedioTemperaturaOtras)
		{
			tipoConMayorPromedioTemperatura="Gatos";	
		}
		else
		{
			tipoConMayorPromedioTemperatura="Otros";
		}
	}
	if (contadorEnfermos>= contadorInternados && contadorEnfermos >= contadorAdopcion)
	{
		estadoClinicoMasHabitual="Enfermos";
	}
	else
	{
		if (contadorInternados>=contadorEnfermos && contadorInternados >= contadorAdopcion)
		{
			estadoClinicoMasHabitual="Internados";	
		}
		else
		{
			estadoClinicoMasHabitual="Adopcion";
		}
	}
	porcentajeGatosYPerros=((contadorGatos+contadorPerros)/contadorTotalMascotas)*100;
	promedioPesoTotal=acumuladorPesoTotal/contadorTotalMascotas;

	if (contadorPerros==0)
	{
		document.write("A)No se ingresaron perritos.<br>");	
	}
	else
	{
		document.write("A)El perro mas pesado pesa: "+pesoPerroMasPesado+"kg.<br>");	
	}
	if (contadorEnfermos==0)
	{
		document.write("B)No hay animales enfermos, hurra! <br>");	
	}
	else
	{
		document.write("B)El porcentaje de mascotas enfermas sobre el total es del "+porcentajeEnfermos+"%.<br>");	
	}
	if (ContadorOtras==0)
	{
		document.write("C) No se ingresaron mascotas raras.<br>");
	}
	else
	{
		document.write("C)El la ultima mascota de tipo *otro* ingresado fue: "+ultimaOtroIngresado+".<br>");
	}
	if (banderaPrimerSinPelo==false)
	{
		document.write("D) No se ingresaron mascotas lampiñas.<br>");
	}
	else
	{
		document.write("D)La mascota sin pelo con menor temperatura fue: "+nombreSinPeloConMenorTemperatura+", con una temperatura de "+temperaturaSinPeloConMenorTemperatura+".<br>");
	}
	document.write("E) El tipo de mascotas con mayor promedio de temperaturas es: "+tipoConMayorPromedioTemperatura+".<br>");
	if (contadorPerros==0 && contadorGatos == 0)
	{
		document.write("F) No se ingresaron ni gatos ni perros, el porcentaje es CERO.<br>");
	}
	else
	{
		document.write("F)El procentaje de gatos y perros sobre el total de mascotas es del: "+porcentajeGatosYPerros+"%.<br>");
	}
	document.write("G) El estado clinico mas habitual es: "+estadoClinicoMasHabitual+".<br>");
	document.write("H) El promedio de peso total de las mascotas ingresadas es de: "+promedioPesoTotal+"Kg.<br>");
	if (banderaPrimerGatoSinPelo==false)
	{
		document.write("I) No se ingresaron gatitos pelados.¡La pucha!<br>");
	}
	else
	{
		document.write("G) El nombre del gato sin pelo mas liviano es: "+nombreGatoSinPelosMasLiviano+", y es de raza "+razaGatoSinPelosMasLiviano+".<br>");
	}
}