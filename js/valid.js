/*   function validateText(id){
            
            if($('#'+id).val()== null || $('#'+id).val()=="")
            {
                //alert('value is null');
                var div = $('#'+id).closest('div');
                div.addClass('has-error has-feedback');
                $('#glypcn'+id).remove();
                div.removeClass('has-success');
                div.append('<span id="glypcn'+id+'" class= "glyphicon glyphicon-remove form-control-feedback"></span>'); 
                return false;
            }
            else
            {
                var div = $('#'+id).closest('div');       
                div.addClass('has-success has-feedback');
                $('#glypcn'+id).remove();
                div.removeClass('has-error');
                div.append('<span id="glypcn'+id+'" class="glyphicon glyphicon-ok form-control-feedback"></span>');
                
                return true;
            }
        }
       */ 
      
         
            function validateName()
            {
            	alert('validName!');
                var value = $('#contactname').val();
                
                if(value.length<5 || value == null)
                {
                $('#nameErr').text('Please Enter Valid Name');
              //  $('#nmerr').text('Please enter valid name!');
                addFalse('contactname');
                return false;
                }
                else
                {
                $('#nameErr').text('');
                addTrue('contactname');
                return true;
                }
            }
            
            function validateEmail(){
                
                var regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
                if(regexEmail.test($('#email').val())==true)
                {
                $('#mailErr').text('');
                addTrue('email'); 
                return true;
                }
                else
                {
                    if($('#email').val().length==0){
                        $('#mailErr').text('Please Enter Email Address!');
                    }
                        else $('#mailErr').text('Invalid Email!');
                
                addFalse('email');
                return false;
                }
            }
            
            function validateContact(){
                
                var rgCN = /^[- +()]*[0-9][- +()0-9]*$/;
                
                if(rgCN.test($('#phone').val())==true)
                {
                $('#phoneErr').text('');
                addTrue('phone');   
                return true;
                }
                else
                {
                $('#phoneErr').text('Please Enter Valid Contact No.!');
                addFalse('phone');
                return false;
                }
                
            }
            
            function validateMessage(){
                
                var value = $('#message').val().length;
                if(value<10)
                {
                    $('#msgErr').text('Please Enter Atleast 10 Characters!');
                    addFalse('message');
                    return false;
                }
                else
                {
                    $('#msgErr').text('');
                    addTrue('message');
                    return true;
                }
            }
            
            function addTrue(id){
                
                var div = $('#'+id).closest('div');       
                div.addClass('has-success has-feedback');
                $('#glypcn'+id).remove();
                div.removeClass('has-error');
         //       div.append('<span id="glypcn'+id+'" class="glyphicon glyphicon-ok form-control-feedback"></span>');
            }
            
            function addFalse(id){
                
                var div = $('#'+id).closest('div');
                div.addClass('has-error has-feedback');
                $('#glypcn'+id).remove();
                div.removeClass('has-success');
          //      div.append('<span id="glypcn'+id+'" class= "glyphicon glyphicon-remove form-control-feedback"></span>'); 
                
            }
            
            $('#b1').click(function(){
        		alert('validName!');
        		if(!validateName()){
                    return false;
                }
        		$('form#contactForm').submit();   
            });
            
       /* $(document).ready(
                function(){
                	
                	
                		
                	});
                    
                   $('#contactbtn').click(function(){
                      
                       //if(!validateText('contactname')){
                         //  return false;
                       //}
                      
                       
                       if(!validateName()){
                           return false;
                       }
                       
                      // if(!validateText('email')){
                        //   return false;
                                //}
                                
                       if(!validateEmail()){
                           return false;
                       }
                       
                       //if(!validateText('phone')){
                         //  return false;
                       //}
                       
                       
                       if(!validateContact()){
                           return false;
                       }
                       
                       //if(!validateText('message')){
                         //  return false;
                       //}
                       
                       if(!validateMessage()){
                           return false;
                       }
                    $('form#contactForm').submit();   
                   });
                });
        
        
        
        
  
  
     */