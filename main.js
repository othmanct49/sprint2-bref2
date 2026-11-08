import { list_avatar, deletItemsLS , select_items_byid } from './storage.js'
import { get_name_valeur, get_avatar_cliqued, valid_submit, invalid_submit, get_form, getItemdelet  } from './players.js'
import { error_msg, valid_msg, real_team_avatar, deplecate_name_msg, affichage_profiles, } from './ui.js'
import { if_start, nwe_data_game } from './game.js'
const profile_list = document.getElementById('list_profile')
const game_section = document.getElementById('game_section')
const createur = document.getElementById('form_creation')
const get_avatar_live = document.getElementById('img-live')
const part_avatar = document.getElementById('icon')
const get_start_button = document.getElementById('start_button')
const player_card = document.getElementById('player_2_cart')
const get_submit_botton = document.getElementById('submit_format_criation')
let name_form = document.querySelector('[data-type="name"]')



console.log(game_section)
if (profile_list) {
  affichage_profiles(profile_list)
}
let name_valid_submit = false;
let avatar_live = "./img/avatar/avatar 1.png"






////////////////////////// valid name format
if (createur) {
  let get_name = createur.addEventListener('input', event => {
    console.log(get_name_valeur(event))
    const error_msage = document.getElementById('name_error_msg')
    if (get_name_valeur(event) === false) {

      error_msg(error_msage, name_valid_submit)
      invalid_submit(get_submit_botton)
    } else if (get_name_valeur(event) === true) {
      deplecate_name_msg(error_msage, name_valid_submit)
      invalid_submit(get_submit_botton)
    } else {
      let input_name = get_name_valeur(event)

      valid_msg(error_msage, name_valid_submit)
      valid_submit(get_submit_botton)
    }

  })
}
// /////////////////////// switch avatar live

if (part_avatar) {
  let get_avatar = part_avatar.addEventListener('click', event => {
    avatar_live = get_avatar_cliqued(event)
    if (!avatar_live) {
      return;
    }

    real_team_avatar(get_avatar_live, avatar_live)

  }
  )
}
// /////////////////////////// val
     profile_list.addEventListener('click' , event => {
      const get_target = event.target.closest('[data-edit]')
        if (!get_target) {
          return
        }
      const get_id_profile = get_target.dataset.edit 
  createur.dataset.editId = get_id_profile
     let  objet_edit_data =   select_items_byid(createur.dataset.editId) 
         get_avatar_live.setAttribute('src' , `${objet_edit_data.avatar}`)
         name_form.value = objet_edit_data.nickname
         valid_submit(get_submit_botton)

       
    })
    
if (createur && profile_list ) {
    get_form(createur, profile_list , get_submit_botton  )
}  
 

////////////////////////////
console.log("test")
if (get_start_button) {
  if_start(get_start_button, game_section)
}
// ////////////////////////
let game_data = nwe_data_game()
if (player_card) {
  let cart_listener = player_card.addEventListener('click', event => {
    let cart_clicked = event.target.closest('[data-card]')
    if (!cart_clicked) {
      return;
    }
    let select_card = cart_clicked.dataset.card
    console.log(select_card)

  })
}
// /////////////////////////////// delet profile
if (profile_list) {
  getItemdelet(profile_list)
}
//////////////////////////////// 




