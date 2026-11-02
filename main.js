 import {profile_data , list_avatar } from './storage.js'
 import {get_name_valeur ,get_avatar_cliqued ,  valid_submit , invalid_submit } from './players.js'
 import { error_msg ,valid_msg , real_team_avatar } from './ui.js'
   let name_valid_submit = false ;
   const avatar_live = "./img/avatar/avatar 1.png" 
  
   
 
 const createur = document.getElementById('form_creation')
  const get_submit_botton = document.getElementById('submit_format_criation')
 let get_name = createur.addEventListener('input' , event => {
     console.log(get_name_valeur(event))
     const error_msage = document.getElementById('name_error_msg')
   if (get_name_valeur(event) === false) {
 
    error_msg(error_msage , name_valid_submit)
    invalid_submit ( get_submit_botton )
   }else {let  input_name = get_name_valeur(event) 

    valid_msg ( error_msage , name_valid_submit)
       valid_submit ( get_submit_botton )
   }
   
 }  )
    const get_avatar_live = document.getElementById('img-plus')
  const part_avatar =document.getElementById('icon')
let get_avatar =part_avatar.addEventListener('click' , event =>{
   let get_img_avatar = get_avatar_cliqued(event , avatar_live)
       real_team_avatar (get_avatar_live , avatar_live)
     }
  ) 

 
