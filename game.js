


//////////// game rules
export const duel =(player_cart , pc_cart ) =>{
  if ( player_cart === 'Empereur'  && pc_cart === 'Citoyen'){
    return 'victoire'
  } 
   if ( player_cart === 'Esclave'  && pc_cart === 'Empereur' ){
    return 'victoire'
  }  
  if ( player_cart === 'Citoyen'  && pc_cart === 'Esclave'){
    return 'victoire'
  } 
  if (player_cart === pc_cart){
    return 'égalité'
  }
  return 'défaite'
  
}
/////// cart player and cart pc 
export const creer_mains = (player_camp) => {
const Empereur_cart = [ 'Empereur' , 'Citoyen' ,'Citoyen' ,'Citoyen' ,'Citoyen' ]
const Esclave_cart = [ 'Esclave' , 'Citoyen' ,'Citoyen' ,'Citoyen' ,'Citoyen' ]
if (player_camp === 'Empereur' ){
  return {
    player_cart:[...Empereur_cart],
    pc_cart: [...Esclave_cart]
  }
}
return {
      player_cart:[...Esclave_cart],
    pc_cart: [...Empereur_cart]
}
}
//// config nouvelle match
export const nouvelle_match = () =>{
  const mains = creer_mains('Empereur')
  return {
    manche:1,
    player_score:0,
    pc_score:0,
    player_camp: 'Empereur' , 
    player_cart :  mains.player_cart ,
    pc_cart : mains.pc_cart,
    nombre_duel: 1
  }
}
export const pc_choix = (pc_cart) => {
  const index  =  Math.floor(Math.random() * pc_cart.length) 
  return index ; 
} 
export const calcul_point = (camp) => {
  if (camp === 'Empereur'){
    return 1 ; 
  } else {
    return 5 ;
  }
}
export const switch_camp = (camp ) => {
  if (camp === 'Empereur'){
    return 'Esclave'
  } 
  return 'Empereur'
} 
export const if_switch = (manche) => {
  if (manche === 3  || manche === 6 || manche === 9   ){
    return true ;
  }
  return false ; 
}
export const remove_cart = (carts , index)=> {
  // kanakhdo copie b spread, w kan7aydo l carta mn copie (l array l asli ma kaytbdlch)
  const copie = [...carts]
  copie.splice(index, 1)
  return copie
}
export const play_cart = (match, index_player) => {
  const index_pc = pc_choix(match.pc_cart)

  const cart_player = match.player_cart[index_player]
  const cart_pc = match.pc_cart[index_pc]

  const resultat = duel(cart_player, cart_pc)

  if (resultat === 'égalité') {
    match.player_cart = remove_cart(match.player_cart, index_player)
    match.pc_cart = remove_cart(match.pc_cart, index_pc)

  }   
   match.nombre_duel = match.nombre_duel + 1

  return { resultat, cart_player, cart_pc }
}
export const fin_manche = (match, resultat) => {
  // katzid o9at
  if (resultat === 'victoire') {
    match.player_score = match.player_score + calcul_point(match.player_camp)}
    // katzid no9at llpc
  if (resultat === 'défaite') {
    match.pc_score = match.pc_score + calcul_point(switch_camp(match.player_camp))
  }
   // tswitchi lina ila wslat round 3 || 6||9
  if (if_switch(match.manche)) {
    match.player_camp = switch_camp(match.player_camp)
  }
  // katzid round fach katsali round
  match.manche = match.manche + 1
 //// kat3awed t3ti kartat jdad 
  const mains = creer_mains(match.player_camp)
  match.player_cart = mains.player_cart
  match.pc_cart = mains.pc_cart
}
export const if_fin_match = (match) => {
  if (match.manche > 12) {
    return true
  }
  return false
}
export const resultat_final = (match) => {
  if (match.player_score > match.pc_score) {
    return 'victoire'
  }
  if (match.player_score < match.pc_score) {
    return 'défaite'
  }
  return 'égalité'
}
export const groupe = (manche) => {
  return Math.ceil(manche / 3)
}

export const qui_commence = (nombre_duel) => {
  if (nombre_duel % 2 === 1) {
    return 'Empereur'
  }
  return 'Esclave'
}