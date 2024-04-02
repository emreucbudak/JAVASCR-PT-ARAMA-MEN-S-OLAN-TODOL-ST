const form = document.querySelector("#form");
let liste1 = document.querySelector("#list");
let buton4 = document.querySelector("#tumsil");
let todos = [];
let tumkart = document.querySelectorAll(".card");
const form1 = document.querySelector("#form1");
let input2 = document.querySelector("#input2");
liste1.addEventListener("click" , silme);
form.addEventListener("submit" , ekle);
buton4.addEventListener("click" , tumSil);
let kartbeden = document.querySelector(".card-body");
let deger = document.querySelector("#input1");
document.addEventListener("DOMContentLoaded", pageL);
form1.addEventListener("keydown",aramaEkle)
function aramaEkle() {
    let input3 = input2.value;
    ara(input3);
}
function ekle (e) {
    e.preventDefault();
    let deger2 = deger.value;
    ekleUI(deger2);
}
function ekleUI (deger2) {
    const i = document.createElement("i");
    i.className = "fa-solid fa-xmark";
    let div = document.createElement("div");
    div.className = "card-body";
    div.textContent = deger2;
    addStorage(deger2);
    deger.value = "";
    let div1 = document.createElement("div");
    div1.className = "card";
    div.appendChild(i);
    div1.appendChild(div);
    liste1.appendChild(div1);

}
function ekleUI1 (deger2) {
    const i = document.createElement("i");
    i.className = "fa-solid fa-xmark";
    let div = document.createElement("div");
    div.className = "card-body";
    div.textContent = deger2;
    deger.value = "";
    let div1 = document.createElement("div");
    div1.className = "card";
    div.appendChild(i);
    div1.appendChild(div);
    liste1.appendChild(div1);

}
function silme (e) {
    if(e.target.className === "fa-solid fa-xmark") {
        let liste2 = e.target.parentElement.parentElement;
        liste2.remove();
        removeStorage(liste2.textContent);
    }
}
function addStorage(deger2) {
    checkStorage();
    todos.push(deger2);
    localStorage.setItem("todo",JSON.stringify(todos));
}
function checkStorage() {
    if (localStorage.getItem("todo") == null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todo"));
    }
}
function removeStorage (liste2) {
    checkStorage();
    todos.forEach(function(todo,index){
        if(liste2 === todo) {
            todos.splice(index,1);
        }
    })
    localStorage.setItem("todo",JSON.stringify(todos));
}
function tumSil(e) {
    checkStorage();
    todos.forEach(function(todo){
        if(todo != null) {
            todos.splice(todo);
        }
    })
    localStorage.setItem("todo",JSON.stringify(todos));
    let a= 0;
    let b = liste1.children.length;
    while (a<b) {
        let denemem = document.querySelector(".card");
        denemem.remove();
        a++;
    }
}
function pageL() {
    let deger15 = JSON.parse(localStorage.getItem("todo"));
    let a = 0;
    while(a<deger15.length) {
        let deger16 = deger15[a];
        ekleUI1(deger16);
        a++;
    }
}
function ara(a) {
    let b = a.toLowerCase().trim();
    let u = 0;
    while (u< liste1.children.length) {
        if (liste1.children[u].textContent.includes(b)) {
            liste1.children[u].setAttribute("style","display:block;");
            u++;
        }
        else {
            liste1.children[u].setAttribute("style","display:none;");
            u++;
        }
    }
}