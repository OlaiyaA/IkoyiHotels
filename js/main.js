
    // click to scroll top
    $(' .move-up span').click(function () {
        $('html').animate({
            scrollTop: 0
        }, 1000);
        $('body').animate({
            scrollTop: 0
        }, 1000);
    })

    //AOS instance
    AOS.init();