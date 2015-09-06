
	function initialize(lat, lng) {
        var latlng = new google.maps.LatLng(lat, lng),
            image = 'http://www.google.com/intl/en_us/mapfiles/ms/micons/blue-dot.png';

        var mapOptions = {
            center: new google.maps.LatLng(lat, lng),
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            panControl: true,
            panControlOptions: {
                position: google.maps.ControlPosition.TOP_RIGHT
            },
            zoomControl: true,
            zoomControlOptions: {
                style: google.maps.ZoomControlStyle.LARGE,
                position: google.maps.ControlPosition.TOP_left
            }
        },
        map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions),
            marker = new google.maps.Marker({
                position: latlng,
                map: map,
                icon: image
            });
    }
    
    window.onload = function () 
    {
	    initialize(44.88623409320778,-87.86480712897173);
	};
       

   
