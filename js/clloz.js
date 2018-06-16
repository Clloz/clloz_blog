$(function() {
    $("[data-toggle='tooltip']").tooltip()
}),
jQuery(document).ready(function(a) {
    var b = 1170;
    console.log(a(window).width() > b)
    if (a(window).width() > b) {
        var c = a(".nav-head").height();
        a(window).on("scroll", {
            previousTop: 0
        },
        function() {
            var b = a(window).scrollTop();
            b < this.previousTop ? b > 0 && a(".nav-head").hasClass("is-fixed") ? a(".nav-head").addClass("is-visible") : a(".nav-head").removeClass("is-visible is-fixed") : (a(".nav-head").removeClass("is-visible"), b > c && !a(".nav-head").hasClass("is-fixed") && a(".nav-head").addClass("is-fixed")),
            this.previousTop = b
        })
    }
});