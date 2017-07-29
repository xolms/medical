jQuery(document).ready(function($) {
    // Запуск карусели
    var owl = $('.slider');
    owl.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: false,
        dots: false
    });
    //Открытие меню на мобилках
    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".main-mnu").slideToggle();
        return false;
    });
    $('a.close').click(function (e) {
        e.preventDefault();
        alert('Вакансия закрыта');
        return false;
    })
});