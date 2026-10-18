// ===============================================
//  DESTINOS DE LAS PLACAS LYVORA
//  Solo editá este archivo.
// ===============================================

// 1) Tu WhatsApp (código país + área + número, sin +, sin espacios ni guiones)
//    Ejemplo Argentina: 549 + 3755 + 123456  ->  "5493755123456"
var MI_WHATSAPP = "5493741442771";

// 2) Mensaje que llega cuando alguien escanea una placa todavía no vendida
var MENSAJE = "Hola! Vi una placa de reseñas de Google de Lyvora y quiero la mía";

// 2b) Contador de escaneos: tu código de GoatCounter (ej: "lyvoraplacas").
//     Dejalo "" para no contar.
var CONTADOR = "";

// 3) Una línea por placa. Cuando vendas una, pegá entre comillas
//    el link de reseñas de Google del comercio.
//    Si queda "" (vacío), la placa manda a tu WhatsApp.
var PLACAS = {
  // ---- BLANCAS ----
  "01": "",
  "02": "https://search.google.com/local/writereview?placeid=ChIJl2DQFGB7-ZQROER78x_9cp0",
  "03": "",
  "04": "",
  "05": "",
  "06": "",
  "07": "",
  "08": "",
  "09": "",
  "10": "",
  // ---- NEGRAS ----
  "11": "",
  "12": "https://search.google.com/local/writereview?placeid=ChIJ0YpQXL97-ZQRHXR0AG2ZHyY",
  "13": "https://g.page/r/CUsMjX6UcGBnEBM/review",
  "14": "https://g.page/r/CfS4Ch57ZZFoECE/review",
   "15": "https://search.google.com/local/writereview?placeid=ChIJy3SvXzd_-ZQRolduSYinJ3Y",
  "16": "https://g.page/r/CblCzXC_xFN6ECE/review",
  "17": "https://g.page/r/CW0g4kqnPAaHEBM/review",
  "18": "",
  "19": "",
  "20": "https://search.google.com/local/writereview?placeid=ChIJr9UhvNh_-ZQRpgLHqqBLskg",
  // ---- PLACAS DE RESEÑAS (21 al 70) ----
  "21": "", "22": "", "23": "", "24": "", "25": "",
  "26": "", "27": "", "28": "", "29": "", "30": "",
  "31": "", "32": "", "33": "", "34": "", "35": "",
  "36": "", "37": "", "38": "", "39": "", "40": "",
  "41": "", "42": "", "43": "", "44": "", "45": "",
  "46": "", "47": "", "48": "", "49": "", "50": "",
  "51": "", "52": "", "53": "", "54": "", "55": "",
  "56": "", "57": "", "58": "", "59": "", "60": "",
  "61": "", "62": "", "63": "", "64": "", "65": "",
  "66": "", "67": "", "68": "", "69": "", "70": "",
  // Para agregar más placas: copiá la última línea y cambiá el número. Ej: "21": "",
};
