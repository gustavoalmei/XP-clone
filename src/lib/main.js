$(document).ready(function() {
    toggleSubMenu()

    const swiper = new Swiper('.swiper', {
        // autoplay: {
        //     delay: 5000,
        //   },
        allowTouchMove:false,
        loop:true,
        speed:1000,
        effect: 'fade',
        pagination:{
            el:'.swiper-pagination',
            type:'bullets',
            clickable: true,
            bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`
        },
      });

})

function toggleSubMenu(){
    let nav = $('#menu-nav .nav-item')
    let navLink = nav.children('a')

    navLink.mouseenter(function(){
        for (let i = 0; i < nav.length - 2; i++) {
            if($(this).parents()[0] == nav[i]){
                $(this).next().toggle()
            }else{
                $(nav[i]).find('ul').hide()
            }
        }
    })

    $(document).scroll(function(){
        nav.children('ul').hide()
    })

    $(document).click(function(){
        nav.children('ul').hide()
    })
}