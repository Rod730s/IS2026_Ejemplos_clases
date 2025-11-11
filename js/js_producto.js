const productos = [
    {
        nombre: "frutsiUva",
        precio: 20,
        img: "https://chedrauimx.vtexassets.com/arquivos/ids/57977669-800-auto?v=638980574420530000&width=800&height=auto&aspect=true"
    },
    {
        nombre: "coca-cola",
        precio: 30,
        img: "https://res.cloudinary.com/riqra/image/upload/v1678811253/sellers/2/a6okdnxxfo6oeslfs6sn.jpg"
    }
];


const contenedor = document.getElementById("contenedor");

productos.forEach(prod =>{
    const card = document.createElement("div");
    card.className="card";

    card.innerHTML = `
            <img src="${prod.img}" alt="${prod.nombre}">
            <h3>${prod.nombre}</h3>
            <p>${prod.precio}</p>
            <button>Agregar</button>
 ` ;
 contenedor.appendChild(card);
})