const link = document.querySelectorAll('a');
const button = document.getElementsByTagName('button');

function showClick() {
      console.log(`Кнопка ${this.textContent} нажата`);    
}

for (let elem of link) {
    elem.addEventListener('click', showClick);
}

for (let el of button) {
    el.addEventListener('click', showClick);
}



