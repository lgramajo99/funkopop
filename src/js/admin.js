import '../css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap'
import Funko from "./funko";

let listaProducto = [];

function agragarProductos() {
    let codigo = document.getElementById("codigo").value,
        nombre = document.getElementById("nombre").value,
        nSerie = document.getElementById("nSerie").value,
        descripcion = document.getElementById("descripcion").value,
        categoria = document.getElementById("categoria").value,
        imagen = document.getElementById("imagen").value

    let Productos = new Funko(codigo, nombre, nSerie, categoria, descripcion, imagen);
}
