const form = document.querySelector(".eingabe");
const input = document.querySelector(".input-text");
const listeContainer = document.querySelector(".todo-liste");
const p = document.querySelector(".warnung");
const clearBtn = document.querySelector(".clear");
const clearBtnContainer = document.querySelector(".btn-center");

form.addEventListener("submit", addTodo)
clearBtn.addEventListener("click", clear);

function addTodo(e) {
    e.preventDefault();

    if(input.value === "") {
        p.textContent = "Eingabefeld ist leer";
        p.classList.add("show-warnung")
        setTimeout(function(){
            p.classList.remove("show-warnung");
            p.textContent = "";
        }, 1000);
        return; 
    }
    clearBtn.classList.add("show-btn");
    const article = document.createElement("article");
    article.classList.add("list-item");
    article.innerHTML = `<p class="titel">${input.value}</p>
                        <button class="delete-btn">Löschen</button>`;
    listeContainer.appendChild(article);
    setBack();
    const deleteBtn = article.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", deleteTodo);
}

function setBack() {
    input.value = "";
}

function deleteTodo(e) {
    const todo = e.currentTarget.parentElement;
    todo.remove();
    const liste = document.querySelectorAll(".list-item");
    if(!liste.length) {
        clearBtn.classList.remove("show-btn");
    } 
}

function clear() {
    const liste = document.querySelectorAll(".list-item");
    if(liste.length > 0) {
        liste.forEach(todo => {
            listeContainer.removeChild(todo);
        });
    clearBtn.classList.remove("show-btn");
    } 
}
