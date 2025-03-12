// AGREGANDO FUNSIONALIDAD RESPONSIVE A LA LISTA DE SKILLS
const github = document.querySelector('.skill-github');
const vscode = document.querySelector('.skill-vscode');
const lista1 = document.getElementById('lista-1');
const lista2 = document.getElementById('lista-2');
const checkbox = document.getElementById('open-menu');
const contenedorLista1 = document.getElementById('contenedorLista1');
const contenedorLista2 = document.getElementById('contenedorLista2');

function moverElementos(){
    const anchoPantalla = window.innerWidth;
    if (anchoPantalla >= 1209) {
        lista1.appendChild(github);
        lista1.appendChild(vscode);
    }else{
        lista2.appendChild(github);
        lista2.appendChild(vscode);
    }
}

document.addEventListener('DOMContentLoaded', moverElementos);
window.addEventListener('resize', moverElementos);

moverElementos();

// AGREGANDO FUNCIONALIDAD AL BOTON PARA CAMBIO DE LISTA

function cambioDeLista(){
    const anchoPantalla = window.innerWidth;
    if(event.target.checked && anchoPantalla >= 548){
        contenedorLista1.style.display = 'none';
        contenedorLista2.style.display = 'block';
    }else {
        contenedorLista1.style.display = 'block';
        contenedorLista2.style.display = 'none';
    }
}

checkbox.addEventListener('change', cambioDeLista);

cambioDeLista({target: checkbox});