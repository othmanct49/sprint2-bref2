 
export function additemsLS ( items ){
 let profile_data = JSON.parse(localStorage.getItem('profile_data')) ||[] ; 
 profile_data.push(items)
 localStorage.setItem('profile_data' , JSON.stringify(profile_data))
}
export function deletItemsLS  ( items) {
    let profile_data = JSON.parse(localStorage.getItem('profile_data')) 
    const index_delet = profile_data.findIndex (profile_data => profile_data.nickname == items)
    if (index_delet == -1){
        return ; 
    }
    profile_data.splice(index_delet , 1)
     localStorage.setItem('profile_data' , JSON.stringify(profile_data))
        
    
} 

// export function get_indexobjet  ( items) {
//     let profile_data = JSON.parse(localStorage.getItem('profile_data')) 
//     const index_delet = profile_data.findIndex (profile_data => profile_data.nickname == items)
//     if (index_delet == -1){
//         return ; 
//     }
//     return index_delet ; 
        
    
// } 
export function get_array ( ){
   const array_aff = JSON.parse(localStorage.getItem('profile_data')) || []
   return array_aff ;
}
export function addarrayLS (objet){
     localStorage.setItem('profile_data' , JSON.stringify(objet))
}
export function select_items ( items ) {
    let profile_data = JSON.parse(localStorage.getItem('profile_data')) || []
    // kan9arno b toLowerCase bach "Ali" w "ali" ykono nafs smiya
    const find_objet = profile_data.find( index => index.nickname.toLowerCase() == items.toLowerCase())
      if (find_objet == -1){
        return false ; 
    } 
    return  find_objet ;
} 

export function if_vide (){
     let  array = JSON.parse(localStorage.getItem('profile_data'))

    if ( !array ){
        return  true;
    } else {
        return false ;
    }
}
////// finde items by id 
export function select_items_byid( items ) {
    let profile_data = JSON.parse(localStorage.getItem('profile_data')) || []
    const find_objet = profile_data.find( index => index.id == items)
      if (find_objet == -1){
        return false ; 
    } 
    return  find_objet ;
} 
export function setProfileEditInForm ( avatar   , name  , objet , checker  ){
   const data_to_edit = objet 
   if (data_to_edit){
   avatar.value = objet.avatar
   name.value = objet.name
   return objet.id 
}}




   
 export let list_avatar={
    avatar1:"./img/avatar/avatar 1.png",
    avatar2:"./img/avatar/avatar2.png" , 
    avatar3:"./img/avatar/avatar3.png" , 
    avatar4:"./img/avatar/avatar4.png" , 
    avatar5:"./img/avatar/avatar5.png" , 
    avatar6:"./img/avatar/avatar6.png" , 
    avatar7:"./img/avatar/avatar7.png" , 
    avatar8:"./img/avatar/avatar8.png" , 
    avatar9:"./img/avatar/avatar9.png" , 
    avatar10:"./img/avatar/avatar10.png" , 
    avatar11:"./img/avatar/avatar11.png" , 
    avatar12:"./img/avatar/avatar12.png" , 
}

 export function addprofil_selected(profil_selected ){
    localStorage.setItem('profile_selected' , JSON.stringify(profil_selected))

 }
 export function remplace_profile( id ){
     const objet_data = select_items_byid(id)
      addprofil_selected (objet_data)
      
}
export function get_data_PS (){
    const data = JSON.parse(localStorage.getItem( 'profile_selected'  )) || null ;
    return data ;
}
// katms7 'profile_selected' ila kan howa profile li tmsa7
export const remove_profile_selected = (id) => {
  const profile_selected = get_data_PS()
  if (!profile_selected) {
    return
  }
  if (profile_selected.id === id) {
    localStorage.removeItem('profile_selected')
  }
}
export function get_history() {
  return JSON.parse(localStorage.getItem('history')) || []
}

export function save_history(history) {
  localStorage.setItem('history', JSON.stringify(history))
}