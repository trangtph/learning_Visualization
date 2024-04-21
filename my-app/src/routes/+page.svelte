<script>
    export let data;
    console.log()
  </script>
  
  <ul>
    {#each data.flowers as flower}
    <li>{flower.sepalWidth}</li>
    {/each}
  </ul>