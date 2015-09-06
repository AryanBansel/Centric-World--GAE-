$(document).ready(function(){
	$('#regModal').on('shown.bs.modal', function () {
  	  $('#myInput').focus()
  	 // alert('1');
  	});
	
  $('#open-modal').click(function(){
	  var idea = $('#inputIdea').val();
	 // alert('2');
	  $('#myModalLabel').html(idea);  
  });
	
  $('#myCircle').on('shown.bs.modal', function () {
	  $('#myInput').focus()
	//  alert('3');
	})
  
});
    