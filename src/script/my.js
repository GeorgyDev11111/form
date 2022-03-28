let addBtn = document.querySelector('.addBtn');
let remBtn = document.querySelector('.remBtn')

let html = document.querySelector('.content');

let count = 0;
addBtn.addEventListener('click' , () => {
  event.preventDefault();
  html.insertAdjacentHTML('beforeend', `
  <div class="wrap">
    <input class="inputAddName inputAddName${count}" placeholder="Введите название" type="text">
    <input class="inputAddValue inputAddValue${count}" placeholder="Введите текст" type="text">
  </div>
  `
  );
  count++;
})
remBtn.addEventListener('click' , removeChild);

function removeChild () {
  event.preventDefault();
  document.querySelector('.content').lastElementChild.remove();
}