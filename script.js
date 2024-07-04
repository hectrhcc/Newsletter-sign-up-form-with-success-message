$(document).ready(function(){
    $('#success').hide();


    $('.buttonemail').click(function(){

        const email = $('#email').val();
          
        if(validateEmail(email)) {
      
          // Cambiar contenido
          $('#form').hide();
          $('#success').show();
      
        } else {
      
          showErrorMessage();
      
        }
      
      });
      
      function validateEmail(email) {
       
        // regex para validar email
        let regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        return regex.test(email);
        
        if(!isValidEmail(email)) {
      
          showErrorMessage();
          return false;
      
        }
      
        return true;
      
      }
      
      function showErrorMessage(){
      
        $('#msj').css('opacity', '1');
      
      }
      
      function hideErrorMessage(){
      
        $('#msj').css('opacity', '0');
      
      }
      
        hideErrorMessage();
      
})