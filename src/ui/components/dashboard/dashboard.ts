import { DailySummary } from "lib/stores/dailySummary";
import { secondsToTimeString } from "lib/util/millisecondsToTimeString";

export class Dashboard {
  public title: string = "";
  public totalTime: string = "";
  public list: {
    color: string;
    percentage: number;
    text: string
  } [] = [];
  
  constructor(){
    this.list = compteList(DailySummary);
  }

  private computeList(summary: typeof DailySummary) {
    const total: number = summary.total_seconds;

    let tmp_list = summary.projects_breakdown.map((project) => ({
      color: project.$project?.color ?? "var(--text-muted)",
      // min width = 5% (before rescaling)
      percentage: Math.max((project.tracked_seconds / total) * 100, 5),
      text: `${project.$project?.name ?? "(No project)"} (${secondsToTimeString(
        project.tracked_seconds,
      )})`,
    }));

    // Rescale the widths if necessary
    const sum = tmp_list.reduce((a, b) => a + b.percentage, 0);
    if (sum > 100) {
      tmp_list.forEach((e) => (e.percentage = (e.percentage / sum) * 100));
    }

    return tmp_list;
  };
  
  
  // ///////////
    import { CurrentTimer } from "lib/stores/currentTimer";
  import { DailySummary } from "lib/stores/dailySummary";
  import { secondsToTimeString } from "lib/util/millisecondsToTimeString";
  import { settingsStore } from "lib/util/stores";

  export let duration_seconds: number;

  let list: { color: string;duration: string;name: string } [];

  $: list = computeList($DailySummary, duration_seconds);

  const computeList = (
    summary: typeof $DailySummary,
    current_timer_duration_seconds: number,
  ) => {
    return summary.projects_breakdown.map((project) => {
      const currentTimerSeconds =
        $settingsStore.updateInRealTime &&
        $CurrentTimer?.project_id === project.project_id ?
        current_timer_duration_seconds ?? 0 :
        0;

      return {
        color: project.$project?.color ?? "var(--text-muted)",
        duration: secondsToTimeString(
          project.tracked_seconds + currentTimerSeconds,
        ),
        name: project.$project?.name ?? "(No project)",
      };
    });
  };
}