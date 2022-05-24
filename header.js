
// Start // Action Scroll Page, add class header-fixex-scroll
$('document').ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            $("#header-scroll").addClass("header-fixed-scroll");
        } else {
            $("#header-scroll").removeClass("header-fixed-scroll");
        }
    });
    });
    // End // Action Scroll Page, add class header-fixex-scroll
    
    
    // Start // Hamburger Menu
    $(document).ready(function(){
        $(".nav-icon-bar").click(function(e){
            $(".nav-links").toggleClass('show-nav-mobile');
            e.preventDefault();
        });
    });
    // End // Hamburger Menu
    
    // Start // Sub Nav Menu
    $(document).ready(function(){
        console.log("ciao counter");
        $(".sub-page-1").click(function(e){
            $(".sub-page-1").toggleClass('sub-nav-links-li-a-nav-active');
            $(".sub-page-2").removeClass('sub-nav-links-li-a-nav-active');
            $(".sub-nav-center-1").toggleClass('sub-nav-center-on-1');
            $(".sub-nav-center-2").removeClass('sub-nav-center-on-2');
            e.preventDefault();
        });
    });
    $(document).ready(function(){
        $(".sub-page-2").click(function(e){
            $(".sub-page-2").toggleClass('sub-nav-links-li-a-nav-active');
            $(".sub-page-1").removeClass('sub-nav-links-li-a-nav-active');
            $(".sub-nav-center-1").removeClass('sub-nav-center-on-1');
            $(".sub-nav-center-2").toggleClass('sub-nav-center-on-2');
            e.preventDefault();
        });
    });
    // End // Sub Nav Menu