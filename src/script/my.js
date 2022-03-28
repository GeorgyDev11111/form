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
/* Валидация  */
 let sub = document.querySelector('.sub');

 const category1 = document.getElementById('category1'),
     category2 = document.getElementById('category2'),

     bid1 = document.getElementById('bid1'),
     bid2 = document.getElementById('bid2'),
     bid3 = document.getElementById('bid3');


sub.addEventListener('click' , () => {
  event.preventDefault();
  const title = document.querySelector('.title').value;

  if(title == ''){
    alert('Заполниет полe: Заголовок')
    
  }else{
    if(category1.checked || category2.checked){
      if(bid1.checked || bid2.checked || bid3.checked){
        alert('ОК 200');
      }else{
        alert('Заполниет поле: Вид заявки ');
      }
    }else{
      alert('Заполниет поле: Категория ');
    }
  }
});