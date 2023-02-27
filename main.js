//se define un tipo de variable
//sintaxis para crear un objeto
// let persona= {
//     //atributos
//     nombre: 'Luisa',
//     apellido: 'Herrera',
//     edad:40,
//     direccion:{
//         ciudad:'Medellin', //esta dentro de otro objeto
//         barrio:'Robledo',
//         coordenadas:{
//             latitud:'12.13',
//             altitud:'21.3213'
//         }
//     }
// }

// console.log(persona) //muestra todos lo que tiene el objeto
// console.log("este es el apellido: "+ persona.apellido)//muestra un atributo especifico



let personas = []

for (let index = 0; index < 2; index++) {
    const element = personas[index];

    let nombre = prompt('Ingrese su nombre: ' )
    let apellido = prompt ('Ingrese su apellido: ')
    let edad = prompt('Ingrese su edad: ' )
    let ciudad = prompt ('Ingrese su ciudad de residencia: ')
    let barrio = prompt ('Ingrese su barrio de residencia: ')

let persona = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    direccion:{
        ciudad: ciudad,
        barrio: barrio
    }
}
personas.unshift(persona)
}


// PARA MOSTRAR LA INFORMACION

console.log('recorrido con for')
for (let index = 0; index < personas.length; index++) { 
    console.log(personas[index]);  
}

// console.table(persona)//con .table muestra los datos en una tabla
// console.log(persona) //muestra todos lo que tiene el objeto

//funciones forEach
//personas.forEach(()=>{})

console.log('recorrido con forEach')
personas.forEach((persona)=>{
    console.log(persona)
})

//personas.forEach(function()=>{})
console.log('recorrido con .map')
personas.map((persona)=>{
    console.log(persona)
})


// //forOf
// for (const persona of personas) {
//     console.log(persona)
// }


