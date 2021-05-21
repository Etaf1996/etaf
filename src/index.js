import '@laylazi/bootstrap-rtl-scss/dist/css/bootstrap-rtl.min.css';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './scss/style.scss';
import './css/style.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import '@fortawesome/fontawesome-free/js/all.min';
import 'bootstrap';
import 'webpack-jquery-ui';
import 'webpack-jquery-ui/css';
import 'jquery-ui-touch-punch/jquery.ui.touch-punch.min.js';
$(window).scroll(function(){
    if($(this).scrollTop()>=500){
       $("#navBar").addClass("noTransparrent");
     }else{
       $("#navBar").removeClass("noTransparrent");
     }
 });
 $(document).ready(function() {
  var slider = $("#slideshow");
  var slider_nav = $("#slideshow-nav");
  slider_nav.find("a[href=#slide1]").addClass("active");

  slider_nav.localScroll({
    target:'#carouselExampleIndicators',
    axis: 'x'
  });

  slider_nav.find("a").click(function(){
    slider_nav.find("a").removeClass("active");
    $(this).addClass("active");
  });
});