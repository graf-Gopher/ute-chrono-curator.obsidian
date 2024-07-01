<script lang="ts">
  import { Dashboard } from "./dashboard";
  import Bar from "./charts/bar/bar.svelte";
  import Donat from "./charts/donat/donat.svelte";
  import List from "./lists/list/list.svelte";
  import Detail from "./lists/detail/detail.svelte";

  const ds: any = new Dashboard();
</script>

<h3 class="header">
  <span class="title">{ds.title}</span>
  <span class="divider">•</span>
  <span class="total-time">{ds.totalTime}</span>
</h3>

<div class="charts">
  <div class="bar">
    <Bar {...ds.data} />
  </div>
</div>

<div class="projects">
  <div class="lists">
    <List class="list" {...ds.data} />
    <Detail class="detail" {...ds.selected} />
  </div>
  <Donat class="donat" {...ds.data} />
</div>

<style>
  @import "./dashboard";
</style>
