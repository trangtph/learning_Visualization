<script>
    export let data;
  </script>
  
  <ul>
    {#each data.flowers as flower}
    <li>Length: {flower.sepalLength}</li>
    {/each}
  </ul>