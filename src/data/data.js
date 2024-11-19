

const products = [
    {
      id: 1,
      name: "Basic",
      description: "Construido con perfiles de aluminio tipo bosh lo que le da al conjunto una gran resistencia. Las columnas centrales son de perfiles 4080 mientras que el resto es de 4040",
      price: 500,
      stock: 15,
      image: "/img/basic.webp",
      category: "cockpits"
    },

    { 
      id: 2,
      name: "PRO",
      description: "A diferencia del basic esta construido enteramente con perfiles 4080. Pensado para bases direct drive de muchos NM y potencia.",
      price: 800,
      stock: 10,
      image: "/img/cockpit-pro.webp",
      category: "cockpits"
    },

    { 
      id: 3,
      name: "GT-PRO",
      description: "Un conjunto robusto, totalmente regulable en altura, distancia y en inclinacion. Podes elegir configurarlo tipo GT o Formula, de alli su nomenclaura.",
      price: 1000,
      stock: 5,
      image: "/img/cockpit-gtpro.webp",
      category: "cockpits"
    },

    {
      id: 4,
      name: "GT1-D",
      description: "Forma circular, estilo D, revestido de alcanthara y 30 cm de diametro. Posee levas magneticas, 2 rotarys y 6 botones funcionales",
      price: 350,
      stock: 10,
      image: "/img/gt1.webp",
      category: "volantes"
    },

    { 
      id: 5,
      name: "BMW-GT",
      description: "Forma circular, revestido de goma de alta calidad y 33 cm de diametro. Posee levas de marchas magneticas, display y 14 botonos funcionales",
      price: 500,
      stock: 10,
      image: "/img/bmw.webp",
      category: "volantes"
    },

    { 
      id: 6 ,
      name: "Formula" ,
      description: "Aro tipo formula, pantalla display de 5 pulgadas. 28 cm de diametro, 9 rotarys y 11 botones. Ademas cuanta con levas de marchas y embreagues magneticas",
      price: 600,
      stock: 5,
      image: "/img/formula.webp",
      category: "volantes"
    },

    {
      id: 7,
      name: "Prima",
      description: "Set de 3 pedales construidos en metal y plastico, recorrido por potenciometros de alta calidad y resistencia configurable",
      price: 100,
      stock: 10,
      image: "/img/prima.webp",
      category: "pedaleras"
    },

    { 
      id: 8,
      name: "Premier",
      description: "Set de 3 pedales construidos en metal, recorrido por sensores hall y celula de carga de hasta 100kg en el freno. Elastomeros intercambiables para configurar la resistencia de cada pedal",
      price: 400,
      stock: 10,
      image: "/img/premier.webp",
      category: "pedaleras"
    },

    { 
      id: 9,
      name: "Forza",
      description: "Set de 3 pedales construidos en Aluminio, recorrido por sensores hall y celula de carga de hasta 150kg en el freno. Elastomeros y resortes intercambiables para configurar la resistencia de cada pedal",
      price: 650,
      stock: 5,
      image: "/img/forza.webp",
      category: "pedaleras"
    }
]

const getProducts = () => {
    return new Promise ((resolve, reject) => {
      setTimeout(()=>{
        resolve(products)
      },2000)
      
    })
  }

export {getProducts}