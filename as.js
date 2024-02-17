  //object formation
        

  var element=
  [
  {name:'♡♡♡'},
  {name:'♡♡♡'},
  {name:'♤♤♤'},
  {name:'☆☆☆'},
  {name:'◇◇◇'},
  {name:'◇◇◇'},
  {name:'♤♤♤'},
  
  {name:'♤♤♤'},
  {name:'♤♤♤'},
  {name:'☆☆☆'},
  {name:'☆☆☆'},
  {name:'☆☆☆'},
  {name:'♤♤♤'},
  {name:'♤♤♤'},
  {name:'☆☆☆'},
   {name:'☆☆☆'},
  {name:'♡♡♡'},
  {name:'♡♡♡'}
  ];
  //for random arrangement of array
element.sort(() => 0.5 - Math.random());
  
  //declaration and initilisation
let eledisplay=document.querySelector(".box");
let cardchose =[];
let cardchoseid = [];
var n=5;
var s=0;
var stop;
var t=0;
var won= element.length /2;
let current;
// const hi= 100/(18/3);
//board formation with block
function board()
{
for(let i=0;i<element.length;i++)
{
//var r= Math.floor(Math.random() * 10)
const card=
document.createElement("div");
card.setAttribute("data-id",i);

card.innerHTML=element[i].name;
// cardchose.style.display="none";
card.addEventListener("click",fun);        
eledisplay.appendChild(card);
}
}board();



//main algo
function fun()
{

const cardid= this.innerHTML ;
const id=this.getAttribute("data-id");

//change
var auudio=document.getElementById("clicksound");
auudio.play();

cardchose.push(cardid);
cardchoseid.push(id);
// alert(id);
// cardchose.style.display="block";
this.style.background ="white";

if(cardchose.length === 2)
{
setTimeout(checkmatch,400);
}

}

//match checking algo
function checkmatch()
{
current= document.querySelectorAll(".box div");
//for same block choose
if(cardchoseid[0]=== cardchoseid[1])
{
//  n=n-2
current[cardchoseid[0]].style.background  ="black";
current[cardchoseid[1]].style.background  ="black"; 
// document.querySelector("#score").innerHTML=n;

}
//for matching
else if(cardchose[0] === cardchose[1])
{ 
n=n+20;
current[cardchoseid[0]].style.visibility ="hidden ";
current[cardchoseid[1]].style.visibility ="hidden";
//  alert("dudhd");
var right=document.getElementById("right");
right.play();
document.querySelector("#score").innerHTML=n; current[cardchoseid[0]].removeEventListener("click",fun);
current[cardchoseid[1]].removeEventListener("click",fun);
s++;
}
//for mismatch
else
{
n=n-5;
current[cardchoseid[0]].style.background="black";
current[cardchoseid[1]].style.background="black";
var wrongg=document.getElementById("wrong");
wrongg.play();
document.querySelector("#score").innerHTML=n;

}
cardchoseid =[];
cardchose =[];
//for win completed
if(s===won) {  
document.querySelector("#re").innerHTML="Congratulation bro! <br>  ";
var audioo=document.getElementById("winsound");
audioo.play();
document.querySelector("#se").innerHTML= "you completeted in  "+t +"sec and your score is " +n;
var ele= document.querySelector(".circle");
ele.onclick="" ;
document.querySelector(".circle").innerHTML =" ";
}
}

//timer
stop=setInterval(time,1010);
function time()
{
document.querySelector("#timer").innerHTML =t;
t++;

}


//lifeline

function help()
{
n=n-15;
document.querySelector("#score").innerHTML=n;

var audio=document.getElementById("helpsound");
audio.play();

setTimeout(ggg,200);     
}
function ggg()
{
  cardchose =[];
const curren= document.querySelectorAll(".box div");
for(let j=0; j< element.length;j++)
{
curren[j].style.background="white";        
}
//document.querySelector(".circle").innerHTML =" ";

setTimeout(gggg,2000);
}

function gggg()
{
const curren= document.querySelectorAll(".box div");
for(let j=0; j< element.length;j++)
{
curren[j].style.background="black";        
}


}

function restart()
{
const curre= document.querySelectorAll(".box div");
if(confirm("do you want to restart "))
{
s=0;
t=0;
n=0;
element.sort(() => 0.5 - Math.random());
eledisplay.innerHTML="";
board();
for(let k=0;k<element.length;k++)
{
curre[k].style.visibility  ="visible ";
curre[k].style.background="black";
curre[k].addEventListener("click",fun);

}
document.querySelector("#score").innerHTML=n;     
document.querySelector("#re").innerHTML=" ";
document.querySelector("#se").innerHTML= "";
var ele= document.querySelector(".circle");
ele.onclick=help ;
document.querySelector(".circle").innerHTML ="&hearts; ";
element.sort(() => 0.4 - Math.random());
}
}

function goback()
{
  window.history.back();
}
