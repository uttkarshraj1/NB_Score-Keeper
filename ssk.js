var btnone=document.getElementById("one");
var btntwo=document.querySelector("#two");
var head=document.getElementById("push");
var hade=document.getElementById("pop");
var reset=document.getElementById("res");
var h1=document.querySelector("h1");
var p1score=0;
var p2score=0;
var gameover=false;
var winningscore=6;
var numb=document.querySelector("input");
var paragraph=document.querySelector("p span")


btnone.addEventListener("click",function(){
if(!gameover){

	p1score++;

if(p1score===winningscore){
	
	gameover=true;
	push.classList.add("winner");
}
	push.textContent=p1score;
}

});
btntwo.addEventListener("click", function(){

	if(!gameover){

p2score++;
if(p2score===winningscore){
gameover=true;
pop.classList.add("winner");

}
	
	pop.textContent=p2score;
}

});

reset.addEventListener("click",function(){
p1score=0;
p2score=0;
head.textContent=0;
hade.textContent=0;
head.classList.remove("winner");
hade.classList.remove("winner");
gameover=false;

});

numb.addEventListener("change",function(){
	paragraph.textContent=this.value;
	winningscore=Number( this.value);



});




