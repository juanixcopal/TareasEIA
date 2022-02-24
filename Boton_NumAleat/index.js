const boton = document.getElementById('btn');
const caja = document.getElementById('caja')

const aleatorio = () =>{
    let num = Math.round(Math.random() * 100)
    caja.innerText = num;
}

boton.addEventListener('click', aleatorio)