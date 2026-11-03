import {list_avatar , select_items , get_array , deletItemsLS , additemsLS, if_vide } from './storage.js' ; 
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
export function  get_form (form , avatar_variabel){
    let listener_submit = form.addEventListener('submit' , event => {
         event.preventDefault()
         let name_form = form.querySelectour('[data-type="name"]').value ;
         let data ={
            id : `EXE-${Date.now()}` ,
            nickname: name_form , 
            avatar:avatar_variabel , 
            createdAt : new Date().toISOString().slice(0,10)


         }
        //  profile_data.push(data)
         

    })
}