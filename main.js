(function(){
    "use strict"
    
    var coches = document.querySelector('.row')

    var modelo = document.getElementById('inputModelo')
    var marca = document.getElementById('inputMarca')
    var transmicion = document.getElementById('inputTransmision')
    var presupuesto = document.getElementById('inputPresupuesto')
    var buscar = document.getElementById('btnBuscar')

    function llenarFormulario(){    
        if (modelo.value !== "" && marca.value !== "" &&  transmicion.value !== "" && presupuesto.value !== "0") {
            for (var i = 0; i < autos.length; i++){
                var model = parseInt(modelo.value)
                var mark = marca.value
                var trans = transmicion.value.toLowerCase()
                var pres = parseInt(presupuesto.value)
                if (model === autos[i].year && mark === autos[i].make && trans === autos[i].transmision && pres >= (autos[i].price*.2)){
                    var card = document.createElement('div')
                    card.className = 'card shadow cursor-pointer col-sm-4'
                    
                    var cardBody = document.createElement('div')
                    cardBody.className = 'card-body'

                    if (autos[i].make === 'Chevrolet') {
                        var imgs = document.createElement('img')
                        imgs.className = 'card-img-top'
                        imgs.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Chevrolet-logo.png/1024px-Chevrolet-logo.png`
                    } else if (autos[i].make === 'Ford') {
                        var imgs = document.createElement('img')
                        imgs.className = 'card-img-top'
                        imgs.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/1280px-Ford_logo_flat.svg.png`
                    } else if (autos[i].make === 'Nissan') {
                        var imgs = document.createElement('img')
                        imgs.className = 'card-img-top'
                        imgs.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Nissan_2020_logo.svg/800px-Nissan_2020_logo.svg.png`
                    }

                    var name = document.createElement('h1')
                    name.innerText = autos[i].model
                    name.className = 'card-name'

                    var label = document.createElement('div')
                    label.innerText = autos[i].make
                    label.className = 'card-make'

                    var año = document.createElement('div')
                    año.innerText = autos[i].year
                    año.className = 'card-year'

                    console.log(autos[i].model)
                    console.log(autos[i].make)
                    console.log(autos[i].year)

                    for(var j = 0; j < autos[i].colors.length; j++){
                        console.log(autos[i].colors[j])
                        var color = document.createElement('div')
                        color.innerText = autos[i].colors[j]
                        color.className = 'card-color'
                    }

                    var precio = document.createElement('div')
                    precio.innerText = autos[i].price
                    precio.className = 'card-price'

                    console.log(autos[i].price)

                    cardBody.appendChild(imgs)
                    cardBody.appendChild(name)
                    cardBody.appendChild(label)
                    cardBody.appendChild(año)
                    cardBody.appendChild(color)
                    cardBody.appendChild(precio)
                    card.appendChild(cardBody)
                    coches.appendChild(card)
                }
            }
        } else {
            console.log("Algún campo está vacío!")
        }
    }

    buscar.addEventListener('click', function(){
        llenarFormulario()
    })

})() //IIFE Immediatal Invoked Function Expressions 
// Proteje mis variables desde la consola del navegador
