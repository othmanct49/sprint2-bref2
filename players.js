import {list_avatar} from './storage.js' ; 
export function get_name_valeur ( event  ){
 let input = event.target.closest('[data-type="name"]').value
    let if_valid= /^[A-Za-z0-9*]{3,15}$/.test(input)
    if (!if_valid){
        return false ; 
    } else if (if_valid){
 return input }
}

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
export function 