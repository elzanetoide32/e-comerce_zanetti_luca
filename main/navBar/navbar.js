let categorias= [{
    categoria:"Respuestas informativas ",href:"/main/products/product.html"},{
    categoria:"Respuestas satisfactorias ",href:"/main/products/product.html"},{
    categoria:"Redirecciones ",href:"/main/products/product.html"},{
    categoria:"Errores de los clientes",href:"/main/products/product.html"},{
    categoria:"errores de los servidores ",href:"/main/products/product.html"
}]


let menu=[];

for(let boton of categorias){
    menu.push(`<a href="${boton.href}"> ${boton.categoria}</a>`)
}

document.querySelector('header').innerHTML=menu;