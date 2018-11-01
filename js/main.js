$(document).ready(function () {
    // var height = window.innerHeight;
    // alert(height);
    if($("body").height()<=472){
        $("body").css("height","100vh");
        $(".lg-bot").addClass("logo-bottom");
    }else{
        $("body").css("height","100%");
        $(".lg-bot").removeClass("logo-bottom");
    }
    $(".myPinCode input").jqueryPincodeAutotab();

})