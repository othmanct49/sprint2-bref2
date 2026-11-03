
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
export function get_array ( array_aff){
    array_aff = JSON.parse(localStorage.getItem('profile_data'))
}
export function select_items ( items ) {
    let profile_data = JSON.parse(localStorage.getItem('profile_data')) 
    const find_objet = profile_data.find( index => index.nickname == items)
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
