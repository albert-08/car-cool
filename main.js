(function(){
    "use strict"
    
    var coches = document.querySelector('.row')
    var modelo = document.getElementById('inputModelo')
    var marca = document.getElementById('inputMarca')
    var transmicion = document.getElementById('inputTransmision')
    var presupuesto = document.getElementById('inputPresupuesto')
    var buscar = document.getElementById('btnBuscar')
    var buscarTodos = document.getElementById('btnTodos')

    function llenarFormulario(){    
        if (modelo.value !== "" && marca.value !== "" &&  transmicion.value !== "" && presupuesto.value !== "") {
            for (var i = 0; i < autos.length; i++){
                var model = parseInt(modelo.value)
                var mark = marca.value.toLowerCase()
                var trans = transmicion.value.toLowerCase()
                var pres = parseInt(presupuesto.value)
                var colores = []
                if (model === autos[i].year && mark === autos[i].make.toLowerCase() && trans === autos[i].transmision && pres >= (autos[i].price*.2)){
                    var card = document.createElement('div')
                    card.style = 'width:12rem;'
                    card.id = 'carCard'

                    if (autos[i].make.toLowerCase() === 'chevrolet') {
                        card.className = 'card text-white bg-secondary m-1 p-1'
                        var imgs = document.createElement('img')
                        imgs.className = 'card-img-top'
                        imgs.src = "./Assets/chevrolet-cartoon.svg"
                        imgs.height = '150'
                    } else if (autos[i].make.toLowerCase() === 'ford') {
                        card.className = 'card text-white bg-primary m-1 p-1'
                        var imgs = document.createElement('img')
                        imgs.className = 'card-img-top'
                        imgs.src = "./Assets/ford-cartoon.svg"
                        imgs.height = '150'
                    } else if (autos[i].make.toLowerCase() === 'nissan') {
                        card.className = 'card text-white bg-danger m-1 p-1'
                        var imgs = document.createElement('img')
                        imgs.className = 'card-img-top'
                        imgs.src = "./Assets/nissan-cartoon.svg"
                        imgs.height = '150'
                    }

                    var name = document.createElement('h5')
                    name.innerHTML = autos[i].model
                    name.className = 'card-name'
                    name.style="text-align:center;font-size:16px;font-weight:bold;"

                    var label = document.createElement('div')
                    label.innerHTML = 'Marca: '+autos[i].make
                    label.className = 'card-make'
                    label.style="font-size:14px;"

                    var año = document.createElement('div')
                    año.innerHTML = 'Modelo: '+autos[i].year
                    año.className = 'card-year'
                    año.style="font-size:14px;"

                    console.log(autos[i].model)
                    console.log(autos[i].make)
                    console.log(autos[i].year)

                    for(var j = 0; j < autos[i].colors.length; j++){
                        colores.push(' '+autos[i].colors[j])
                        console.log(colores)
                        //console.log(autos[i].colors[j])
                        var color = document.createElement('div')
                        color.innerHTML = 'Colores:'+colores
                        color.className = 'card-color'
                        color.style="font-size:14px;"
                    }

                    var precio = document.createElement('div')
                    precio.innerHTML = 'Precio: $'+autos[i].price
                    precio.className = 'card-price'
                    precio.style="font-size:14px;"

                    console.log(autos[i].price)

                    card.appendChild(imgs)
                    card.appendChild(name)
                    card.appendChild(label)
                    card.appendChild(año)
                    card.appendChild(color)
                    card.appendChild(precio)
                    coches.appendChild(card)
                }
            }
        } else {
            $('#modal-form-error').modal('show')
        }
    }

    function desplegarTodos(){
        for (var i = 0; i < autos.length; i++){
            var model = parseInt(modelo.value)
            var mark = marca.value.toLowerCase()
            var trans = transmicion.value.toLowerCase()
            var pres = parseInt(presupuesto.value)
            var colores = []

                var card = document.createElement('div')
                card.style = 'width:12rem;'
                card.id = 'carCard'

                if (autos[i].make.toLowerCase() === 'chevrolet') {
                    card.className = 'card text-white bg-secondary m-1 p-1'
                    var imgs = document.createElement('img')
                    imgs.className = 'card-img-top'
                    imgs.src = "./Assets/chevrolet-cartoon.svg"
                    imgs.height = '150'
                } else if (autos[i].make.toLowerCase() === 'ford') {
                    card.className = 'card text-white bg-primary m-1 p-1'
                    var imgs = document.createElement('img')
                    imgs.className = 'card-img-top'
                    imgs.src = "./Assets/ford-cartoon.svg"
                    imgs.height = '150'
                } else if (autos[i].make.toLowerCase() === 'nissan') {
                    card.className = 'card text-white bg-danger m-1 p-1'
                    var imgs = document.createElement('img')
                    imgs.className = 'card-img-top'
                    imgs.src = "./Assets/nissan-cartoon.svg"
                    imgs.height = '150'
                }

                var name = document.createElement('h5')
                name.innerHTML = autos[i].model
                name.className = 'card-name'
                name.style="text-align:center;font-size:16px;font-weight:bold;"

                var label = document.createElement('div')
                label.innerHTML = 'Marca: '+autos[i].make
                label.className = 'card-make'
                label.style="font-size:14px;"

                var año = document.createElement('div')
                año.innerHTML = 'Modelo: '+autos[i].year
                año.className = 'card-year'
                año.style="font-size:14px;"

                console.log(autos[i].model)
                console.log(autos[i].make)
                console.log(autos[i].year)

                for(var j = 0; j < autos[i].colors.length; j++){
                    colores.push(' '+autos[i].colors[j])
                    console.log(colores)
                    //console.log(autos[i].colors[j])
                    var color = document.createElement('div')
                    color.innerHTML = 'Colores:'+colores
                    color.className = 'card-color'
                    color.style="font-size:14px;"
                }

                var precio = document.createElement('div')
                precio.innerHTML = 'Precio: $'+autos[i].price
                precio.className = 'card-price'
                precio.style="font-size:14px;"

                console.log(autos[i].price)

                card.appendChild(imgs)
                card.appendChild(name)
                card.appendChild(label)
                card.appendChild(año)
                card.appendChild(color)
                card.appendChild(precio)
                coches.appendChild(card)
        }
    }

    buscar.addEventListener('click', function(){
        coches.innerHTML = ''
        llenarFormulario()
    })

    buscarTodos.addEventListener('click', function(){
        coches.innerHTML = ''
        desplegarTodos()
    })

})() //IIFE Immediatal Invoked Function Expressions 
// Proteje mis variables desde la consola del navegador