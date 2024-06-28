<script lang="ts">
  import {Dashboard as ds} from "./dashboard";
</script>

<h3 class="is-flex is-align-content-center">
  <span>{ds.title}</span>
  <span class="mx-2 header-divider-bullet">•</span>
  <span class="header-total-time">{ds.totalTime}</span>
</h3>

<div>
  <div class="bar-chart mt-4 is-flex">
    {#each list as e}
      <div
        class="bar-chart-element"
        style="background-color: {e.color}; width: {e.percentage}%"
        aria-label={e.text}
      />
    {/each}
  </div>
  <div />
</div>

<div>
  {#each list as e, i}
    <div class="project-row is-flex is-justify-content-space-between">
      <div class="is-flex is-align-items-center">
        <span class="project-circle" style="background-color: {e.color};" />
        <span class="ml-3 project-row-name" style="color: {e.color};">
          {e.name ? e.name : "(No project)"}
        </span>
      </div>
      <span class="project-row-duration">{e.duration}</span>
    </div>
  {/each}
</div>

<style>
  @import "./dashboard";
</style>