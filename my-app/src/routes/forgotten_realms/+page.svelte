
<script>
    import { onMount } from "svelte";
    import L from "leaflet";



    let map;
  
    onMount(async () => {
      var map = L.map('map', {crs: L.CRS.Simple, minZoom: -1});

      var imageUrl = 'https://github.com/trangtph/Map_Forgotten_Realms/blob/main/Map_Forgotten_Realms_off.png?raw=true';
      var imageBounds = [[0,0], [660,1000]];
      var image = L.imageOverlay(imageUrl, imageBounds).addTo(map);
      map.fitBounds(imageBounds);

      var marker = L.marker([60 , 380]).addTo(map);

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