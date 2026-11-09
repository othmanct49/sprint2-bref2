import { list_avatar, deletItemsLS , select_items_byid , addprofil_selected , remplace_profile  , get_data_PS } from './storage.js'
import { get_name_valeur, get_avatar_cliqued, valid_submit, invalid_submit, get_form, getItemdelet  , selectedCART , update_stats } from './players.js'
import { error_msg, valid_msg, real_team_avatar, deplecate_name_msg, affichage_profiles, profil_select_affichage, checkifprofileselect, if_start, affichage_player_cart, affichage_table, vider_table, affichage_infos, affichage_pc_cart, affichage_pseudo, etat_input, affichage_fin_match, bloquer_carts, affichage_history } from './ui.js'
import { nouvelle_match, play_cart, fin_manche, if_fin_match, resultat_final, switch_camp  ,qui_commence , groupe} from './game.js'
import { add_partie, delete_partie, filtrer_history } from './history.js'

const profile_list = document.getElementById('list_profile')
const game_section = document.getElementById('game_section')
const createur = document.getElementById('form_creation')
const get_avatar_live = document.getElementById('img-live')
const part_avatar = document.getElementById('icon')
const get_start_button = document.getElementById('start_button')
const player_card = document.getElementById('player_2_cart')
const get_submit_botton = document.getElementById('submit_format_criation')
let name_form = document.querySelector('[data-type="name"]')
const domprofileselect = document.querySelector('.addprofile img')
const pseudo_header = document.getElementById('pseudo_header')
  const profileifselected = document.getElementById('profileifselected')





console.log(game_section)
if (profile_list) {
  affichage_profiles(profile_list)
}
let name_valid_submit = false;
let avatar_live = "./img/avatar/avatar 1.png"






////////////////////////// valid name format
if (createur) {
  let get_name = createur.addEventListener('input', event => {
    // kansifto l id dyal profile li kan3dlo (ila kan) bach smiya dyalo tkon ma9bola
    const edit_id = createur.dataset.editId
    console.log(get_name_valeur(event , edit_id))
    const error_msage = document.getElementById('name_error_msg')
    if (get_name_valeur(event , edit_id) === false) {

      error_msg(error_msage, name_valid_submit)
      etat_input(name_form, true)
      invalid_submit(get_submit_botton)
    } else if (get_name_valeur(event , edit_id) === true) {
      deplecate_name_msg(error_msage, name_valid_submit)
      etat_input(name_form, true)
      invalid_submit(get_submit_botton)
    } else {
      let input_name = get_name_valeur(event , edit_id)

      valid_msg(error_msage, name_valid_submit)
      etat_input(name_form, false)
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
    if (profile_list){
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
         // kanms7o ay message dyal erreur 9dim
         valid_msg(document.getElementById('name_error_msg'), name_valid_submit)
         etat_input(name_form, false)
         valid_submit(get_submit_botton)

       
    })}
    
if (createur && profile_list ) {
    get_form(createur, profile_list , get_submit_botton , domprofileselect , pseudo_header )
}  

/////////////////////////////////// select profile
   if (profile_list){
  const id_select = selectedCART ( profile_list  , domprofileselect , pseudo_header )
  //  remplace_profile( domprofileselect  , id_select  )

}
profil_select_affichage(domprofileselect)
// kat affichi pseudo f header f les 3 pages
affichage_pseudo(pseudo_header)

 

////////////////////////////
console.log("test")
if (get_start_button) {
  if_start(get_start_button, game_section)
}
// ////////////////////////
let match = nouvelle_match()
const player_cart_dom = document.getElementById('cart_round_player_2')
const pc_cart_dom = document.getElementById('cart_round_player_1')
if (player_cart_dom) {
  affichage_player_cart(player_cart_dom, match.player_cart)
  affichage_pc_cart(pc_cart_dom, match.pc_cart)
  affichage_infos(match, groupe(match.manche), qui_commence(match.nombre_duel))
}
const table_player = document.getElementById('table_player')
const table_pc = document.getElementById('table_pc')
const fin_match_dom = document.getElementById('fin_match')
let bloque = false

if (player_cart_dom) {
  player_cart_dom.addEventListener('click', event => {
    if (bloque) return

    const cart_clicked = event.target.closest('[data-index]')
    if (!cart_clicked) return

    const index = Number(cart_clicked.dataset.index)
    const { resultat, cart_player, cart_pc } = play_cart(match, index)

    affichage_table(table_player, table_pc, cart_player, cart_pc)
    bloque = true
    bloquer_carts(player_cart_dom, true)

        setTimeout(() => {
      if (resultat !== 'égalité') {
        fin_manche(match, resultat)
      }

      if (if_fin_match(match)) {
        const resultat_partie = resultat_final(match)
        affichage_fin_match(game_section, fin_match_dom, resultat_partie, match)
        // kansjlo partie f historique w kanzido stats l joueur
        const profile = get_data_PS()
        if (profile) {
          add_partie(match, resultat_partie, profile.id)
          update_stats(profile.id, resultat_partie)
        }
        return
      }

      vider_table(table_player, table_pc)
      affichage_player_cart(player_cart_dom, match.player_cart)
      affichage_pc_cart(pc_cart_dom, match.pc_cart)
      affichage_infos(match, groupe(match.manche), qui_commence(match.nombre_duel))
      bloque = false
      bloquer_carts(player_cart_dom, false)
    }, 1500)
  })
}
const rejouer_btn = document.getElementById('rejouer')
if (rejouer_btn) {
  rejouer_btn.addEventListener('click', () => {
    match = nouvelle_match()
    fin_match_dom.hidden = true
    game_section.hidden = false
    vider_table(table_player, table_pc)
    affichage_player_cart(player_cart_dom, match.player_cart)
    affichage_pc_cart(pc_cart_dom, match.pc_cart)
    affichage_infos(match, groupe(match.manche), qui_commence(match.nombre_duel))
    bloque = false
    bloquer_carts(player_cart_dom, false)
  })
}
// /////////////////////////////// delet profile
if (profile_list) {
  getItemdelet(profile_list , domprofileselect , pseudo_header)
}
//////////////////////////////// 

if (profileifselected){
   checkifprofileselect( profileifselected , get_start_button )
}


//////////////////////////////// history
const list_history = document.getElementById('list_history')
const search_history = document.getElementById('search_history')
const filter_result = document.getElementById('filter_result')
const filter_date = document.getElementById('filter_date')

// kat affichi l historique 3la 7sab recherche w les 2 filtres m3a ba3d
const afficher_history = () => {
  const parties = filtrer_history(search_history.value, filter_result.value, filter_date.value)
  affichage_history(list_history, parties)
}

if (list_history) {
  afficher_history()
  search_history.addEventListener('input', afficher_history)
  filter_result.addEventListener('change', afficher_history)
  filter_date.addEventListener('change', afficher_history)

  // supprimer partie b confirmation
  list_history.addEventListener('click', event => {
    const btn_delete = event.target.closest('[data-delete-partie]')
    if (!btn_delete) {
      return
    }
    if (!confirm('Supprimer cette partie ?')) {
      return
    }
    delete_partie(btn_delete.dataset.deletePartie)
    afficher_history()
  })
}
