//let identificador = new Array<string>
//let identificador: string[] = []

/*let identificador = ['David', 'Joana', 'Daniel']
for(let i = 0; i <= identificador.length-1; i++){
    console.log(identificador[i]);
}*/


let gaveta: string[] = []

gaveta.push('Daniel', 'Dwayne', 'Ricardo', 'David', 'Cezar', 'Patrik')

/*
for(let i of gaveta){
    console.log(i)
}*/

//gaveta.forEach(abacaxi => console.log(abacaxi));

/*
{gaveta.map((item, index)=>(
    console.log(item)
))}*/

console.log("--Removeu o ultimo--")
gaveta.pop(); //remove o ultimo elemento
console.log(gaveta)
console.log("--Removeu o primeiro--")
gaveta.shift() //remove o primeiro
console.log(gaveta)
console.log("--Removeu especificos--")
gaveta.splice(1, 2) //Remove (posição do elemento, 2 elementos)
console.log(gaveta)