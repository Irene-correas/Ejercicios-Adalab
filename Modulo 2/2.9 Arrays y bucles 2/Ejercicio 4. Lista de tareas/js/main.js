
'use strict';

const tasks = [
  {
    name: 'Recoger setas en el campo',
    completed: true
  },

  {
    name: 'Comprar pilas',
    completed: true
  },

  {
    name: 'Poner una lavadora de blancos',
    completed: true
  },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false
  }
];
//Mostrar cuántas tareas hay

const container = document.querySelector('.container');
container.innerHTML += `<p>Hay ${tasks.length} tareas</p>`;

//Pintar todas las tareas en la pantalla, tachar las ya realizadas
container.innerHTML += `<ul class="list"></ul>`;
const list = document.querySelector('.list');

for (let i = 0; i < tasks.length; i++) {
  list.innerHTML += `<li>${tasks[i].name}</li>`;
  let lastItem = list.lastChild

  if (tasks[i].completed === true) {
    lastItem.classList.add('check'); //tachar las ya realizadas

    const complete = `<input type="checkbox" checked class="checked"/>`; //añadir checkbox 
    lastItem.innerHTML += complete;
  } else {
    const uncomplete = `<input type="checkbox" class="unchecked"/>`;//añadir checkbox
    lastItem.innerHTML += uncomplete;
  }
}