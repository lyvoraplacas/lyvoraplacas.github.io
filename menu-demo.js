// ===============================================
//  MENÚ DE EJEMPLO  ->  lyvoraplacas.github.io/menu.html?c=demo
//  Para un cliente nuevo: copiá este archivo como menu-NOMBRE.js
//  y el link queda: menu.html?c=NOMBRE
// ===============================================
var MENU = {
  nombre: "Café del Ejemplo",
  subtitulo: "Café de especialidad · Pastelería casera",
  direccion: "Av. Principal 123",
  horario: "Lun a Sáb · 8 a 20 hs",
  moneda: "$",
  // WhatsApp del comercio (549 + área + número). Dejá "" para ocultar el botón.
  whatsapp: "5493741442771",
  mensaje: "Hola! Vi el menú digital y quiero uno así para mi negocio",

  categorias: [
    { nombre: "☕ Cafetería", items: [
      { n: "Café espresso", p: 2500 },
      { n: "Café con leche", d: "Taza grande", p: 3200 },
      { n: "Capuccino", d: "Con canela o cacao", p: 3800, tag: "Top" },
      { n: "Submarino", p: 3900 }
    ]},
    { nombre: "🥐 Panadería", items: [
      { n: "Medialuna", d: "De manteca o de grasa", p: 1200 },
      { n: "Tostado de jamón y queso", p: 5500 },
      { n: "Chipá x 6", p: 3500 }
    ]},
    { nombre: "🍰 Dulces", items: [
      { n: "Porción de torta del día", p: 4800 },
      { n: "Alfajor de maicena", p: 1800 },
      { n: "Budín casero", d: "Limón o chocolate", p: 3000 }
    ]},
    { nombre: "🥤 Bebidas", items: [
      { n: "Jugo de naranja exprimido", p: 3500 },
      { n: "Agua mineral 500 ml", p: 1800 },
      { n: "Licuado de banana", p: 4200, tag: "Nuevo" }
    ]},
    { nombre: "🍳 Combos", items: [
      { n: "Desayuno clásico", d: "Café con leche + 2 medialunas", p: 5200 },
      { n: "Merienda completa", d: "Infusión + tostado + jugo", p: 11000 }
    ]}
  ]
};
