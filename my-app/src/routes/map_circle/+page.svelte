
<script>
  import { onMount } from "svelte";
  import L from "leaflet";
  import * as d3 from 'd3';

  onMount(async function() { 
  let data = await d3.csv('https://raw.githubusercontent.com/trangtph/Programming/57d492490c8c4e1624ace7d9d1af87b5bd0b4326/Processed_data/nation_region_coordinate.csv');
  console.log(data); 

  var map = L.map('map', {crs: L.CRS.Simple, minZoom: -1});

    var imageUrl = 'https://github.com/trangtph/Map_Forgotten_Realms/blob/main/Map_Forgotten_Realms_off.png?raw=true';
    var imageBounds = [[0,0], [660,1000]];
    var image = L.imageOverlay(imageUrl, imageBounds).addTo(map);
    map.fitBounds(imageBounds);

  for (var i in data) {
    var row = data[i];

    var circle = L.circle([row.y_coord, row.x_coord],{radius: row.id});
    
    circle.addTo(map);
  } 

  });
</script>

<svelte:head>
<link
  rel="stylesheet"
  href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
  crossorigin=""
/>

<script
  src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
  crossorigin=""
>
</script>
</svelte:head>

<div id="map" />

<style>
#map {
    height: 660px;
}
</style>
