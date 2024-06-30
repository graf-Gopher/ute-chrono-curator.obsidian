<script lang="ts">
  import {Dashboard as ds} from "./dashboard";
  import Bar from 'charts/bar.svelte';
  import Donat from 'charts/donat.svelte';
  import Projects from 'lists/projects.svelte';
  import Detail from 'lists/detail.svelte';
</script>

<h3 class="header">
  <span class="title">{ds.title}</span>
  <span class="divider">•</span>
  <span class="total-time">{ds.totalTime}</span>
</h3>

<div class="charts">
  <Bar class="bar" {...ds.data}/>
</div>

<div class="projects">
  <div class="lists">
  <List class="list" {...ds.data}/>
<Detail class="detail" {...ds.selected}/>    
  </div>
  <Donat class="donat" {...ds.data}/>
</div>

<style>
  @import "./dashboard";
</style>