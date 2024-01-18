
let list = document.getElementById('list');

list.dataset.num = "22"

let num = parseInt(list.dataset.num);

let content = "";

for (let i = 1; i <= num; i++) {

    content += "<li>" + i + "</li>"
}

list.innerHTML = content