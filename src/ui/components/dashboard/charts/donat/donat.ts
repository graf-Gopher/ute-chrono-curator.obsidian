import { ChartConfiguration, ChartType } from "chart.js";
import { onMount } from 'svelte';

export class Donat {
  private chartType: ChartType = "doughnut";
  private chartData: ChartConfiguration["data"] = {
    datasets: [],
    labels: [],
  };
  private chartOptions: ChartConfiguration["options"] = {
    elements: {
      line: {
        tension: 0.4,
      },
    },
    maintainAspectRatio: false,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      x: {
        grid: {
          lineWidth: 0,
        },
        ticks: {
          color: "#b3b3b3",
          font: {
            size: 18,
          },
          padding: 20,
        },
      },
      y: {
        grid: {
          color: "#5c626b",
        },
        border: {
          display: false,
        },
        ticks: {
          color: "#b3b3b3",
          font: {
            size: 18,
          },
          padding: 20,
        },
        grace: "10%",
      },
    },
  };



  public donatChart = null;

  onMount() {
    const ctx = donatChart.getContext('2d');
    const chart = new chartjs(ctx, {
      type: this.chartType,
      data: this.chartData,
      options: this.chartOptions
    });

  };

}