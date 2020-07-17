var marca = 'Chevrolet'
var modelo = 2019
var presupuesto = 19000
var transmicion = 'auto'

for (var i = 0; i < autos.length; i++){
    if (autos[i].make == marca && autos[i].year == modelo && (autos[i].price*.2) <= presupuesto && autos[i].transmision == transmicion){
        console.log(autos[i].model)
        console.log(autos[i].make)
        console.log(autos[i].year)
        for(var j = 0; j < autos[i].colors.length; j++){
            console.log(autos[i].colors[j])
        }
        console.log(autos[i].price)
    }
}
