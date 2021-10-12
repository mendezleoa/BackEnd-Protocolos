var express = require('express');
var router = express.Router();

var casas = [
    {
      "id": 0,
      "nombre": "Faraón",
      "direccion": "Av. 12 Ca. 2"
    },
    {
      "id": 1,
      "nombre": "Monte Real",
      "direccion": "Av. 6 Ca. 5"
    },
    {
      "id": 2,
      "nombre": "Góndola",
      "direccion": "Av. 10 Ca. Las Palmas"
    },
    {
      "id": 3,
      "nombre": "Coliflor",
      "direccion": "Av. 10 Ca. 9"
    },
    {
      "id": 4,
      "nombre": "El Buque",
      "direccion": "Av. 7 Ca. 5"
    }
];
var edificios = [
    {
      "id": 0,
      "nombre": "Redoma",
      "direccion": "Av. 11 Ca. 7"
    },
    {
      "id": 1,
      "nombre": "Bambú",
      "direccion": "Av. 4 Ca. 5"
    }
];
var apartamentos = [
    {
      "id": 0,
      "nombre": "San Francisco",
      "direccion": "Av. 10 Ca. 8"
    },
    {
      "id": 1,
      "nombre": "Limones",
      "direccion": "Av. Las Matas Ca. 4"
    },
    {
      "id": 2,
      "nombre": "Faraón",
      "direccion": "Av. 11 Ca. Libertad"
    }
];
var carreteras = [
    {
      "id": 0,
      "nombre": "Vía Los Teques"
    },
    {
      "id": 1,
      "nombre": "Carretera nacional"
    },
    {
      "id": 2,
      "nombre": "El Monte"
    },
    {
      "id": 3,
      "nombre": "Vía Limones"
    }
];
var puentes = [
    {
      "id": 0, "nombre": "Kel Este"
    },
    {
      "id": 1, "nombre": "Puente Laguna"
    }
];
var parques = [
    {
      "id": 0, "nombre": "Botánico", "direccion": "Av. Chayanne Ca. 5"
    },
    {
      "id": 1, "nombre": "Pequeña Galícia", "direccion": "Av. 8 Ca. 15"
    },
    {
      "id": 2, "nombre": "Orstencia Carrido", "direccion": "Carretera El Monte"
    }
];
var comerciales = [
    {
      "id": 0, "nombre": "Compra Todo", "direccion": "Av. 7 Ca. Las Palmas"
    },
    {
      "id": 1, "nombre": "Barco Estrella", "direccion": "Av. Josefa Carreño Ca. 5"
    }
];

router.get('/', (req, res) => {
  res.send('<h1>Bienvenido</h1');
});

router.get("/construccion", (req, res) => {
  res.send("<h2>Elige el tipo de construccion que busca</h2>")
});


router.get("/construccion/casas", (req, res) => {
  res.json(casas);
});

router.post("/construccion/casas", (req, res) => {
  res.send("La casa agregada es la número: "+req.query.id);
  casas.push(req.body);
});

router.put("/construccion/casas", (req, res) => {
  res.send("La casa remplazada es la número: "+req.query.id);
  casas[req.query.id] = req.body;
});

router.delete("/construccion/casas", (req, res) => {
  res.send("La casa eliminada es la número: "+req.query.id);
  casas.splice(req.query.id, 1);
});


router.get("/construccion/edificios", (req, res) => {
  res.json(edificios);
});

router.post("/construccion/edificios", (req, res) => {
  res.send("El edificio agregado es el número: "+req.query.id);
  edificios.push(req.body);
});

router.put("/construccion/edificios", (req, res) => {
  res.send("El edificio remplazado es el número: "+req.query.id);
  casas[req.query.id] = req.body;
});

router.delete("/construccion/casas", (req, res) => {
  res.send("La casa eliminada es la número: "+req.query.id);
  edificios.splice(req.query.id, 1);
});


router.get("/construccion/apartamentos", (req, res) => {
  res.json(apartamentos);
});

router.post("/construccion/apartamentos", (req, res) => {
  res.send("El apartamento agregado es el número: " + req.query.id);
  apartamentos.push(req.body);
});

router.put("/construccion/apartamentos", (req, res) => {
  res.send("El apartamento remplazado es el número: " + req.query.id);
  apartamentos[req.query.id] = req.body;
});

router.delete("/construccion/apartamentos", (req, res) => {
  res.send("El apartamento eliminado es el número: "+req.query.id);
  apartamentos.splice(req.query.id, 1);
});


router.get("/construccion/carreteras", (req, res) => {
  res.json(carreteras);
});

router.post("/construccion/carreteras", (req, res) => {
  res.send("la carretera agregada es la número: " + req.query.id);
  carreteras.push(req.body);
});

router.put("/construccion/carreteras", (req, res) => {
  res.send("La carretera remplazada es la número: " + req.query.id);
  carreteras[req.query.id] = req.body;
});

router.delete("/construccion/carreteras", (req, res) => {
  res.send("La carretera eliminada es la número: "+req.query.id);
  carreteras.splice(req.query.id, 1);
});


router.get("/construccion/puentes", (req, res) => {
  res.json(puentes);
});

router.post("/construccion/puentes", (req, res) => {
  res.send("El puente agregado es el número: " + req.query.id);
  puentes.push(req.body);
});

router.put("/construccion/puentes", (req, res) => {
  res.send("El puente remplazado es el número: " + req.query.id);
  puentes[req.query.id] = req.body;
});

router.delete("/construccion/puentes", (req, res) => {
  puentes.splice(parseInt(req.query.id), 1);
  res.json(puentes);
});


router.get("/construccion/parques", (req, res) => {
  res.json(parques);
});

router.post("/construccion/parques", (req, res) => {
  res.send("El parque agregado es el número: " + req.query.id);
  parques.push(req.body);
});

router.put("/construccion/parques", (req, res) => {
  res.send("El parque remplazado es el número: " + req.query.id);
  parques[req.query.id] = req.body;
});

router.delete("/construccion/parques", (req, res) => {
  res.send("El parque eliminado es el número: "+req.query.id);
  parques.splice(req.query.id, 1);
});


router.get("/construccion/comerciales", (req, res) => {
  res.json(comerciales);
});

router.post("/construccion/comerciales", (req, res) => {
  res.send("El centro comercial agregado es el número: " + req.query.id);
  comerciales.push(req.body);
});

router.put("/construccion/comerciales", (req, res) => {
  res.send("El centro comercial remplazado es el número: " + req.query.id);
  comerciales[req.query.id] = req.body;
});

router.delete("/construccion/comerciales", (req, res) => {
  res.send("El centro comercial eliminado es el número: "+req.query.id);
  comerciales.splice(req.query.id, 1);
});

module.exports = router;