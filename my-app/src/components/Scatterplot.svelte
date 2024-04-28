<script>
    export let datapoints = [];
    export let long = 'from_long';
    export let lat = 'from_lat';
    import { scaleLinear } from 'd3-scale';

    const scaleX = scaleLinear().domain([-180,180]).range([0,800])
    const scaleY = scaleLinear().domain([-90,90]).range([400,0])

  
    const rescale = function(x, domain_min, domain_max, range_min, range_max) {
      return ((range_max - range_min)*(x-domain_min))/(domain_max-domain_min) + range_min
    }
  </script>
  
  <style>
    circle {
      opacity: 0.5;
      fill: blue;
    }
    circle.international {
      fill: red;
    }
  </style>
  
  <svg width=1000 height=500>
    {#each datapoints as datapoint}
      <circle cx={scaleX(datapoint.from_long)}
              cy={scaleY(datapoint.from_lat)}
              r={rescale(datapoint.distance, 1, 15406, 2,10)}
              class:international="{datapoint.from_country != datapoint.to_country}" />
    {/each}
  </svg>