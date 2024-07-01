<script lang="ts">
  import { Bar } from "./bar";

  const bar: any = new Bar();
</script>

<div class="chart-bar">
  <canvas bind:this={bar.barChart}></canvas>
</div>
