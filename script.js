let showCategory=document.querySelector('.show-category')
let cardHide=document.getElementById('hide')


    showCategory.addEventListener('click',function(){
        if( cardHide.style.display==='none'){
            cardHide.style.display='block'
        }else{
            cardHide.style.display='none'
        }
    })