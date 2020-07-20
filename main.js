(function(){
    "use strict"
    
    var coches = document.querySelector('.row')

    var modelo = document.getElementById('inputModelo')
    var marca = document.getElementById('inputMarca')
    var transmicion = document.getElementById('inputTransmision')
    var presupuesto = document.getElementById('inputPresupuesto')
    var buscar = document.getElementById('btnBuscar')

    function validarFormulario() {    
        if (modelo.value !== "" && marca.value !== "" &&  transmicion.value !== "" && presupuesto.value !== "0") {
            return true
        } else {
            return false
        }
    }

    function compararFormulario(model, mark, trans, pres) {
        for (var i = 0; i < autos.length; i++){
            if (model === autos[i].year && mark === autos[i].make && trans === autos[i].transmision && pres >= (autos[i].price*.2)){
                admininistrarDatos(autos[i].make, autos[i].model, autos[i].year, autos[i].colors, autos[i].price)
            } 
        }
    }

    function admininistrarDatos(make, model, year, colors, price) {
        var colores = []

        var card = document.createElement('div')
        card.className = 'card shadow cursor-pointer col-sm-4'
                
        var cardBody = document.createElement('div')
        cardBody.className = 'card-body'

        if (make === 'Chevrolet') {
            var imgs = document.createElement('img')
            imgs.className = 'card-img-top'
            imgs.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Chevrolet-logo.png/1024px-Chevrolet-logo.png`
        } else if (make === 'Ford') {
            var imgs = document.createElement('img')
            imgs.className = 'card-img-top'
            imgs.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/1280px-Ford_logo_flat.svg.png`
        } else if (make === 'Nissan') {
            var imgs = document.createElement('img')
            imgs.className = 'card-img-top'
            imgs.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Nissan_2020_logo.svg/800px-Nissan_2020_logo.svg.png`
        }

        var name = document.createElement('h5')
        name.innerHTML = 'Nombre: '+model
        name.className = 'card-name'

        var label = document.createElement('div')
        label.innerHTML = 'Marca: '+make
        label.className = 'card-make'

        var año = document.createElement('div')
        año.innerHTML = 'Modelo: '+year
        año.className = 'card-year'

        for(var j = 0; j < colors.length; j++){
            colores.push(colors[j])
            var color = document.createElement('div')
            color.innerHTML = 'Colores: '+colores
            color.className = 'card-color'
        }

        var precio = document.createElement('div')
        precio.innerHTML = 'Precio: $'+price
        precio.className = 'card-price'

        cardBody.appendChild(imgs)
        cardBody.appendChild(name)
        cardBody.appendChild(label)
        cardBody.appendChild(año)
        cardBody.appendChild(color)
        cardBody.appendChild(precio)
        card.appendChild(cardBody)
        coches.appendChild(card)
    }

    buscar.addEventListener('click', function() {
        var model = parseInt(modelo.value)
        var mark = marca.value
        var trans = transmicion.value.toLowerCase()
        var pres = parseInt(presupuesto.value)

        coches.innerHTML = ''
        if (validarFormulario()) {
            compararFormulario(model, mark, trans, pres)
        } else {
            $('#modal-form-vacio').modal('show')
        }
    })
})() //IIFE Immediatal Invoked Function Expressions 
// Proteje mis variables desde la consola del navegador
