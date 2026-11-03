export function error_msg (vr_msg , vr_checker){
      vr_msg.innerHTML = 'format invalid'
    vr_checker = false ;
}
export function valid_msg (vr_msg , vr_checker){
      vr_msg.innerHTML = ''
    vr_checker = true ;
}
export function real_team_avatar ( vr_avatar_dom , vr_avatar_js  ){
 
    vr_avatar_dom.setAttribute('src' ,`${vr_avatar_js}`)


}
export function deplecate_name_msg (vr_msg , vr_checker){
      vr_msg.innerHTML = 'This nickname already exists.'
    vr_checker = false ;
}