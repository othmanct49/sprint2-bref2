import { get_array} from './storage.js'


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
export function affichage_profiles ( dom  ){
    dom.innerHTML='';
    let list_profile = get_array()
    list_profile.forEach(element => {
      dom.insertAdjacentHTML('beforeend',
        `   <article  data-name="${element.nickname}">
                <div class="flex flex-row "> 
                    <div id="profile1" class="flex  justify-center px-4  pt-6 ">
                        <img src="${element.avatar}" class="w-14 h-14 rounded-full border border-cremi/40  ">
                        <div class=" text-cremi px-4">
                            <p id="profile_name"  class="">${element.nickname}</p>
                       

                            <div class="flex flex-wrap gap-9 ">
                                <button class=" ">win  <span> </span> </button>
                                <button class="" >loss  <span> </span> </button>
                            </div>
                            <div> date created : ${element.createdAt} <p></p> </div>

                        </div>
                        <div>
                            <button class="text-cremi">icon idit</button>
                        </div> 
                </div>
                   

                </div>
                <div class="pt-4">
                <div class="bg-background  flex flex-wrap justify-center text-cremi rounded-full w-[60%] h-10 mx-auto ">
                     <button data-id="profile1" >select profil</button>
                   </div>
                </div>
            </article>`
      )
        
    });
    

}