const contenedorCards = document.getElementById('cards-dinamicas');
console.log(contenedorCards);

const input = document.querySelector('input');
console.log(input);

const contenedorCheckBox = document.getElementById('check-box')
console.log(contenedorCheckBox);
    

/**EVENTOS**/

// input.addEventListener('input', () =>{
//     console.log('escribir');
//     let escritura = filtrarPorTexto(data.events, input.value)
//     colocarTarjetas(escritura)
// }) 


// contenedorCheckBox.addEventListener('change', () =>{
//     console.log('cambiar');
//     let arrayFiltrado = filtrarConCheck(data.events)
//     colocarTarjetas(arrayFiltrado)
// })

input.addEventListener('input', unirFunciones) 


contenedorCheckBox.addEventListener('change', unirFunciones)

/**LLAMADAS**/ 

colocarTarjetas (data.events)


crearCheckboxes(data.events)


/**FUNCIONES**/ 

function unirFunciones (){
    let primerFun = filtrarPorTexto(data.events, input.value)
    let segundoFun = filtrarConCheck(primerFun)
    colocarTarjetas(segundoFun)
}


function colocarTarjetas(array){
    if (array.length == 0){
        contenedorCards.innerHTML = '<h2 class="resultado">No hay elementos coincidentes</h2>'
        return
    }
    let cards = ''
    array.map(elemento => {
        cards += `<div class="card" style="width: 18rem;">
        <img src="${elemento.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title" id="titulotarjeta">${elemento.name}</h5>
            <p class="card-text" id="descripciontarjeta">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <div id="precybot">
                <p>${"Price $" + elemento.price}</p>
                <a href="../Detail.html?id=${elemento.id}" class="btn btn-primary">Details</a>
            </div>
        </div>
    </div>`
    });
    contenedorCards.innerHTML = cards
}


function filtrarPorTexto(array, texto){
    let filtrado = array.filter(elemento => elemento.name.toLowerCase().includes(texto.toLowerCase()))
    return filtrado
}

function crearCheckboxes(array){
    let checkboxes = array.map(elemento => elemento.category)
    console.log(checkboxes);
    let setcheckboxes = new Set(checkboxes)
    console.log(setcheckboxes);
    let checkbx = ''
    setcheckboxes.forEach(elemento =>{
        checkbx += `<label class="etiqueta"> ${elemento}
        <input type="checkbox" name="" id="" value="${elemento}">
        </label>`
    })
    contenedorCheckBox.innerHTML = checkbx
}

function filtrarConCheck(array){
    let selector = document.querySelectorAll("input[type='checkbox']")
    // console.log(selector);
    let arrayChecks = Array.from(selector)
    let chequeador = arrayChecks.filter(check => check.checked)
    // console.log(chequeador);
    if(chequeador.length == 0){
        return array
    }
    let categorias = chequeador.map(check => check.value)
    // console.log(categorias);
    let arrayFiltrado = array.filter(elemento => categorias.includes(elemento.category))
    // console.log(arrayFiltrado);
    return arrayFiltrado
}









// for (datos of data.events) {
    
//     stringHtml += 
//         `<div class="card" style="width: 18rem;">
//             <img src="${datos.image}" class="card-img-top" alt="...">
//             <div class="card-body">
//                 <h5 class="card-title">${datos.name}</h5>
//                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <div id="precybot">
//                     <p>${"Price $" + datos.price}</p>
//                     <a href="#" class="btn btn-primary">Details</a>
//                 </div>
//             </div>
//         </div>`
// }

// contenerdorMain.innerHTML = stringHtml
