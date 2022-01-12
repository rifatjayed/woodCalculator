var button= document.querySelector(".btn");




button.addEventListener('click',  (e) => {
 var chair=Number(document.querySelector("#chair").value);
 
var table=Number(document.querySelector("#table").value);
var bed=Number(document.querySelector("#bed").value); 
var wood= document.querySelector("#wood");  
var results=document.querySelector("#results"); 

var chairCubicFeet= chair*1;
var tableCubicFeet= table*3;
var bedCubicFeet= bed*5;

var total= chairCubicFeet+ tableCubicFeet+ bedCubicFeet;


wood.value= total;


results.style.display= 'block';
e.preventDefault();
});