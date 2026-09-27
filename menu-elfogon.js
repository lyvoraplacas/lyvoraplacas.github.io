// ===============================================
// MENÚ CON VIDEOS -> lyvoraplacas.github.io/menu-video.html?c=elfogon
// Para cambiar un precio: cambiá el número de "p" y hacé Commit.
// "v" = video del plato (subilo al GitHub con ese mismo nombre). Sin "v" = aparece en la carta completa.
// ===============================================
var MENU = {
nombre: "El Fogón",
subtitulo: "Parrilla Criolla",
direccion: "Av. San Martín 450",
horario: "Todos los días · 12 a 15 y 20 a 00 hs",
moneda: "$",
// WhatsApp del comercio (549 + área + número). Dejá "" para ocultar el botón.
whatsapp: "5493741442771",
mensaje: "Hola! Quiero pedir:",

categorias: [
{ nombre: "🥩 Parrilla", items: [
{ n: "Bife de chorizo con papas", d: "400 g a punto, con papas fritas caseras", p: 18500, tag: "El más pedido", v: "elfogon-bife.mp4" },
{ n: "Asado de tira", d: "Con ensalada mixta", p: 16900 },
{ n: "Vacío a la parrilla", d: "Tierno y jugoso, con chimichurri", p: 17500 },
{ n: "Parrillada para 2", d: "Bife, chorizo, morcilla, provoleta y fritas", p: 39900, tag: "Para compartir" }
]},
{ nombre: "🍽️ Minutas", items: [
{ n: "Milanesa napolitana", d: "Jamón, muzzarella gratinada y salsa, con fritas", p: 14900, v: "elfogon-milanesa.mp4" }
]},
{ nombre: "🥟 Entradas", items: [
{ n: "Empanadas de carne x3", d: "Cortadas a cuchillo", p: 6500 },
{ n: "Provoleta a la parrilla", d: "Con orégano y aceite de oliva", p: 7900 },
{ n: "Chorizo criollo", p: 4500 }
]},
{ nombre: "🥤 Bebidas", items: [
{ n: "Jugo de naranja exprimido", d: "Natural, con hielo", p: 3500, v: "elfogon-jugo.mp4" },
{ n: "Gaseosa en lata", d: "354 ml, bien fría", p: 2500, v: "elfogon-lata.mp4" },
{ n: "Limonada con menta", p: 3900 },
{ n: "Copa de Malbec", p: 4500 }
]},
{ nombre: "🍮 Postres", items: [
{ n: "Flan con dulce de leche", p: 4200 },
{ n: "Panqueque con dulce de leche", p: 4500 }
]}
]
};
