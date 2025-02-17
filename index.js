precio = 100000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let cantidad = 0

cantidadSpan = document.querySelector(".cantidad");
cantidadSpan.innerHTML = cantidad

let valorTotal = 0

valorTotalSpan = document.querySelector(".valorTotal");
valorTotalSpan.innerHTML = valorTotal

document.querySelector("#suma").addEventListener("click",sumarUno)
document.querySelector("#resta").addEventListener("click",restarUno)

function sumarUno(){
    cantidad = cantidad+1;
    valorTotal = precio*cantidad
    document.querySelector(".cantidad").innerHTML = cantidad
    document.querySelector(".valorTotal").innerHTML = valorTotal
}

function restarUno(){
    cantidad = cantidad-1;
    valorTotal = precio*cantidad
    document.querySelector(".cantidad").innerHTML = cantidad
    document.querySelector(".valorTotal").innerHTML = valorTotal
}