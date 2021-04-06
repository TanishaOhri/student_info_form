function submission(){
        window.stop();
let sfn= document.getElementById('stufi').value;
let sln= document.getElementById('stula').value;
let mfn = document.getElementById('mofi').value;
let mln = document.getElementById('mola').value;
let ffn = document.getElementById('fafi').value;
let fln = document.getElementById('fala').value;
let inclass = document.getElementById('class').value;
let sec = document.getElementById('sec').value;
let rn = document.getElementById('roll').value;
let addr = document.getElementById('add').value;

document.getElementById('Result').innerHTML=
        ` Student name is ${sfn} ${sln} <br> Mother's name is ${mfn} ${mln} <br> Father's name is ${ffn} ${fln} <br> Class and section is ${inclass} ${sec} ,Roll no. is ${rn} <br> Address is ${addr}. `;

 }
