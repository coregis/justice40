mapboxgl.accessToken = 'pk.eyJ1IjoiY29yZS1naXMiLCJhIjoiaUxqQS1zQSJ9.mDT5nb8l_dWIHzbnOTebcQ';

//set bounds to San Juan County
var bounds = [
		[-140.339355,27.819645], // southwest coords
		[-99.887695,44.871443] // northeast coords
	];

const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/core-gis/ckxw53hlynv1e15mpdxxhw8lf',
	center: [-120.825478,37.805959],
	zoom: 6,
});

map.on('load', function () {

	map.addSource('justice40',{
		type:'vector',
		url:'mapbox://core-gis.5p42eakz'
		});
		//Add a map layer for all the tracts
/*
	//Add a layer symbolized on energy burden
	map.addLayer({
		"id":"tracts-ebf",
		"type":"fill",
		"source":"justice40",
		"source-layer":"justice40_CA_only-9e4kye",
		"layout":{		},
		"paint":{
				'fill-color':  {
					property: 'EBF_PFS',
					stops: [
						[0,'#ffffff'],
						[0.15,'#ffffb2'],
						[0.35,'#fecc5c'],
						[0.59,'#fd8d3c'],
						[0.8,'#f03b20'],
						[0.99,'#bd0026']
						]
				},
				'fill-opacity': .5,
				}
			},
			'road-simple' // existing layer to position the new one behind
	);
});
*/
	//Add a layer symbolized on energy burden
	map.addLayer({
		"id":"tracts-lmi",
		"type":"fill",
		"source":"justice40",
		"source-layer":"justice40_CA_only-9e4kye",
		"layout":{		},
		"paint":{
				'fill-color':  {
					property: 'LMI_PFS',
					stops: [
						[0,'#ffffff'],
						[0.12,'#f7e6f9'],
						[0.34,'#d4b9da'],
						[0.56,'#df65b0'],
						[0.77,'#ce1256'],
						[0.99,'#67001f']
						]
				},
				'fill-opacity': .75,
				}
			},
			'road-simple' // existing layer to position the new one behind
	);
});


/*
// When a click event occurs on a feature in the states layer, open a popup at the
    // location of the click, with description HTML from its properties.
    map.on('click', 'parcel_lines', function (e) {
        new mapboxgl.Popup()
            .setLngLat(e.lngLat)
            .setHTML(fillpopup(e.features[0].properties))
            .addTo(map);
		console.log(e.features[0].properties);
    });
	
	 // Change the cursor to a pointer when the mouse is over the parcel layer.
    map.on('mouseenter', 'parcel_lines', function () {
        map.getCanvas().style.cursor = 'pointer';
    });

    // Change it back to a pointer when it leaves.
    map.on('mouseleave', 'parcel_lines', function () {
        map.getCanvas().style.cursor = '';
    });
	
	function fillpopup(data){
		var html = "";
		html = html + "<span class='varname'>PIN: </span> <span class='attribute'>" + data.PIN + "</span>";
		html = html + "<br>"
		html = html + "<span class='varname'>Owner:</span> <span class='attribute'>" + data.Owner + "</span>";
		html = html + "<br>"
		html = html + "<span class='varname'>Acres:</span> <span class='attribute'>" + data.Legal_Acre + "</span>";
		html = html + "<br>"
		html = html + "<span class='varname'>Year Built: </span> <span class='attribute'>" + data.year_built + "</span>";
		html = html + "<br>"
		html = html + "<span class='varname'>Assessed Land Value: </span> <span class='attribute'>" + data.Land_Value + "</span>";
		html = html + "<br>"
		html = html + "<span class='varname'>Assessed Building Value: </span> <span class='attribute'>" + data.Bldg_Value + "</span>";
		return html;
		//this will return the string to the calling function
		
	}
*/