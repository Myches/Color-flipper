const colors=['green' ,'skyblue' , 'yellow' , 'brown', 'red' , 'orange' ,'grey'];
const acolors=['blue', 'ash' ,'pink' , 'black' ,'green' ,'seablue' ,'purple']
const btn =document.getElementById('btn');
const header=document.getElementById('head')
const color=document.querySelector('.color');

btn.addEventListener('click', function(){

const num=(Math.random()*6)+1
const randomNum=Math.floor(num)
document.body.style.backgroundColor=colors[randomNum]
color.textContent=colors[randomNum]
header.style.backgroundColor=acolors[randomNum]
})