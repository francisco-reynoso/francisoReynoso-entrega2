alert("Bienvenidos a mi perfumeria");
let continuar = prompt("Desea comprar algo").toLocaleLowerCase();

function confirmacion(continuar) {
    verificacion(continuar);
}

function verificacion(continuar) {
    while(continuar !="si" && continuar != "no") {
        continuar = prompt('ingrese "si" o "no" para continuar');
    }
    if (continuar == "si") {
        mostrarProductos();
        comprar(lista);
    }
    else if (continuar == "no"){
        alert("gracias por su visita");
        
    }
}

function comprar(lista) {
    let precio = 0;
    const carrito = [];
    let pedido = prompt("ingrese lo que quiera comprar");
    let mensaje = ("el perfume no fue encontrado");
    for (const producto of lista) {
        if(pedido == producto.nombre) {
            carrito.push(producto.nombre);
            mensaje = ("el producto fue añadido al carrito");
            precio += producto.precio;
            alert(`se añadio ${carrito} y el total es ${precio}`);
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


