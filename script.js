const text=[
"Web Developer",
"MCA Student",
"UI Designer",
"Frontend Developer"
];

let i=0;
let j=0;

let current="";

let typing=true;

function type(){

current=text[i];

if(typing){

document.getElementById("typing").innerHTML=current.substring(0,j++);

if(j>current.length){

typing=false;

setTimeout(type,1000);

return;

}

}else{

document.getElementById("typing").innerHTML=current.substring(0,j--);

if(j==0){

typing=true;

i++;

if(i==text.length)
i=0;

}

}

setTimeout(type,120);

}

type();

const mode=document.getElementById("mode");

mode.onclick=function(){

document.body.classList.toggle("light");

if(document.body.classList.contains("light"))

mode.innerHTML='<i class="fa-solid fa-sun"></i>';

else

mode.innerHTML='<i class="fa-solid fa-moon"></i>';

}

const cursor=document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

cursor.style.left=e.clientX+"px";
cursor.style.top=e.clientY+"px";

});