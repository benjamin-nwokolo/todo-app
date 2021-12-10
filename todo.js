let addForm = document.querySelector('.add');
let container= document.querySelector("ul");
let deletee = document.querySelector('.delete');
let li = document.querySelectorAll('.d-flex');
let search = document.querySelector('.search input');

const generateTemplate =  function (todo) {
    
}
addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const todo = addForm.add.value.trim();
 
    // creating element 
    const li = document.createElement('li')
    const span = document.createElement('span');
     const i = document.createElement('i');

    span.textContent= todo;

    // adding classlist
    li.classList = "list-group-item d-flex justify-content-between align-items-center";
    i.classList="far fa-trash-alt delete";

   // appending child
    li.appendChild(span);
    li.appendChild(i);
     
    container.appendChild(li);

});
// deleting items(when deleting items is better use to event delegation)
 container.addEventListener('click', function (e) {
     if(e.target.className === 'far fa-trash-alt delete'){
         const rmove= e.target.parentElement;
         container.removeChild(rmove);
     }
});
// creating a function to filter todos
const filterTodos =  (term) => {

Array.from(container.children)
.filter((todo) => !todo.textContent.toLowerCase().includes(term))
.forEach((todo)=> todo.classList.add('filtered'));

    Array.from(container.children)
    .filter((todo) => todo.textContent.toLowerCase().includes(term))
     .forEach((todo)=> todo.classList.remove('filtered'));
};
//filtering the todos'
search.addEventListener('keyup', ()=> {
    const term = search.value.trim().toLowerCase();
    filterTodos(term);
});