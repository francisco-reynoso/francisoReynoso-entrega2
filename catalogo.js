alert("Bienvenidos a mi perfumeria");
let continuar = prompt("Desea comprar algo").toLocaleLowerCase();
const carrito = [];
let precio = 0;


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
        alert(`y el total es: $${precio}`);
        
    }
}

function comprar(lista, carrito) {
    let pedido = prompt("ingrese lo que quiera comprar");
    let mensaje = ("el perfume no fue encontrado");
    for (const producto of lista) {
        if(pedido == producto.nombre) {
            carrito.push(new Producto(producto.nombre, producto.marca, producto.precio));
            mensaje = ("el perfume fue añadido al carrito");
            precio += producto.precio;
            alert(`se añadio ${producto.nombre} y su precio es ${producto.precio}`);
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


