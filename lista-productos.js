
const lista = [];
lista.push(new Producto("aqua di gio", "giorgio armani", 95000));
lista.push(new Producto("sauvage", "dior", 105000));
lista.push(new Producto("la nuit del homme", "yves saint laurent", 100000));
lista.push(new Producto("invictus", "paco rabanne", 70500));
lista.push(new Producto("one millon", "paco rabanne", 85000));
lista.push(new Producto("y le parfum", "yves saint laurent", 90000));
lista.push(new Producto("212 vip", "carolina herrera", 90000));
lista.push(new Producto("stronger with you", "giorgio armani", 89000));
lista.push(new Producto("aventus", "cred", 200000));

function mostrarProductos(  ) {
    const misProductos = lista.map((productos) =>  (`${productos.nombre} $${productos.precio}`));
    alert(`esto son los perfumes disponibles:\n${misProductos.join("\n")}`)
}
