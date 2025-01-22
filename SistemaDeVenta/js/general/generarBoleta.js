import { getStorage } from "./storagejs.js";

export function generarBoleta(idBoleta) {
  try {
    // Verificar que el id sea un numero y que existan las boletas
    if(Number(idBoleta) === 0) throw "El id no es un numero";
    if(!getStorage("boletas")) throw "No se encontro la boleta";
    // Obtener los datos de la boleta 
    const boleta = getStorage("boletas").filter(boleta => boleta.id === Number(idBoleta))[0];
    if(boleta == undefined) throw "No se encontro la boleta";
    // Crear pdf para la boleta
    const docDefinition = {
      content: [
          // Título de la boleta
          { text: 'BOLETA DE PAGO', style: 'header' },

          // Fecha
          { text: `Fecha ${boleta.fechaventa}`, alignment: 'right' },
          
          // Espacio en blanco
          { text: '\n' },

          // Información del cliente
          { text: `Cliente: ${boleta.dataclient.name}`, style: 'subheader' },
          { text: 'Monto Total: $150.00', style: 'subheader' },

          // Espacio en blanco
          { text: '\n' },

          // Mensaje de agradecimiento
          { text: 'Gracias por su compra!', style: 'footer' },
      ],
    };
    // Generar el PDF
    pdfMake.createPdf(docDefinition).open();
  } catch (err) {
    alert("Ocurrio un problema:"+ err);
  }
  
}