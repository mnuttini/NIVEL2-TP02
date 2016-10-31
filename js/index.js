var semana=["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

function queDiaEs(){
	var ingresarDia = prompt('¿Qué día es hoy?');
	for (var i=0; i < semana.length; i++){
		if (ingresarDia===semana[i]){
		break;
		}
		else {continue;}
	}	
	switch (ingresarDia.toLowerCase()) { 
   	case "lunes":
   	case "martes":
   	case "miercoles":  
   	case "jueves":
      	   console.log('Hoy es un día hábil ¡No te olvides de ir a trabajar!');
      	    break  
   	case "viernes": 
      	   console.log('Hoy es un día hábil ¡LA SEMANA YA TERMINA!');
      	    break
   	case "sabado": 
      	   console.log('¡Ah! Sábado... Tranqui que es fin de semana :)');
      	    break
   	case "domingo": 
      	   console.log('No te cuelgues que mañana madrugás');
      	    break
   	default: 
      	    alert("¡PILLO! Ese día no existe!"); 
};
}
queDiaEs();