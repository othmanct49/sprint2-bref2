import {affichage_profiles} from './ui.js'
import {list_avatar , select_items , get_array , deletItemsLS , additemsLS, if_vide  , addarrayLS } from './storage.js' ; 
export function get_name_valeur ( event  ){
 let input = event.target.closest('[data-type="name"]').value
    let if_valid= /^[A-Za-z0-9*]{3,15}$/.test(input)
    if (!if_valid){
        return false ; 
    } else if (if_vide()== true){
 return input } else {
    if (if_valid && select_items (input) == undefined ){
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
export function  get_form (form  , dom  , sabmit ){
        let listener_submit = form.addEventListener('submit' , event => {
         event.preventDefault()
      if (form.dataset.editId){
         
         let name_form = form.querySelector('[data-type="name"]').value ;
         console.log(form.dataset.editId)
         let avatar_img = document.querySelector('#img-live')
         console.log(avatar_img)
         const list = get_array()
          const index_edit = list.findIndex (profile_data => profile_data.id == form.dataset.editId)
        const list_data = get_array () ;
        list_data[index_edit].nickname = name_form
        list_data[index_edit].avatar = avatar_img.getAttribute('src','')
        addarrayLS (list_data)
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
            if_selected: false 


         }
         additemsLS(data)
         affichage_profiles(dom) 
         /// edit profile
         form.reset()
          avatar_img.setAttribute('src' , './img/avatar/avatar4.png')
         invalid_submit( sabmit)
         

    }
})}




// else {
//         const list = get_array()
//     const index_edit = list.findIndex (profile_data => profile_data.id == checker)
//     const list_data = get_array ;
//     list_data[index_edit].nickname = name_form
//      list_data[index_edit].avatar = avatar_img.getAttribute('src','')
//       addarrayLS (list_data)
//      affichage_profiles(dom) 
//      return null 
         

//     }
export function getItemdelet(dom){
   const listener = dom.addEventListener('click' , event => {
      const items_name = event.target.closest('[data-name-delet]')
      if (!items_name){
        return ; 
      } 
       const nickname_delet = items_name.dataset.nameDelet
        deletItemsLS(nickname_delet) 
        affichage_profiles(dom)       
   })
}