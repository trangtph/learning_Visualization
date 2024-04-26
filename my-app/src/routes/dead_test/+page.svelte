<script>
    export let data;
  </script>
  
  <ul>
    {#each data.nations as nation}
    <li>id: {nation.id}</li>
    {/each}
  </ul>