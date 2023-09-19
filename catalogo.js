alert("Bienvenidos a mi perfumeria");
let continuar = prompt("Desea comprar algo").toLocaleLowerCase();
const carrito = [];




function confirmacion(continuar) {
    verificacion(continuar);
}

function verificacion(continuar) {
    while(continuar !="si" && continuar != "no") {
        continuar = prompt('ingrese "si" o "no" para continuar');
    }
    if (continuar == "si") {
        mostrarProductos("estos son los productos disponibles",lista);
        comprar(lista);
    }
    else if (continuar == "no"){
        alert("gracias por su visita");
        mostrarProductos("esto son los productos en su carrito ",carrito); 
        
    }
}

function comprar(lista) {
    let pedido = prompt("ingrese lo que quiera comprar").toLocaleLowerCase();
    let mensaje = ("el perfume no fue encontrado");
    const result = lista.find((ele) => ele.nombre == pedido);
    if (result != undefined  ) {
        carrito.push(new Producto(result.nombre, result.marca, result.precio));
        total = lista.reduce((acumulador) => acumulador + result.precio, 0);
        alert("el perfume fue añadido al carrito");
        continuar = prompt("¿desea comprar algo mas?");
        verificacion(continuar);
    }
    else{
        alert ( mensaje);
        continuar = prompt("¿desea intentar con otro perfume?");
        verificacion(continuar);
    }
}
confirmacion(continuar);



// for (const producto of lista) {
//     if(pedido == producto.nombre) {
//         carrito.push(new Producto(producto.nombre, producto.marca, producto.precio));
//         mensaje = ("el perfume fue añadido al carrito");
//         precio += producto.precio;
//         alert(`se añadio ${producto.nombre} y su precio es ${producto.precio}`);
//         continuar = prompt("¿desea comprar algo mas?");
//         verificacion(continuar);
//     }
// }
// verificacion(continuar);


    
// do{
//     continuar = prompt("¿desea hacer otra compra?").toLocaleLowerCase();
//     if(continuar !="si" && continuar != "no") {
//         continuar = prompt('ingrese "si" o "no"');
//     }
// } while (continuar == "si");       


