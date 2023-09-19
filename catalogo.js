alert("Bienvenidos a mi perfumeria");
let continuar = prompt("Desea comprar algo").toLowerCase().trim();
const carrito = [];
let total;
let mostrar = false;


function confirmacion(continuar) {
    verificacion(continuar);
}

function verificacion(continuar) {
    while(continuar !="si" && continuar != "no") {
        continuar = prompt('ingrese "si" o "no" para continuar').toLowerCase().trim();
    }
    if (continuar == "si") {
        mostrarProductos("estos son los productos disponibles",lista,total,false);
        comprar(lista);
    }
    else if (continuar == "no" && carrito.length != 0){
        mostrar = true;
        mostrarProductos("estos son los productos en su carrito ",carrito, total,true); 
        alert("gracias por su visita");
    }
    else{
        alert("gracias por su visita");
    }
}

function comprar(lista) {
    let pedido = prompt("para comprar ingrese el nombre del perfume").toLowerCase().trim();
    let mensaje = ("el perfume no fue encontrado");
    const result = lista.find((ele) => ele.nombre == pedido);
    if (result != undefined  ) {
        carrito.push(new Producto(result.nombre, result.marca, result.precio));
        total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
        alert("el perfume fue añadido al carrito");
        continuar = prompt("¿desea comprar mas?").toLowerCase().trim();
        verificacion(continuar);
    }
    else{
        alert ( mensaje);
        continuar = prompt("¿desea intentar con otro perfume?").toLowerCase().trim();
        verificacion(continuar);
    }
}
confirmacion(continuar);






