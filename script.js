function submission(){

        preventDefault();
let a = document.getElementById('stufi').value;
let b = document.getElementById('stula').value;
let c = document.getElementById('mofi').value;
let d = document.getElementById('mola').value;
let e = document.getElementById('fafi').value;
let f = document.getElementById('fala').value;
let g = document.getElementById('class').value;
let h = document.getElementById('sec').value;
let i = document.getElementById('roll').value;
let j = document.getElementById('add').value;

document.getElementById('Result').innerHTML=
        ` Student name is ${a} ${b} <br> Mother's name is ${c} ${d} <br> Father's name is ${e} ${f} <br> Class and section is ${g} ${h} ,Roll no. is ${i} <br> Address is ${j}. `;

 }
