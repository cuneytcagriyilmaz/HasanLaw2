(function ($) {
    "use strict";
    var $consultationForm = $("#consultationForm");
    if($consultationForm.length){
        $consultationForm.validate({
            rules:{
                username:{
                    required:true
                },
                email:{
                    required:true
                },
                caseDetails:{
                    required:true
                }
            }
        })
    }

    var $contactForm = $("#contactForm");
    if($contactForm.length){
        $contactForm.validate({
            rules:{
                username:{
                    required:true
                },
                email:{
                    required:true
                },
                number:{
                    required:true
                },
                message:{
                    required:true
                }
            }
        })
    }
    var $otherForm = $(".other-form");
    if($otherForm.length){
        $otherForm.validate({
            rules:{
                username:{
                    required:true
                },
                email:{
                    required:true
                },
                number:{
                    required:true
                },
                caseDetails:{
                    required:true
                },
                selectArea: {
                    required:true
                }
            }
        })
    }
}(jQuery));
