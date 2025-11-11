let x = 10;
x = 100;
console.log(x);

//Iteraciones

const cielo = document.getElementById("cielo");

for(let i=0; i<5; i++){

    cielo.innerHTML += '🌟';
}

const planetas = ["🌎","🪐","🌕"]

for(const planeta of planetas){
    cielo.innerHTML += planeta;
}

let n=0
while (n<5){
    cielo.innerHTML += "☁️";
    n++
}

let m = 0;
do{
    cielo.innerHTML += "🚀";
    m++
} while (m<4)

const btnEstrella = document.getElementById("btnEstrella");

btnEstrella.addEventListener("click", ()=> {
    cielo.innerHTML += "🌟";
})

const btnPlaneta = document.getElementById("btnPlaneta")

btnPlaneta.addEventListener("dblclick", ()=> {
    
    cielo.innerHTML += "🪐";
})

const inputEmoji=document.getElementById("inputEmoji");

const btnAgregarEmoji = document.getElementById("btnAgregarEmoji")

btnAgregarEmoji.addEventListener("click", ()=> {
    
    var emoji = inputEmoji.value.trim();
    if(emoji) cielo.innerHTML += emoji;
    inputEmoji.value="";
})

inputEmoji.addEventListener("keydown", e =>{
    if(e.key==="Escape") cielo.innerHTML="";
}
)

// componente mejorado

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
})