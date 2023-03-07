let contenerdorMain = document.getElementById('cards-dinamicas');
console.log(contenerdorMain);
let stringHtml = ""


for (datos of data.events) {
    
    stringHtml += 
        `<div class="card" style="width: 18rem;">
            <img src="${datos.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${datos.name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div id="precybot">
                    <p>${"Price $" + datos.price}</p>
                    <a href="#" class="btn btn-primary">Details</a>
                </div>
            </div>
        </div>`
}

contenerdorMain.innerHTML = stringHtml


