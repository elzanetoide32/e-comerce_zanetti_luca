let categorias= [{ 
    categoria:"frutas ",href:"/main/products/product.html"},{
    categoria:"verduras",href:"/main/products/product.html"},{
    categoria:"especias ",href:"/main/products/product.html"   
}]
let array = [];
let menu = `<nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Verduleria la favo</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/main/">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/main">Productos</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Nosotros
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#seccion">Dónde encontrarnos</a></li>
                  <li><hr class="dropdown-divider"></li>
                  <li><a class="dropdown-item" href="#seccion">Soporte</a></li>
                </ul>
              </li>
            </ul>
              <div class="d-flex" role="search">
        <input class="form-control me-2 input" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success boton" type="submit">Search</button>
              </div>
          </div>
        </div>
        <li class="nav-item dropdown">
            <a class="text-white nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </a>
            <ul class="dropdown-menu">
              <div class="nav">
              
              </div>
            </ul>
        </li>
        <div>
        ${localStorage.getItem("userEmail") ? `<button class="btn btn btn-primary boton" type="submit" ${localStorage.getItem("userEmail")}
        <a href="cart.html"><img height="25" src="cart.png"> <b class="colortexto" id="quantity">${localStorage.getItem("quantity")}</b></a>
         onclick="logout()" >Cerrar sesión</button> `
        : `<a href="./login.html"><div class="d-flex" role="iniciar secion">       
        <button class="btn btn-primary boton" type="submit">Iniciar Sesion</button>
              </div></a>`}
        <div>
      </nav>`;
document.querySelector("header").innerHTML = menu;

for(let boton of categorias){
    array.push(`<li class="category dropdown-item">${boton.categoria}</li><li><hr class="dropdown-divider"></li>`)
}
document.querySelector('.nav').innerHTML=array;
function logout(){
  localStorage.clear()
  location.href = "./login.html"
}