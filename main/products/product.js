class Producto {
    constructor(titulo, detalle, precio, stock, imagen) {
        this.titulo = titulo;
        this.detalle = detalle;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
    }
}

const producto1 = new Producto(
    "Camiseta", 
    "Camiseta de algodón 100%", 
    19.99, 
    50, 
    "-----"
);

let Contenido = `
    <h1>Título: ${producto1.titulo}</h1>
    <h3>Detalle: ${producto1.detalle}</h3>
    <h6>Precio: $${producto1.precio}</h6>
    <p>Stock: ${producto1.stock}</p>
    <img ${producto1.imagen}>
`;

let mainProducto = document.getElementById("productoMain");

// Insertar el contenido usando innerHTML
mainProducto.innerHTML = Contenido;