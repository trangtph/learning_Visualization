<script>
  import { scaleLinear } from 'd3-scale';
  export let data = [];

  const scaleX = scaleLinear().domain([0,1000]).range([0,800])
  const scaleY = scaleLinear().domain([0,660]).range([660,0])
  const scaleColour = scaleLinear().domain([1000000,160000000]).range(["#FADBD8","#78281F"])
</script>

<style>
  svg {
      border: 1px;
      border-style: solid;
  }

  circle {
      fill-opacity: 0.5;
  }

</style>

<svg width="1000" height="660">
  {#each data.nations as datapoint}
      <circle cx={scaleX(datapoint.x_coord)} 
              cy={scaleY(datapoint.y_coord)} 
              r="5"
              style={"fill:" + scaleColour(datapoint.revenue)} />
  {/each}
</svg>