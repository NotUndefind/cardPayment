const form = document.querySelector('form');
const name = document.querySelector('#name');
const number = document.querySelector('#number');
const dateMonth = document.querySelector('#dateMonth');
const dateYear = document.querySelector('#dateYear');
const code = document.querySelector('#code');

const numberCardResult = document.querySelector('.numberCardResult');
const nameCardResult = document.querySelector('.nameCardResult');
const dateCardReslut = document.querySelector('.dateCardReslut');
const codeCvcResult = document.querySelector('.codeCvcResult');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(number.value == "" || number.value.length < 18){
        numberCardResult.innerHTML = "0000 0000 0000 0000"
    }else{
        numberCardResult.innerHTML = number.value;
    }
    nameCardResult.innerHTML = name.value;
    date = dateMonth.value + "/" + dateYear.value
    dateCardReslut.innerHTML = date
    codeCvcResult.innerHTML = code.value;
})