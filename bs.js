let sliderImages = document.querySelectorAll(".k"),
arrowLeft = document.querySelector("#prev"),
arrowRight = document.querySelector("#next");
var sco=document.getElementById('nn');
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


 var cl=setInterval(() => {
    document.getElementById('tt').innerText =t;
    t=t+1;
   
}, 1000);

 
   
   function check()
{
   var h=document.querySelectorAll(".ans");
   var g=document.querySelectorAll(".remark");
   var f=document.querySelectorAll("#checkbutt");
   var abc=document.querySelectorAll(".o img");
   var textarea= document.querySelectorAll(".ans");
   var tect = h[curr].value.toUpperCase().trimEnd();
   

    f[curr].disabled=true;
    bb=bb+1;
    textarea[curr].disabled=true;
   
   if(((tect=='BILL GATES' || tect=='BILL GATE')&& curr==0) || (curr==1 && (tect=='BARAC OBAMA'|| tect=='BARAK OBAMA' || tect=='BARACK OBAMA')) || (curr==2 && tect=='RAMNATHKOVIND' || (tect=='RAM NATH KOVIND' || tect=='RAMNATH KOVIND')) || (curr==3 && (tect=='DALAI LAMA' || tect=='DALAILAMA') )|| (curr==4 && (tect=='abraham lincoln' || tect=='ABRAHAM LINCOLN' || tect=='ABRAHAMLINCON' || tect=='ABRAHAM LINCON') )||(curr==5 && (tect=='RONALDO' || tect=='CRISTIANO RONALDO')))
   {
  
    g[curr].innerText="correct answer";
    sco.innerText=n+10;
    n=n+10;
    var right=document.getElementById("right");
    right.play();
   }
   else
   {
    g[curr].innerText="wrong answer";
    sco.innerText=n-3;
    n=n-3;
    abc[curr].style.transform="scale(.5)";
    var wrong=document.getElementById("wrong");
    wrong.play();
   }

    
}

function sumbit()
{
    var y;
    if(bb<=4)
    y= confirm("do you really want to sumbit without attempting all");

    if(y==true || bb==6)
    {
        document.querySelector(".finalremark").innerText="Well! you completed the game in "+ t+" seconds and your score is "+n ;
        clearTimeout(cl);
    }
    


}

function goback()
{
    window.history.back();
}