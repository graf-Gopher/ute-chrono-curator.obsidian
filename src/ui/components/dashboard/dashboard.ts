import { DailySummary } from "lib/stores/dailySummary";
import { secondsToTimeString } from "lib/util/millisecondsToTimeString";
import { CurrentTimer } from "lib/stores/currentTimer";
  import { secondsToTimeString } from "lib/util/millisecondsToTimeString";
  import { settingsStore } from "lib/util/stores";
  import {DashboardSettings} from "../../../../../../interfaces/dashboard";

export class Dashboard {
  public settings: DashboardSettings;
  public title: string = "";
  public totalTime: string = "";
  public barList: {
    color: string;
    percentage: number;
    text: string
  } [] = [];
  public projectList: {
    color: string;
    duration: string;
    name: string;
  }[] = [];
  public duration_seconds: number;
  
  public init(){
    this.barList = computeList(DailySummary);
    this.projectList = computeList(DailySummary, duration_seconds);
  }

  private computeList(summary: typeof DailySummary, current_timer_duration_seconds?: number) {
    if(current_timer_duration_seconds){
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
    }else{
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
    }
    
  };
}