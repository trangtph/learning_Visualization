<script>
    import { onMount } from "svelte";
    import L from "leaflet";
  
    let map;
  
    onMount(async () => {
      var map = L.map('map', {crs: L.CRS.Simple, minZoom: -5}).setView([40.75, -74.2], 12);

      var imageUrl = 'http://www.lib.utexas.edu/maps/historical/newark_nj_1922.jpg';
      var imageBounds = [[40.799311, -74.118464], [40.68202047785919, -74.33]];

      var image = L.imageOverlay(imageUrl, imageBounds).addTo(map);

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
      height: 600px;
  }
</style>