 function $(el){
     return document.querySelector(el);
 }

 let container=$('.container');
 let toggle= $('#toggle-theme');

 toggle.addEventListener('click',()=>{
     let list=container.classList;

     if(list.contains('default')){
         list.replace('default','dark');
         toggle.textContent='Light';
     }else{
        list.replace('default');
        toggle.textContent='Dark';
     }
 })