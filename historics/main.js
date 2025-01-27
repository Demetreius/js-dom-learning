import './style.css';

const app = document.querySelector("#app");

// app.innerHTML  = "<div>salut brother</div>"
const div = document.createElement("div");


const title = document.createElement("h1");
title.innerText = "dynamically added text Demetreius"
div.appendChild(title)
title.className="title-menu";
title.classList.add('title-head', 'title-font', 'title-bg')
title.style.background = '#f9f9f9'
title.style.padding = '1rem';
title.style.borderRadius = '10px';

const input = document.createElement("input")
div.appendChild(input);

// app.appendChild(div);

console.log(div);
console.log({
  parent : div.parentElement,
  contenu: div.innerHTML
})

// console.log({
//   parent: app.parentElement,
//   prevSister: app.previousElementSibling,
//   nextSister: app.nextElementSibling,
//   firstChild: app.firstElementChild,
//   lastChild: app.lastElementChild,
//   children : app.children
// });

