 import {profile_data , list_avatar } from './storage.js'
 import {get_name_valeur ,get_avatar_cliqued  } from './players.js'
   let name_valid_submit = false ;
   const data_submit ={
    id: 0 , 
    nickname : "" ,
    avatar : "./img/avatar/avatar 1.png" , 
    createdAt: ''

   }
  
   
 
 const createur = document.getElementById('form_creation')
 let get_name = createur.addEventListener('input' , event => {
     console.log(get_name_valeur(event))
     const error_msg = document.getElementById('name_error_msg')
   if (get_name_valeur(event) === false) {
     const error_msg = document.getElementById('name_error_msg')
    error_msg.innerHTML = 'format invalid'
    name_valid_submit = false ;
    
   }else {let  input_name = get_name_valeur(event) 
       error_msg.innerHTML = ''
       name_valid_submit = true ;
   }
   
 }  )
  const part_avatar =document.getElementById('icon')
let get_avatar =part_avatar.addEventListener('click' , event =>{
   let get_img_avatar = get_avatar_cliqued(event)
     }
  ) 
  if (name_valid_submit) {
    
  }