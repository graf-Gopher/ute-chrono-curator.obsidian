<script lang="ts">
  import { Donat } from "./donat";

  const donat: any = new Donat();
</script>

<div class="chart-donat">
  <canvas bind:this={donat.donatChart}></canvas>
</div>
