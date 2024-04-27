<script>
  import { scaleLinear } from 'd3-scale';
  export let data = [];

  const scaleX = scaleLinear().domain([0,1000]).range([0,800])
  const scaleY = scaleLinear().domain([0,660]).range([660,0])
</script>

<style>
  svg {
      border: 1px;
      border-style: solid;
  }
  circle {
      fill: steelblue;
      fill-opacity: 0.5;
  }
</style>

<svg width="1000" height="660">
  {#each data.nations as datapoint}
      <circle cx={scaleX(datapoint.x_coord)} cy={scaleY(datapoint.y_coord)} r="5" />
  {/each}
</svg>