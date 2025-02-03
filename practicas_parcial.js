//1. Crear un array vacío para usar en una lista de compras.
let listaCompras = []; //Se crea un array vacío
console.log(listaCompras);

//2. Agregar leche, pan, manzanas a tu lista.
listaCompras.push("leche", "pan", "manzanas"); //Se agrega valores en la lista
console.log(listaCompras);

//3. Actualizar pan con bananas y huevos.
listaCompras.splice(1, 1, "bananas", "huevos"); //Se actualiza pan con bananas y huevos
console.log(listaCompras);

//4. Remover el último elemento del array y mostrar en consola.
let ultimo_elemento = listaCompras.pop(); // Se elimina el último elemento de la lista y se guarda en una variable
console.log(ultimo_elemento); //Se muestra en consola el elemento eliminado
console.log(listaCompras);

//5. Ordenar la lista alfabéticamente.
listaCompras.sort(); //Se ordena la lista alfabeticamente
console.log(listaCompras);

//6. Encuentra y muestra la salida del índice del valor "leche".
let indice_leche = listaCompras.indexOf("leche"); //Se busca el índice del valor "leche" y se guarda en una variable
console.log(indice_leche); //Se muestra en consola el índice del valor "leche"

// 7. Después de bananas, agrega zanahorias y lechuga.
listaCompras.splice(listaCompras.indexOf("bananas") + 1, 0, "zanahorias", "lechuga"); //Se agrega valores a la lista luego del valor "bananas"
console.log(listaCompras);

//8. Crea una nueva lista conteniendo jugo y pop.
let nuevalista = ["jugo", "pop"]; //Se crea nueva lista
console.log(nuevalista);

//9. Combina ambas listas, agrega la nueva lista dos veces al final de la primera lista.
listaCompras = listaCompras.concat(nuevalista, nuevalista); //Se agrega 2 veces la nueva lista a la primera lista
console.log(listaCompras);

//10. Obtener el último valor de índice de pop y mostrar en consola.
let indice_pop = listaCompras.lastIndexOf("pop"); //Se obtiene el indice del último valor "pop" y se guarda en una variable
console.log(indice_pop); //Se muestra en consola el indice de "pop"

//11. Imprime el array resultante en consola.
console.log(listaCompras); //Se muestra en consola el array resultante