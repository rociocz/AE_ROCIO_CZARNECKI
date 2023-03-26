let contenedorTabla1 = document.getElementById("table1")

const contenedorTabla2 = document.getElementById("table2")

const contenedorTabla3 = document.getElementById("table3")



let urlEvents = fetch('https://mindhub-xj03.onrender.com/api/amazing')
.then((response) => response.json())
.then((eventos) => {
    

    const upcommingEvents = eventos.events.filter(events => (events.date > eventos.currentDate));

    const pastEvents = eventos.events.filter(events =>(events.date < eventos.currentDate))

   
    console.log(urlEvents);

    Tabla1(pastEvents);
    
    
    Tabla2(Categorias(upcommingEvents), upcommingEvents)

    
    Tabla3(Categorias(pastEvents), pastEvents);


})

function Categorias(array) {
    let arrayCategoria = array.map(elemento => elemento.category)
    let setCategory = new Set(arrayCategoria.sort((a,b)=>{
        if(a < b){
            return -1
        }
        if(a > b){
            return 1
        }
        return 0
    }))
    return setCategory
}



function largestCapacityEvent(array) {
    let largestCapacity = 0;
    let eventCapacity = 0;
    array.forEach(event => {
        
        if (event.capacity > largestCapacity) {
          largestCapacity = event.capacity;
          eventCapacity = event;
        }
      });
    return eventCapacity;
}

let largestAttendancePercentage = 0; 


function highestAttendance(array) {
    let largestAttendance = 0;
    array.forEach(event => {
        let attendancePercentage = event.assistance/ event.capacity *100;
        if (attendancePercentage > largestAttendancePercentage) {
          largestAttendancePercentage = attendancePercentage;
          largestAttendance = event;
        }
    });
    return largestAttendance
}

let lowestAttendancePercentage = 110; 


function lowestAttendance(array) {
    let largestAttendance = 0;
    array.forEach(event => {
        let attendancePercentage = event.assistance/ event.capacity *100;
        if (attendancePercentage < largestAttendancePercentage) {
          largestAttendancePercentage = attendancePercentage;
          largestAttendance = event;
        }
    });
    return largestAttendance
}



function Tabla1(array) {
    let tablauno = ""
    let arrayPrueba = []
    arrayPrueba.push(largestCapacityEvent(array))
    arrayPrueba.push(highestAttendance(array))
    arrayPrueba.push(lowestAttendance(array))
    tablauno +=
    `<td>`+arrayPrueba[1].name+` (`+ ((arrayPrueba[1].assistance / arrayPrueba[1].capacity * 100).toFixed(2)) +`%)</td>` +
    `<td>`+arrayPrueba[2].name+` (`+ ((arrayPrueba[2].assistance / arrayPrueba[2].capacity * 100).toFixed(2)) +`%)</td>` +
    `<td>`+arrayPrueba[0].name+` (`+ arrayPrueba[0].capacity +`)</td>`
    contenedorTabla1.innerHTML = tablauno
}





function Tabla2(arrayCategorias, arrayObj){
    let tablados = ""
    arrayCategorias.forEach(elemento => {
        let numeroIncome = 0
        let numeroPorcentageAssistance = 0
        let numeroPorcentageCapacity = 0
        let probando = arrayObj.filter(element => element.category == elemento);
        let prueba2 = probando.forEach(elemento=>{
            numeroIncome += elemento.price * elemento.estimate
            numeroPorcentageAssistance += elemento.estimate
            numeroPorcentageCapacity += elemento.capacity
        })
        tablados +=`<tr><td>`+elemento+`</td><td>$ `+numeroIncome+`</td><td>`+((numeroPorcentageAssistance / numeroPorcentageCapacity * 100).toFixed(2))+` %</td></tr>`
    })
    contenedorTabla2.innerHTML = tablados
}




function Tabla3(arrayCategorias, arrayObj){
    let tablatres = ""
    arrayCategorias.forEach(elemento => {
        let numeroIncome = 0
        let numeroPorcentageAssistance = 0
        let numeroPorcentageCapacity = 0
        let probando = arrayObj.filter(element => element.category == elemento);
        let prueba2 = probando.forEach(elemento=>{
            numeroIncome += elemento.price * elemento.assistance
            numeroPorcentageAssistance += elemento.assistance
            numeroPorcentageCapacity += elemento.capacity
        })
        tablatres +=`<tr><td>`+elemento+`</td><td>$ `+numeroIncome+`</td><td>`+((numeroPorcentageAssistance / numeroPorcentageCapacity * 100).toFixed(2))+` %</td></tr>`
    })
    contenedorTabla3.innerHTML = tablatres
}

