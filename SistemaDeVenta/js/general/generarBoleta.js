import { getStorage } from "./storagejs.js";

export function generarBoleta(idBoleta) {
  try {
    // Verificar que el id sea un numero y que existan las boletas
    if(Number(idBoleta) === 0) throw "El id no es un numero";
    if(!getStorage("boletas")) throw "No se encontro la boleta";
    // Obtener los datos de la boleta 
    const boleta = getStorage("boletas").filter(boleta => boleta.id === Number(idBoleta))[0];
    if(boleta == undefined) throw "No se encontro la boleta";
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    let fecha = new Date(boleta.fechaventa);
    
    // Crear pdf para la boleta
    const docDefinition = {
      content: [
        // Primera columna
        {
          alignment: 'bigger',
          columns: [
            { //Nombre compañia
              text: 'Nombre Empresa',width: 100,style: 'header'
            },
            {
              type: 'none',
              alignment: 'center',
              ol: [
                'web: portafolio-huayapa.vercel.app/',
                { text: `Vendedor: ${boleta.namevendedor}`, margin: [0, 5], style: "header2" },
              ],width: 250
            },
            {
              style: 'tableExample',
              table: {
                body: [
                  ['RUC: 9832103021'],
                  [{ text: 'Boleta de Venta', style: 'header' },],
                ]
              }
            },
          ]
        },
        {
          text: '',
          margin: [0, 5],
        },
        // Datos del cliente
        {
          style: 'tableExample',
          alignment: 'left',
          table: {
            widths: ['*'],
            body: [
              [{
                type: 'none',
                ol: [
                  { text: `Cliente        : ${boleta.dataclient.name}`, style: "headerleft" },
                  { text: `Dni              : ${boleta.dataclient.dni}`, style: "headerleft" },
                  { text: `Telf             : ${boleta.dataclient.phoneNumber}`, style: "headerleft" },
                  { text: `Direccion   : ${boleta.dataclient.address}`, style: "headerleft" },
                ]
              }],
            ]
          }
        },
        {
          text: '',
          margin: [0, 5],
        },
        { text: `Lista de productos`, margin: [0, 10], style: 'header2' },
        { text: `Fecha: ${fecha.toLocaleTimeString("es-ES", options)}`, margin: [0, 10] },
        {
            table: {
                headerRows: 1,
                widths: ['*', "*" ,'auto', 'auto', 'auto'],
                body: [
                  [
                    { text: 'Producto', fillColor: '#333', color: '#fff' }, // Color oscuro y texto blanco
                    { text: 'Descripción', fillColor: '#333', color: '#fff' }, // Color oscuro y texto blanco
                    { text: 'Cantidad', fillColor: '#333', color: '#fff' },
                    { text: 'Precio', fillColor: '#333', color: '#fff' },
                    { text: 'Subtotal', fillColor: '#333', color: '#fff' }
                  ],
                    ...boleta.datalistprods.map(prod => [
                        prod.product,
                        prod.descript,
                        prod.amount,
                        `S/${prod.price}`,
                        `S/${prod.amount * prod.price}`
                    ])
                ]
            }
        },
        { text: `Monto Total: S/${boleta.totalprecio}`, margin: [0, 10], bold: true, alignment: 'right' },
      ],
      styles: {
          header: {
              fontSize: 18,
              bold: true,
              alignment: 'center',
              margin: [0, 0, 0, 10]
          },
          header2: {
            fontSize: 14,
            bold: true,
            alignment: 'center',
          },
          headerleft: {
            fontSize: 12,
            bold: false,
            alignment: 'left',
          }
      },
      defaultStyle: {
        columnGap: 20
      }
  };
    // Generar el PDF
    pdfMake.createPdf(docDefinition).open();
  } catch (err) {
    alert("Ocurrio un problema:"+ err);
  }
  
}