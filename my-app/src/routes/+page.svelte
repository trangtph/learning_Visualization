<script>
  import Scatterplot from '../components/Scatterplot.svelte';
  export let data = [];
</script>

<h1>Airports</h1>
<Scatterplot datapoints={datapoints_from_app} long="from_long" lat="from_lat" />
<Scatterplot datapoints={datapoints_from_app} long="to_long" lat="to_lat" />