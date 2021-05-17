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
 