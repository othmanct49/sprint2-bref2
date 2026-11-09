import {affichage_profiles ,profil_select_affichage , affichage_pseudo } from './ui.js'
import {list_avatar , select_items , get_array , deletItemsLS , additemsLS, if_vide  , addarrayLS , select_items_byid , remplace_profile , remove_profile_selected , get_data_PS } from './storage.js' ;
export function get_name_valeur ( event , edit_id ){
 let input = event.target.closest('[data-type="name"]').value
    let if_valid= /^[A-Za-z0-9]{3,15}$/.test(input)
    if (!if_valid){
        return false ;
    } else if (if_vide()== true){
 return input } else {
    const profile_exist = select_items (input)
    // smiya jdida wla nafs smiya dyal profile li kan3dlo => mzyan
    if (profile_exist == undefined || profile_exist.id == edit_id ){
        return input ;
    }else {
        return true ;
    }
}}

export function  get_avatar_cliqued (event ){
    let get_avatar = event.target.closest('[data-imag]')
    if (!get_avatar){
        return ;
    }
    
     let get_data_image = get_avatar.dataset.imag
     let src_img = list_avatar[get_data_image]
      console.log (src_img)
     return src_img ;

}
export function valid_submit (submit_botton ){
 
       submit_botton.disabled = false
  

}
export function invalid_submit (submit_botton){
             submit_botton.disabled = true

}
export function  get_form (form  , dom  , sabmit , header_img , header_pseudo ){
        let listener_submit = form.addEventListener('submit' , event => {
         event.preventDefault()
      if (form.dataset.editId){
         
         let name_form = form.querySelector('[data-type="name"]').value ;
         console.log(form.dataset.editId)
         let avatar_img = document.querySelector('#img-live')
         console.log(avatar_img)
         const list = get_array()
          const index_edit = list.findIndex (profile_data => profile_data.id == form.dataset.editId)
        // ila profile tmsa7 w 7na kan3dlo, kanrj3o l form kima kan
        if (index_edit === -1) {
          delete form.dataset.editId
          form.reset()
          invalid_submit(sabmit)
          return
        }
        const list_data = get_array () ;
        list_data[index_edit].nickname = name_form
        list_data[index_edit].avatar = avatar_img.getAttribute('src','')
        addarrayLS (list_data)
        // ila had profile howa li mselectionné, kanbdlo hta copie dyalo w header
        const profile_selected = get_data_PS()
        if (profile_selected && profile_selected.id == form.dataset.editId) {
          remplace_profile(form.dataset.editId)
          profil_select_affichage(header_img)
          affichage_pseudo(header_pseudo)
        }
        affichage_profiles(dom)
           delete form.dataset.editId 
         form.reset()
         avatar_img.setAttribute('src' , './img/avatar/avatar4.png')
         invalid_submit( sabmit)
        






      }else{
   

         let name_form = form.querySelector('[data-type="name"]').value ;
         let avatar_img = document.querySelector('#img-live')
         console.log(avatar_img)
         ///// new profile
         let data ={
            id : `EXE-${Date.now()}` ,
            nickname: name_form , 
            avatar:avatar_img.getAttribute('src',''), 
            createdAt : new Date().toISOString().slice(0,10) , 
            win: 0 ,
            lost: 0,
            play: 0,  


         }
         additemsLS(data)
         affichage_profiles(dom) 
         /// edit profile
         form.reset()
          avatar_img.setAttribute('src' , './img/avatar/avatar4.png')
         invalid_submit( sabmit)

         

    }
})}
export function selectedCART (form , header_img , header_pseudo ){
    form.addEventListener('click' , event => {
      const   get_event =  event.target.closest('[data-select]')
      if (!get_event) return
       let   get_id_profile_selected = get_event.dataset.select
       const objet_data = select_items_byid(get_id_profile_selected)

        remplace_profile(    get_id_profile_selected   )
          profil_select_affichage(header_img)
          affichage_pseudo(header_pseudo)

    
    
      })
}





export function getItemdelet(dom , header_img , header_pseudo){
   const listener = dom.addEventListener('click' , event => {
      const items_name = event.target.closest('[data-name-delet]')
      if (!items_name){
        return ;
      }
      // kantsnaw confirmation 9bel ma nms7o, ila annula makanms7o walo
      if (!confirm('Supprimer ce profil ?')) {
        return
      }
       const nickname_delet = items_name.dataset.nameDelet
       // kanjibo profile kaml bach n3rfo l id dyalo
       const profile_delet = get_array().find(profile => profile.nickname === nickname_delet)
        deletItemsLS(nickname_delet)
        if (profile_delet) {
          remove_profile_selected(profile_delet.id)
        }
        affichage_profiles(dom)
        profil_select_affichage(header_img)
        affichage_pseudo(header_pseudo)
   })
}
// katzid partie f stats dyal profile (play, win, lost)
export const update_stats = (player_id , resultat) => {
  const list = get_array()
  const new_list = list.map(profile => {
    if (profile.id !== player_id) {
      return profile
    }
    // kanakhdo copie b spread w kanzido partie
    const new_profile = { ...profile, play: (profile.play || 0) + 1 }
    if (resultat === 'victoire') {
      new_profile.win = (profile.win || 0) + 1
    }
    if (resultat === 'défaite') {
      new_profile.lost = (profile.lost || 0) + 1
    }
    return new_profile
  })
  addarrayLS(new_list)
}
