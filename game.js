import{select_items} from './storage.js'
export function if_start ( start_button , dom){
 const start_listener =start_button.addEventListener('click' , event => {
   const clicked_start = event.target
   console.log(clicked_start)
   if (!clicked_start) {
    return false ;
   } else {
      start_button.style.display = "none";
      dom.hidden = false ,
       console.log("true")
     return true ;
   }
 }) 
}
 export function nwe_data_game (){
    let data_game = {
        round : 1 ,
        playerScor : 0 ,
        computerScor : 0 ,
        playerCard :  [ 'Empereur' , 'Citoyen' , 'Citoyen' , 'Citoyen' , 'Citoyen'] , 
        pcCard :  [ 'Esclave' , 'Citoyen' , 'Citoyen' , 'Citoyen' , 'Citoyen'] , 
        playerCamp: 'Empereur'

    }
    return data_game ; 
}
/////// chose profile
export function  chose_profile (domselect , domadd){
 const listener = domselect.addEventListener ('click' , event => {
  let profile = event.target.closest('[data-select]')
  let get_name_profile = profile.dataset.select 
    const data_profile = select_items(get_name_profile)

    

 })
}
//////////// game rules
export const duel =(plaeyr_cart , pc_cart ) =>{
  if ( plaeyr_cart === 'Empereur'  && pc_cart === 'Citoyen'){
    return 'victoire'
  } 
   if ( plaeyr_cart === 'Esclave'  && pc_cart === 'Empereur' ){
    return 'victoire'
  }  
  if ( plaeyr_cart === 'Citoyen'  && pc_cart === 'Esclave'){
    return 'victoire'
  } 
  if (plaeyr_cart === pc_cart){
    return 'égalité'
  }
  return 'défaite'
  
}