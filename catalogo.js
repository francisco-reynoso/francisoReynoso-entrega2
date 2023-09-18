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
        comprar(lista,carrito);
    }
    else if (continuar == "no"){
        alert("gracias por su visita");
        mostrarProductos("esto son los productos en su carrito ",carrito);
        
    }
}

function comprar(lista, carrito) {
    let precio = 0;
    let pedido = prompt("ingrese lo que quiera comprar");
    let mensaje = ("el perfume no fue encontrado");
    for (const producto of lista) {
        if(pedido == producto.nombre) {
            carrito.shift(producto.nombre);
            mensaje = ("el perfume fue añadido al carrito");
            precio += producto.precio;
            alert(`se añadio ${producto.nombre} y el total es ${precio}`);
            continuar = prompt("¿desea comprar algo mas?");
            verificacion(continuar);
        }
    }
   
    alert(mensaje);  
}
confirmacion(continuar);




    
// do{
//     continuar = prompt("¿desea hacer otra compra?").toLocaleLowerCase();
//     if(continuar !="si" && continuar != "no") {
//         continuar = prompt('ingrese "si" o "no"');
//     }
// } while (continuar == "si");       


