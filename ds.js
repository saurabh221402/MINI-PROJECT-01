



let sliderImages = document.querySelectorAll("#mnf"),
arrowLeft = document.querySelector("#prev"),
arrowRight = document.querySelector("#next");
var bg=document.querySelectorAll("#k");
//var sco=document.getElementById('nn');
current = 0;
var t=0;
let curr=0;
let n=0;
let bb=0;

// Clear all images
function reset() {
for (let i = 0; i < sliderImages.length; i++) {
	sliderImages[i].style.display = "none";

}
}

// Initial slide
function startSlide() {
reset();
sliderImages[0].style.display = "block";
}

// Show previous
function slideLeft() {
reset();
sliderImages[current - 1].style.display = "block";
current--;
 curr=current;
}

// Show next
function slideRight() {
reset();
sliderImages[current + 1].style.display = "block";
current++;
curr=current;
}

// Left arrow click
arrowLeft.addEventListener("click", function () {
if (current === 0) {
	current = sliderImages.length;
}
slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function () {
if (current === sliderImages.length - 1) {
	current = -1;
}
slideRight();
});

startSlide();

function check()
{
   var h=document.querySelectorAll(".answer");
   var g=document.querySelectorAll("#remark");
   var f=document.querySelectorAll("#chek");
   var textarea= document.querySelectorAll(".answer");
   var tect = h[curr].value.toUpperCase().trimEnd();
   var rightt=document.getElementById("rightt");
   var wrongg=document.getElementById("wrongg");

   bb=bb+1;
   bg[curr].style.backgroundColor="gold";
   textarea[curr].disabled=true;
   f[curr].disabled=true;
   if(((tect=='MAHATMA GANDHI' )&& curr==0) || (curr==1 && ( tect=='BARACK OBAMA')) || (curr==2 && tect== 'HRITIK ROSHAN') || (curr==3 && (tect=='LEONARDO DA VINCI') )|| (curr==4 && (tect=='QUEEN ELIZABETH' || tect=='QUEENELIZABETH') )||(curr==5 && (tect=='CRISTIANO RONALDO' || tect=='CRITIANORONALDO')))
   {
    g[curr].innerText="correct answer";
   // sco.innerText=n+10;
    n=n+10;
    
    rightt.play();

   }
   else
   {
    g[curr].innerText="wrong answer";
    wrongg.play();
    sco.innerText=n-5;
    n=n-5;
    
   }
}

var cl= setInterval(() =>{
    t=t+1;
},1000);

function sumbit()
{
    var y;
    if(bb<=5)
    y= confirm("do you really want to sumbit");

    if(y==true || bb<=6)
    {
        document.querySelector(".finalremark").innerText="Well! you completed the game in "+t+"    seconds and your score is "+n ;
        clearTimeout(cl);
    }
}

function goback()
{
    window.history.back();
}