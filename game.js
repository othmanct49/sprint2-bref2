let roi_or = 1 ; 
let who_is_roi ='' ;
let player1_cart = []
let player2_cart = []
export function if_start ( start_button){
 const start_listener =start_button.addEventListener('click' , event => {
   const clicked_start = event.target
   console.log(clicked_start)
   if (!clicked_start) {
    return false ;
   } else {
      start_button.style.display = "none";   
       console.log("true")
     return true ;
   }
 }) 
}
export function isPlayer1Roi (who_is_roi){
const randomm = Math.random()
if (randomm <=  0.50){
      who_is_roi = 'player1' ;
}else{
     who_is_roi = 'player2' ;
}
} 

export function cart_round ( player1_cart , player2_cart ,  who_is_roi){
    let cas_1 =  [ 'Empereur', 'Citoyen','Citoyen','Citoyen','Citoyen' ]
    let cas_2 =  [ 'Esclave', 'Citoyen','Citoyen','Citoyen','Citoyen' ]
    if (roi_or < 5 && who_is_roi == 'player1'  ){
      player1_cart = cas_1
      player2_cart = cas_2
    }

}