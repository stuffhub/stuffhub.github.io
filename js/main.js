$(document).ready(function() {
    //Fixed навигация 480px
    var windowWidth = $(window).width();
    if (windowWidth > 480) {
        $(document).scroll(function() {
            var scrollT = $(document).scrollTop();
            if (scrollT > 64) {
                $("header").addClass("header__fixed");
                $(".header__logo").addClass("header__logo-fixed");
                $(".header__nav").addClass("header__nav-fixed");
            } else {
                $("header").removeClass("header__fixed");
                $(".header__logo").removeClass("header__logo-fixed");
                $(".header__nav").removeClass("header__nav-fixed");
            };
        });
    };
    // 480px end
    if(windowWidth > 1024){
        // Анимация
        $("img[src^='img/service'").hover(function() {
            $(this).animate({
                bottom: "15px"
            }, 700, "easeOutBack");
        }, function() {
            $(this).animate({
                bottom: "0px"
            }, 700, "easeOutBack");
        });
    };
    // Якоря
    $(".header__nav a[href*='#'], .hamburger__navigation a").click(function() {
        var atr = $(this).attr("href");
        $("body").animate({
            scrollTop: $(atr).offset().top
        }, 700, "easeOutCirc");
    });
    //Слайдер
    var nextButton = $(".next");
    var prevButton = $(".prev");
    var sliderWrapper = $(".slider__wrapper");
    var totalFourSlides = $(".slider__wrapper").children().outerWidth() * 4;
    var totalSliderWidth = slideIndex = 0;
    sliderWrapper.children().each(function() {
        totalSliderWidth += $(this).outerWidth();
    });

    function nextSlide() {
        sliderWrapper.css("transform", "translateX(" + -(slideIndex += totalFourSlides) + "px)");
        if (slideIndex == totalSliderWidth) {
            sliderWrapper.css("transform", "translateX(0px)");
            slideIndex = 0;
        };
    };

    function prevSlide() {
        sliderWrapper.css("transform", "translateX(" + -(slideIndex -= totalFourSlides) + "px)");
        if (slideIndex < 0) {
            sliderWrapper.css("transform", "translateX(" + -(totalSliderWidth - totalFourSlides) + "px)");
            slideIndex = totalSliderWidth - totalFourSlides;
        };
    };
    nextButton.click(function() {
        nextSlide();
    });
    prevButton.click(function() {
        prevSlide();
    });
    //Табы
    var tabWrapper = $(".works__wrapper");
    var tabNavigation = $(".works__navigation a");
    tabWrapper.hide().filter(":first").show();
    tabNavigation.click(function(link) {
        link.preventDefault();
        tabNavigation.removeClass("active");
        $(this).addClass("active");
        tabWrapper.fadeOut().filter(this.hash).stop().fadeIn();
    });
    var workBlock = $(".works__block");
    workBlock.hover(function() {
        $(this).find(".overlay").stop().fadeIn();
    }, function() {
        $(this).find(".overlay").stop().fadeOut();
    });
    //Pop-up
    var popOverlay = $(".pop-up__overlay");
    var pop = $(".pop-up");
    var popClose = $(".pop-up__close");
    $(".popclass").click(function() {
        popOverlay.fadeIn();
        pop.fadeIn();
    });
    popClose.click(function() {
        popOverlay.fadeOut();
        pop.fadeOut();
    });
    //Hamburger
    var cross = $(".cross");
    var hamburger = $(".hamburger");
    var hamburgerNavigation = $(".hamburger__navigation");
    cross.hide();
    hamburger.click(function(){
        hamburgerNavigation.fadeIn("fast", function(){
            hamburger.hide();
            cross.show();
        });
    });
    cross.click(function(){
        hamburgerNavigation.fadeOut("fast", function(){
            hamburger.show();
            cross.hide();
        });
    });
    $(".hamburger__navigation a").click(function(){
        hamburgerNavigation.hide();
        cross.hide();
        hamburger.show();
    });
});
