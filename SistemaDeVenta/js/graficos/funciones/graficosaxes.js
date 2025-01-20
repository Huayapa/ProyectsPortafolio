import { getStorage } from "../../general/storagejs.js";

export function ga_prodventas(idcontent, selectid) {
    
    // Mostrar por tiempo hora, mesa y año
    const changeTime = (time) => {
        myChart.config.options.scales.x.time.unit = time;
        myChart.update()
    }
    const $select = document.getElementById(selectid);
    $select.addEventListener("change", e => {
        changeTime($select.value);
    })

    let data = [{x: new Date(), y: 0}];
    // Verificar que exitan la boletas 
    if(getStorage("boletas")) {
        data = getStorage("boletas").map(boleta => {
            return {
                x: new Date(boleta.fechaventa),
                y: boleta.totalprecio
            }
        })
    }
    // Opciones de grafico
    let options = {
        plugins: {
            subtitle: {
                display: true,
                text: '(La fecha aparecerá si hay diferencia "boletas")'
            }
        },
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Fecha de ventas'
                },
                type: "time",
                time: {
                    unit: "hour",
                    displayFormats: {
                        day: 'dd/MMM/yyyy',
                        month: 'MMM yyyy',
                    }
                },
            },
            y: {
                beginAtZero: true,
            }
        }
    }
    //Generar tipo de grafico y sus respectivos valores
    const myChart = new Chart(idcontent, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Ventas',
                data: data, // Los ingresos en el eje Y
                borderColor: 'rgba(75, 192, 192, 1)', // Color de la línea
                backgroundColor: 'rgba(75, 192, 192, 0.2)', // Color de fondo (en líneas)
                borderWidth: 1,
                tension: 0.4 // Para líneas más suaves
            }]
        },
        options: options
    });
}