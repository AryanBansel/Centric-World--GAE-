$('a').click(function(){
	var id1 = $(this).attr('id');
	if(id1=='paging'){
		
	//alert(id1);
    var page = $(this).attr('href');
  // alert(page);
    $('#content-load').load(page);
    return false;
	}
	else if(id1=='paging-div'){
		var div1 = $(this).attr('href');
		//alert(div1);
		$('#content-div').load(div1);
		return false;
	}
	else if(id1 =='same-page-div'){
	//	alert(id1);
		var div1 = $(this).attr('href');
		if(div1=='join1.html')
			{
				if (typeof(Storage) != "undefined") {
		            alert(localStorage.getItem("circlename"));
					// Store
		           // var circle  = $('#cn').val();
		            //localStorage.setItem("circlename",circle);
		            // Retrieve
		            document.getElementById("results").innerHTML = localStorage.getItem("circlename");
		        }  
		    
		    

			}
		//var page = 'CloudIdea.html #cloud2';
		//alert(page);
		$('#content-div').load(div1);
		return false;
	}
});

