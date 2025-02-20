import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


window.onload = function () {
  //write your code here
  console.log("Hello Rigo from the console!");

  let who = ['El perro', 'Mi abuela', 'El cartero', 'Mi pájaro'];
  let action = ['se comió', 'destruyo', 'aplastó', 'rompió'];
  let what = ['mi tarea', 'mi teléfono', 'el auto'];
  let when = ['antes de la clase', 'mientras dormía', 'cuando hacía ejercicio', 'durante el almuerzo', 'mientras rezaba'];

  let excuse = `${who[Math.floor(Math.random() * who.length)]}
                             ${action[Math.floor(Math.random() * action.length)]}
                             ${what[Math.floor(Math.random() * what.length)]}
                             ${when[Math.floor(Math.random() * when.length)]}.`;

  document.getElementById("excuse").innerHTML = excuse;
};
