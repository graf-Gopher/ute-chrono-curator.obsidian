export interface DashboardSettings {
  barStyle: ChartTypes;
}

enum ChartTypes {
  combo = "combo",
  stack = "stack",
  detail = "detail"
}