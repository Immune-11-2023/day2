// DATOS PRIMITIVOS => 1) BOOLEANS Y CONDICIONALES
const isJumping = false
let marioVelY = 0
// Esta es la sintaxis de un condicional => entre paréntesis tenemos la condición a evaluar
// Si la condición a evaluar se cumple (es verdadera), el bloque dentro de nuestro condidicional se ejecutará
// Un bloque es código encapsulado entre los símbolos: {}
if (isJumping === true) {
  marioVelY += 20
}

// De momento no tenemos inputs ni información que venga del front
// Así que creamos un prompt en el navegador que nos permita acceder a valores del usuario
let age = prompt("How old are u???:") //

if (age < 21) {
  console.error("TE QUEDAS FUERA, PRINGAO") // console.error nos permite mostrar por consola un mensaje estilado como error
} else if (age >= 21) {
  console.log("LET'S JAZZZZZZZ")
} else {
  console.error("ABUELA, ALÉJATE DEL ORDENA")
}

let username = prompt("What is your username?:")
// podemos comprobar si una string está vacía si su length es igual a 0
if (username.length === 0) {
  console.error("BUEN INTENTO, HACKER!")
} else {
  console.log("ENHORABUENA, ESTÁS REGISTRADO!!!!")
}

const favoriteAnimal = prompt("What is your favorite animal?:")
console.log("MI ANIMAL FAVORITO =>", favoriteAnimal)

// Este tipo de condicionales, cuando tratamos con estudios de casos, no son los más convenientes
// Pronto aprenderemos una sintaxis menos repetitiva para hacer esto
if (favoriteAnimal === "perro") {
  console.log("HE ADIVINADO => PERRO")
}
if (favoriteAnimal === "oso panda") {
  console.log("HE ADIVINADO => OSO PANDA")
}
if (favoriteAnimal === "bonobo") {
  console.log("HE ADIVINADO => BONOBO")
}
if (favoriteAnimal === "bonobo") {
  console.log("HE ADIVINADO => PERRO")
} else {
  console.log("NO TENGO NI IDEA TÍO")
}

// PÍLDORA DE CLEAN CODE: nombramos arrays como los elementos que contengan en plural.
const colors = ["red", "blue", "green"]
const bestAnimals = ["beluga", "cat", "koala", "dogs", "bonobos"] // Contenedor => guardar elementos
bestAnimals[3] = "zebras" // Podemos MODIFICAR los contenidos de un array => Los datos NO primitivos son MUTABLES.
/*ERROR => */ bestAnimals = ["beluga", "cat", "koala", "dogs", "bonobos"] // (!!!) Lo que NO podemos hacer es reasignar un nuevo valor a una variable que ha sido declarada con la palabra clave "const".

const favoriteMovies = [
  "Pulp Fiction",
  "Chunking Express",
  "True Detective (I)",
  "La peor persona del mundo",
  "Moonlight",
  "Persona",
  "Parásitos",
  "Blade Runner (I)",
  "Shawshank Redemption",
  "Sharknado",
  "El chico y la garza",
  "Tres Metros sobre el cielo",
  "365dni",
  "Up",
]

console.log("QUIEN ERES ==>", favoriteMovies[favoriteMovies.length - 1]) // Al igual que con las strings, accedemos al último elemento de un array a través del índice: "favoriteMovies.length - 1"

favoriteMovies[favoriteMovies.length] = "Koko" // Esta es una forma muy manual de meter un elemento en un array.
favoriteMovies.push("El diablo viste de Prada") // Existe un método que nos permite hacer esto de forma más sencilla => push siempre empuja un elemento al final del array
console.log(favoriteMovies.at(-1)) // El método "at" nos permite servirnos de la notación de índices negativa como en otros lenguajes de programación para acceder a los últimos elementos de un array

// EJERCICIO PARA ACCEDER A UNA PELI ALEATORIA

// Para generar aleatoriedad nos servimos de Math.random()
const randomIndex = Math.floor(Math.random() * favoriteMovies.length) // Math.random() nos devuelve un número en el rango 0 < 1
// Ejemplo sencillo: ["Black", "White", "Red"] => Generamos un número 0 < 1 | Multiplicamos por 3 | Truncamos dicho número. El número MÁS grande que podemos generar es 2
// Así nos aseguramos movernos siempre en el rango 0 - length - 1
const randomMovie = favoriteMovies[randomIndex]
favoriteMovies.pop() // El método pop() nos permite eliminar el último elemento de un array.
favoriteMovies.unshift("Inside Out") // El método unshift funciona igual que el push pero introduce elementos al comienzo de los arrays.

const names = ["Dan" /*0*/, "Laura" /*1*/, "Paula" /*2*/] // Ejemplo de longitud e índices => empezamos a contar a partir del 0

// Métodos de arrays extras => manipulación de strings y arrays
const email = "danielamo729jeje@hotmail.es"
const bearerToken = "bearer:wifnweqfiwqnfeqw3393994299"
// El método split nos permite dividir una string por un patrón
const words = email.split("@")
// En este caso dividimos una string, el email, a través del patrón "@" => obtendríamos un array con dos elementos: ["danielamo729jeje", "hotmail.es"]
const tokenParts = bearerToken.split(":")
const cleanToken = tokenParts[1]

const userNames = ["Daniel", "Jiménez"] // => "Daniel Jimenez"
console.log("PROBANDOOOOO =>", userNames.join(" ")) // El método join lo que nos permite hacer es unir elementos de un array a través de un patrón
