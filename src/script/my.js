let addBtn = document.querySelector('.addBtn');
let remBtn = document.querySelector('.remBtn')

let html = document.querySelector('.content');

let count = 0;
addBtn.addEventListener('click' , () => {
  event.preventDefault();
  if(count % 2  ==  0){
    html.insertAdjacentHTML('beforeend', `
    <div class="wrapInst wrap shadow1">
      <input class="inputAddName inputAddName${count} " placeholder="Введите название" type="text">
      <input class="inputAddValue inputAddValue${count}" placeholder="Введите текст" type="text">
    </div>
    `
    );
  }else{
    html.insertAdjacentHTML('beforeend', `
    <div class="wrapInst wrap shadow2">
      <input class="inputAddName inputAddName${count} " placeholder="Введите название" type="text">
      <input class="inputAddValue inputAddValue${count}" placeholder="Введите текст" type="text">
    </div>
    `
    );
  }

  count++;
})
remBtn.addEventListener('click' , removeChild);

function removeChild () {
  event.preventDefault();
  document.querySelector('.content').lastElementChild.remove();
}
document.querySelector('.title').oninput = () => {
  if(document.querySelector('.title').value.length > 4){
    document.querySelector('.title').classList.add('titleTog');
  }else{
    document.querySelector('.title').classList.remove('titleTog');
  }
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

  if(title.length < 5){
    alert('Заполниет полe: Заголовок')
    
  }else{
    if(category1.checked || category2.checked){
      if(bid1.checked || bid2.checked || bid3.checked){
        alert('ОК 200');
        count = 0;
      }else{
        alert('Заполниет поле: Вид заявки ');
      }
    }else{
      alert('Заполниет поле: Категория ');
    }
  }
});