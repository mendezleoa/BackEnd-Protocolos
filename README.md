# BackEnd-Protocolos
En este programa podemos encontrar un sistema con métodos HTTP dentro del entorno NodeJS, simulando las construcciones de una ciudad. El funcionamiento de este se puede comprobar a travéz de Postman. La forma de utilizarlo es:
* En la dirección '/constriccion' tenemos una lista de direcciones dentro de esta, para ingresar a cada uno de los arreglos dentro del sistema. Las direcciones que deben ingresarse son:
- '/construccion/casas' para el array de casas.
- '/construccion/edificios' para el array de edificios.
- '/construccion/apartamentos' para el array de apartamentos.
- '/construccion/carreteras' para el array de carreteras.
- '/construccion/puentes' para el array de puentes.
- '/construccion/parques' para el array de parques.
- '/construccion/comerciales' para el array de comerciales.
* Luego cada uno de estos les corresponden los cuatro métodos fundamentales de HTTP; estos son: GET, POST, PUT y DELETE. Los vemos en el siguiente ejemplo:
- El método GET se utiliza para pedir el array entero de esta construcción.
- El método POST que requiere un objeto json para ingresarlo dentro del array.
- El método PUT que requiere tanto el objeto como su id (enviar ambos con Postman como '...?id=Num') y remplaza la información en este objeto.
- El método DELETE que elimina el espacio que corresponde al id dentro del array de objetos.
Desarrollado por: Leonardo Méndez CI: 29.694.689
