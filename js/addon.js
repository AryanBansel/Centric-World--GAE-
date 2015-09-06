	$(document).ready(function(){
	
		console.log('addon.js added!');
		    $( "#draggable1" ).draggable();
		    $( "#draggable2" ).draggable();
		    $( "#draggable3" ).draggable();
		    $( "#draggable4" ).draggable();
		    $( "#draggable5" ).draggable();
		    $( "#draggable6" ).draggable();
		   
		
		
            $("#resizable").resizable({
                maxHeight: 250,
                maxWidth: 400,
                minHeight: 250,
                minWidth: 360
                          
          });
		
		
		  
		
	});		
	