//ejemplo de detector de eventos

let form = document.getElementById("form");

form.addEventListener(
  "focus",
function(event){
  console.log("siii");
  event.target.style.background="green";
},
true
);

//Creando evento de cierre o blur evento
form.addEventListener(
  "blur",
  function(event){
    event.target.style.background = "";
  },
  true
);
