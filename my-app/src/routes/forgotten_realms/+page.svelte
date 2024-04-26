
<script>
    import { onMount } from "svelte";
    import L from "leaflet";
  
    let map;
  
    onMount(async () => {
      var map = L.map('map', {crs: L.CRS.Simple, minZoom: -5});

      var imageUrl = 'https://github.com/trangtph/Map_Forgotten_Realms/blob/6f6595211ad1d815da80e0a457fbc8e3173d874c/Map_Forgotten_Realms_off_small.png';
      var imageBounds = [[0,0], [1000,1000]];

      var image = L.imageOverlay(imageUrl, imageBounds).addTo(map);
      map.fitBounds(imageBounds);
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