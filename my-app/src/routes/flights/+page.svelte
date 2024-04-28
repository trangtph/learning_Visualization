<script>
    import Scatterplot from '../../components/Scatterplot.svelte';
    export let data = [];
  </script>
  
  <h1>Airports</h1>
  <Scatterplot datapoints={data.flights} long="from_long" lat="from_lat" /> 
