const form = document.querySelector('form');
const ul = document.querySelector('main ul');
const income = document.querySelector('header ul li span');
const expense = document.querySelector('header ul li:nth-of-type(2) span');
const balance = document.querySelector('header p span');

ul.addEventListener('click', e => {
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove();
        updateHead();
    }
});

const updateHead = () => {
    let pos = 0;
    let neg = 0;
    const lis = document.querySelectorAll('main ul li');
    lis.forEach( li => {
       const price = Number(li.querySelector('span').textContent);
        if(price > 0){
            pos += price;
        } else {
            neg += price;
        }
    });
    income.textContent = `$${pos}`;
    expense.textContent = `$${-neg}`;
    balance.textContent = `$${pos+neg}`;
};

const updateList = () => {
    if(form.expense.value > 0){
        ul.innerHTML += `<li class="green">${form.text.value}<span>+${form.expense.value}</span><button>X</button></li>`;
    } else {
        ul.innerHTML += `<li class="red">${form.text.value}<span>${form.expense.value}</span><button>X</button></li>`;
    }
};

form.addEventListener('submit', e =>{
    e.preventDefault();
    updateList();
    updateHead();
    form.reset();
});