let c = document.getElementById("parag1");
let d = document.getElementsByClassName("parag");

console.log(c)
console.log(d)

c.innerHTML = '<h3> New Text </h3>';
c.innerText = 'Texto novo';
c.textContent = 'Texto mais novo ainda';

c.style = "color: blue";