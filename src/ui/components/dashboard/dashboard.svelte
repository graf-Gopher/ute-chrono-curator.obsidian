<script lang="ts">
  import {Dashboard as ds} from "./dashboard";
  import Bar from 'bar.svelte';
  import Donat from 'donat.svelte';
</script>

<h3 class="header">
  <span class="title">{ds.title}</span>
  <span class="divider">•</span>
  <span class="total-time">{ds.totalTime}</span>
</h3>

<div class="charts">
  <Bar {...ds.data}/>
</div>

<div class="list">
  <List {...ds.data}/>
  <Donat {...ds.data}/>
</div>

<style>
  @import "./dashboard";
</style>