$(document).ready(function(){

    window.scrollTo(0, 0);
    let curr_section = 1;
    let lastScrollTop = 0;

        

    window.addEventListener('wheel', function (event) {

        event.preventDefault();
        
        if(event.wheelDelta > 0){
                curr_section-=1;
                if(curr_section <= 0) curr_section = 1;
            
        } else {
            // upscroll code
            curr_section += 1;
            if(curr_section > 3) curr_section = 3;
         }

        if(curr_section == 1){

            $("#first")[0].scrollIntoView({
                behavior: 'smooth'
           });

        }else if(curr_section == 2){

            $("#second_header")[0].scrollIntoView({
                behavior: 'smooth'
           });

        }else if(curr_section == 3){

            $("#projects")[0].scrollIntoView({
                behavior: 'smooth'
           });

        }else{
            console.log("what the heck!!", curr_section);
        }

        
    }, {passive :false});




});