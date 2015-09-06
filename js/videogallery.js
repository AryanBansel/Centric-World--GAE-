
//console.log('Custom JS file added');


$("#videoList > li > a").on("click", function(e){
   e.preventDefault();
   // get the url href from the link
   var url = $(this).attr("href");
   // get a reference to the iframe element on the page
   var iframe = $('#player');
   // change the src of the iframe to the new video url
   iframe.attr('src', url);
});

$( document ).ready(function(){
    console.log('Custom JS file added 2');
    $.ajax({
        url: 'js/videos.js',
        dataType: "json",
        success: function (data) { 
        genVideoList(data);
    },
    error: function (e) { console.log('Error - ' + e.responseText); }
    });
});

$.fn.initList = function() {
	   $("#videoList > li > a").on("click", function(e){
	      e.preventDefault();
	      // get the url href from the link
	      var url = $(this).attr("href");
	      // get a reference to the iframe element on the page
	      var iframe = $('#player');
	      // change the src of the iframe to the new video url
	      iframe.attr('src', url);
	   });
	};



function genVideoList(data) {
   console.log('genVideoList');
   var video_array = data.videos;
   var html_string = "";
   
   for(var i = 0; i < video_array.length; i++) {
      var obj = video_array[i];
     console.log(obj);
     url = "https://www.youtube.com/embed/" + obj + "?fs=1&autoplay=0&loop=0&html5=1";
   //  tmp = "<li><a href='" + url + "'>Video " + (i+1) + "</a></li>";
     tmp = "<li class='list-group-item'><a href='" + url + "'>Cloud Webinar " + (i+1) + "</a></li>";
     html_string += tmp;
  }
  writeContentToPage("videoList", html_string);
}

function writeContentToPage(id, content) {
	   $("#" + id).html(content).initList();
	}


//tmp = "<li class='list-group-item'><a href='" + url + "'>Video " + (i+1) + "</a></li>";