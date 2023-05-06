let span =document.getElementsByTagName("span")[0];
let parent=span.parentNode;
console.log(parent);
console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);
// console.log(parent.children);//veradarcnum e zangvacov
// console.log(span.previousElementSibling);
// console.log(span.nextElementSibling);
let p =span.nextElementSibling.cloneNode()
console.log(p);
let p1 =span.nextElementSibling.cloneNode(true)
console.log(p1
	
	);

// let main =document.getElementsByTagName("main")[0];
// console.log(main.innerHTML);
// console.log(main.innerText);

// setInterval(function() {
// 	document.write("hekllo")
// },2000)
// setInterval(function(a) {
// 	document.write(10+a)
// },2000, 5)

// let c = setInterval(function(a) {
// 	document.write(10+a);
// 	clearInterval(c);
// },2000,5)

// setTimeout(function(a) {
// 	console.log("barev")
// },2000);

// var x = 10;
// var interval = 1000;

// for (var i = 0; i < x; i++) {
//     setTimeout(function () {
//         console.log(11)
//     }, i * interval)
// }
// let a= setInterval(function() {


// let div1=document.getElementById("div1")
//  setTimeout(function() {
// 	div1.style.backgroundColor="red";
// 	div3.style.backgroundColor="grey"
// },1000)




// let div2 =document.getElementById("div2")
//  setTimeout(function() {
//  	div1.style.backgroundColor="grey"
// 	div2.style.backgroundColor="orange"
// 	// 
// },2000)


//  let div3 =document.getElementById("div3")
//  setTimeout(function() {
//  	div2.style.backgroundColor="grey"
// 	div3.style.backgroundColor="green"
// },3000)

 

// },3000);


// let btn=document.getElementById("btn");
// btn.addEventListener("click", function(){
// 	alert("hello");
// });

// function sum (x) {
// 	if (x !== 0) { 
// 		return (x + sum(x - 1));
// 	}else { 
	
//     return x
	
// }
// }
//    console.log(sum(150));
 