document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.querySelector('.row');

            // Datos para las tarjetas
            const tarjetasData = [
                { 
                    title: 'Título 1',
                    text: 'Texto para la primera tarjeta.',
                    imgSrc: 'https://http.cat/images/200.jpg',
                    link: './products/product.html'
                },
                { 
                    title: 'Título 2',
                    text: 'Texto para la segunda tarjeta.',
                    imgSrc: 'https://http.cat/images/201.jpg',
                    link: './products/product.html'
                },
                { 
                    title: 'Título 3',
                    text: 'Texto para la tercera tarjeta.',
                    imgSrc: 'https://http.cat/images/202.jpg',
                    link: './products/product.html'
                }
            ];

            // Bucle para crear y agregar tarjetas
            for (let i = 0; i < tarjetasData.length; i++) {
                const data = tarjetasData[i];

                // Crear el elemento tarjeta
                const tarjeta = document.createElement('div');
                tarjeta.className = 'col-sm-6 mb-3 mb-sm-0';
                tarjeta.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${data.title}</h5>
                            <p class="card-text">${data.text}</p>
                            <img src="${data.imgSrc}" class="card-img-top" alt="Imagen de la tarjeta">
                            <a href="${data.link}" class="btn btn-primary">Ver Mas</a>
                        </div>
                    </div>
                `;

                // Agregar la tarjeta al contenedor
                contenedor.appendChild(tarjeta);
            }


    const cards=document.querySelectorAll(".card"); 
    cards[0].addEventListener('click', ()=>{
        console.log("hola0");
    })
    cards[1].addEventListener('click', ()=>{
        console.log("hola1");
    })
    cards[2].addEventListener('click', ()=>{
        console.log("hola2");
    })

});