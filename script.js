//fonctionatlité 1 
let footer_element = document.getElementsByTagName("footer")
let iterate = 0
function onfooterclick(){
	console.log("clique")
	iterate++
	console.log("tu as clicker " + iterate + "fois ")
}

//fonctionatlité 2
footer_element[0].addEventListener('click' , onfooterclick , false ) ; 

let hamburger_menu = document.getElementsByClassName("navbar-toggler")[0]
let navbar_test = document.getElementById("navbarHeader")
function hamburger_click(){
	navbar_test.classList.toggle("collapse") 

}

console.log(hamburger_menu.datatoggle)
hamburger_menu.addEventListener('click' , hamburger_click , false ) ; 
//fonctionatlité 3

let card_edit = document.getElementsByClassName("card mb-4 box-shadow")[0]
let button_edit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[0]
function edit_click(){
	card_edit.setAttribute("style","color:red") 

}
button_edit.addEventListener('click' , edit_click , true ) ; 
//fonctionatlité 4

let card_edit_2 = document.getElementsByClassName("card mb-4 box-shadow")[1]
let button_edit_2 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")[1]
function edit_click_2(){
	if (card_edit_2.style.color === 'green'){
		card_edit_2.style.color = '' ;
	}  else {
		card_edit_2.setAttribute("style","color:green") 
	}
}	 
button_edit_2.addEventListener('click' , edit_click_2 , false ) ; 

//fonctionatlité 5


let navbar_nuclear = document.getElementsByClassName("navbar navbar-dark bg-dark box-shadow")[0]
let body_test = document.getElementsByTagName("body")[0]
function nuclear_test(){

		document.styleSheets[0].disabled = true;

}
function nuclear_test_stop(){

		document.styleSheets[0].disabled = false;

}
navbar_nuclear.addEventListener('dblclick' , nuclear_test , false ) ;
body_test.addEventListener('dblclick' , nuclear_test_stop , true ) ;

//fonctionatlité 6.1
let card_view_img = document.getElementsByClassName("card-img-top")[0]
let button_view= document.getElementsByClassName("btn btn-sm btn-success")[0]
let card_text = document.getElementsByClassName("card-text")[0]
function view_fly(){
	card_text.toggleAttribute("hidden")
	if (card_view_img.style.width === '20%'){
		card_view_img.style.width = '' ;
	}else {
		card_view_img.setAttribute("style","width: 20%;") 

	}
}	 
button_view.addEventListener('mouseover' , view_fly, false ) ; 
//fonctionatlité 6.2
let card_view_img_1 = document.getElementsByClassName("card-img-top")[1]
let button_view_1 = document.getElementsByClassName("btn btn-sm btn-success")[1]
let card_text_1 = document.getElementsByClassName("card-text")[1]
function view_fly_1(){
	card_text_1.toggleAttribute("hidden")
	if (card_view_img_1.style.width === '20%'){
		card_view_img_1.style.width = '' ;
	}else {
		card_view_img_1.setAttribute("style","width: 20%;") 

	}
}	 
button_view_1.addEventListener('mouseover' , view_fly_1, false ) ; 
//fonctionatlité 6.3 
let card_view_img_2 = document.getElementsByClassName("card-img-top")[2]
let button_view_2 = document.getElementsByClassName("btn btn-sm btn-success")[2]
let card_text_2 = document.getElementsByClassName("card-text")[2]
function view_fly_2(){
	card_text_2.toggleAttribute("hidden")
	if (card_view_img_2.style.width === '20%'){
		card_view_img_2.style.width = '' ;
	}else {
		card_view_img_2.setAttribute("style","width: 20%;") 

	}
}	 
button_view_2.addEventListener('mouseover' , view_fly_2, false ) ; 
//fonctionatlité 6.4 
let card_view_img_3 = document.getElementsByClassName("card-img-top")[3]
let button_view_3 = document.getElementsByClassName("btn btn-sm btn-success")[3]
let card_text_3 = document.getElementsByClassName("card-text")[3]
function view_fly_3(){
	card_text_3.toggleAttribute("hidden")
	if (card_view_img_3.style.width === '20%'){
		card_view_img_3.style.width = '' ;
	}else {
		card_view_img_3.setAttribute("style","width: 20%;") 

	}
}	 
button_view_3.addEventListener('mouseover' , view_fly_3, false ) ; 
//fonctionatlité 6.5 
let card_view_img_4 = document.getElementsByClassName("card-img-top")[4]
let button_view_4 = document.getElementsByClassName("btn btn-sm btn-success")[4]
let card_text_4 = document.getElementsByClassName("card-text")[4]
function view_fly_4(){
	card_text_4.toggleAttribute("hidden")
	if (card_view_img_4.style.width === '20%'){
		card_view_img_4.style.width = '' ;
	}else {
		card_view_img_4.setAttribute("style","width: 20%;") 

	}
}	 
button_view_4.addEventListener('mouseover' , view_fly_4, false ) ; 
//fonctionatlité 6.6 
let card_view_img_5 = document.getElementsByClassName("card-img-top")[5]
let button_view_5 = document.getElementsByClassName("btn btn-sm btn-success")[5]
let card_text_5 = document.getElementsByClassName("card-text")[5]
function view_fly_5(){
	card_text_5.toggleAttribute("hidden")
	if (card_view_img_5.style.width === '20%'){
		card_view_img_5.style.width = '' ;
	}else {
		card_view_img_5.setAttribute("style","width: 20%;") 

	}
}	 
button_view_5.addEventListener('mouseover' , view_fly_5, false ) ; 
//fonctionatlité 7



let button_fleche = document.getElementsByClassName("btn btn-secondary my-2")[0]


let row = document.getElementsByClassName("row")[1]

function change_place(){
let i = 5 
	let col_6 = document.getElementsByClassName("col-md-4")[i]
	row.insertAdjacentHTML("afterbegin", `${col_6.outerHTML}`);
	col_6.parentNode.removeChild(col_6)
	i = i - 1 
	if (i === 0){
		i = 5
	}
}
button_fleche.addEventListener('click' , change_place , false ) ;


//fonctionatlité 8



let button_fleche_2 = document.getElementsByClassName("btn btn-primary my-2")[0]
function change_place_2(){ 
	let i = 0
	button_fleche_2.removeAttribute("href")
	let col_1 = document.getElementsByClassName("col-md-4")[i]
	row.insertAdjacentHTML("beforeend", `${col_1.outerHTML}`);
	col_1.parentNode.removeChild(col_1)
	i = i + 1 
	if (i === 6){
		i = 0
	}
}
button_fleche_2.addEventListener('click' , change_place_2 , false ) ;
//fonctionatlité 9
let js_and_event = document.getElementsByClassName("navbar-brand d-flex align-items-center")[0]
function fonction_one(){ 
		document.addEventListener('keypress', (event) => {
  const nomTouche = event.key;

 			switch (nomTouche) {

 				case "a":
 					body_test.insertAdjacentHTML("beforebegin", `<div class="col-4">${body_test.outerHTML}`);
 					body_test.parentNode.removeChild(body_test)
 					break;
 				case "y":
 				  body_test.insertAdjacentHTML("beforebegin", `<div class="col-4 offset-md-4" >${body_test.outerHTML}`);
 					body_test.parentNode.removeChild(body_test)
 					break;
 				case "p":
 					body_test.insertAdjacentHTML("beforebegin", `<div class="offset-md-8" >${body_test.outerHTML}`);
 					body_test.parentNode.removeChild(body_test)
 					break;
 				case "b":
 				
 				let find_1 = document.getElementsByClassName("col-4")[0]
 				if (find_1 !== undefined ) {
 				 				find_1.removeAttribute("class","col-4") }

 				let find_2 = document.getElementsByClassName("col-4 offset-md-4")[0]
 			 if (find_2 !== undefined ) {
 				find_2.removeAttribute("class","col-4 offset-md-4") 
 			}
 				let find_3 = document.getElementsByClassName("offset-md-8")[0]
 				if (find_3 !== undefined ) {
 				find_3.removeAttribute("class","offset-md-8") 
 			}
 				let button_ok  = confirm('veuillez actualiser')
 				if (button_ok === true) {
 					window.location.reload()
 				} 
 				break;
 				 	  default:
   	  
  alert(  'touche : ' + nomTouche + 'tu veut casser le pc ? ');

    break;
 			}
});
}
js_and_event.addEventListener('click' , fonction_one , false )