const queryString = location.search
let params = new URLSearchParams(queryString)
let id = params.get("id")




const contenedor = document.getElementById('cards-detail')

let urlEvents = fetch('https://mindhub-xj03.onrender.com/api/amazing')
.then((response) => response.json())
.then((elementos) => {
  let arrayElementos = elementos.events
  let detalles = arrayElementos.find(elemento => elemento._id == id) 
    
   let html = ""
html += 
    `<div class="card mb-3" id="details-contenedor">
        <div class="row g-0" id="detailsjs">
            <div class="col-md-12 col-lg-6">
                <img src="${detalles.image}" class="img-fluid img-detail" alt="..." >
            </div>
            <div class="col-md-12 col-lg-6">
                <div class="card-bodydt">
                    <h5 class="card-title" id="seccion1">${detalles.name}</h5>
                    <div id="seccion2">
                        <p><b>Place: </b>${detalles.place}</p>
                        <p><b>Date: </b>${detalles.date}</p>
                    </div>
                    <p class="card-text" id="seccion3"><b>Description:</b><br>${detalles.description}</p>
                    <div id="seccion4">
                        <p><b>Capacity: </b>${detalles.capacity} people.</p>
                        <p><b>Price: </b>$${detalles.price}</p>
                    </div>
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>`

contenedor.innerHTML = html

console.log(urlEvents);

})































// const queryString = location.search
// let params = new URLSearchParams(queryString)
// let id = params.get("id")


// let detalles = data.events.find(elemento => elemento.id == id)

// const contenedor = document.getElementById('cards-detail')


// let html = ""
// html += 
//     `<div class="card mb-3" id="details-contenedor">
//         <div class="row g-0" id="detailsjs">
//             <div class="col-md-12 col-lg-6">
//                 <img src="${detalles.image}" class="img-fluid img-detail" alt="..." >
//             </div>
//             <div class="col-md-12 col-lg-6">
//                 <div class="card-bodydt">
//                     <h5 class="card-title" id="seccion1">${detalles.name}</h5>
//                     <div id="seccion2">
//                         <p><b>Place: </b>${detalles.place}</p>
//                         <p><b>Date: </b>${detalles.date}</p>
//                     </div>
//                     <p class="card-text" id="seccion3"><b>Description:</b><br>${detalles.description}</p>
//                     <div id="seccion4">
//                         <p><b>Capacity: </b>${detalles.capacity} people.</p>
//                         <p><b>Price: </b>$${detalles.price}</p>
//                     </div>
//                     <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//                 </div>
//             </div>
//         </div>
//     </div>`

// contenedor.innerHTML = html




// style="max-width: 540px;"

{/* <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${detalles.image}" class="img-fluid img-detail" alt="..." >
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title" id="seccion1">${detalles.name}</h5>
            <div id="seccion2">
                <p>Place: ${detalles.place}</p>
                <p>Date: ${detalles.date}</p>
             </div>
        <p class="card-text" id="seccion3">${detalles.description}</p>
        <div id="seccion4">
            <p>Capacity: ${detalles.capacity}</p>
            <p>Price: $${detalles.price}</p>
        </div>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div> */}













// 

// colocarTarjetas(data.events)

// function colocarTarjetas(array){
//     let html = ''
//     array.map(parametro => {
//         html += `<div class="card mb-3" style="max-width: 540px;">
//         <div class="row g-0">
//         <div class="col-md-4">
//             <img src="${parametro.image}" class="img-fluid rounded-start" alt="...">
//         </div>
//         <div class="col-md-8">
//             <div class="card-body">
//             <h5 class="card-title">${parametro.name}</h5>
//             <p class="card-text">${parametro.description}</p>
//             <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
//             </div>
//         </div>
//         </div>
//     </div>`
// });
//      contenedor.innerHTML = html
// }










// for (datos of data.events) {
//     if (datos.date >= data.currentDate){

//         stringHtml += 
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
//     }
//     contenerdorMain.innerHTML = stringHtml
// }
