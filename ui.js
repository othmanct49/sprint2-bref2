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
        `   <article  data-name="${element.nickname}" class="lg:relative">
                <div class="flex flex-row justify-between "> 
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
                            <button data-edit="${element.id}" class="text-cremi lg:absolute lg:left-110 lg:top-10 "><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 384 384"><path fill="#D9B66F" d="M0 304L236 68l80 80L80 384H0v-80zM378 86l-39 39l-80-80l39-39q6-6 15-6t15 6l50 50q6 6 6 15t-6 15z"/></svg></button>
                        </div> 
                </div>
                   

                </div> <div class="grid grid-cols-2  justify-itemes-center">
               <div class="pt-4">
                <div class="bg-red-400  flex flex-wrap justify-center text-cremi rounded-full w-[90%] h-10 mx-auto ">
                     <button data-name-delet="${element.nickname}" > delet</button>
                   </div>
                </div>
                 <div class="pt-4">
                <div class="bg-background  flex flex-wrap justify-center text-cremi rounded-full w-[90%] h-10 mx-auto ">
                     <button data-select="${element.nickname}" >select profil</button>
                   </div>
                </div>
                </div>
            </article>`
      )
        
    });
    

}
export function profil_select_affichage(id , dom ){
    dom.querySelector('.')


}