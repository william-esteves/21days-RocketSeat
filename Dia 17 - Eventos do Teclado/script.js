window.addEventListener(
  "keydown",
  (event) => {
    let p = document.createElement("p");
    p.textContent = `(${event.key})`;     
    document.getElementById("output").replaceChildren(p);      
  },  
  true
);


