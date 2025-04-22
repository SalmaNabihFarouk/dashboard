import { Component } from '@angular/core';
import {
  ApexNonAxisChartSeries,
  ApexPlotOptions,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexYAxis,
  ApexStroke,
  ApexGrid,
  ApexMarkers,
  ApexLegend,
  ApexTooltip,
  ApexResponsive,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions?: ApexPlotOptions;
  dataLabels?: ApexDataLabels;
  responsive?: ApexResponsive[];
};

export type LineChartOptions = {
  series: { name: string; data: number[] }[];
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis?: ApexYAxis;
  stroke?: ApexStroke;
  markers?: ApexMarkers;
  grid?: ApexGrid;
  legend?: ApexLegend;
  tooltip?: ApexTooltip;
};
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // Bar chart
  salesDetails: LineChartOptions = {
    series: [{ name: 'Sales', data: [45, 67, 84, 50, 42, 55, 61, 59, 72, 64] }],
    chart: { type: 'bar', height: 300 },
    xaxis: {
      categories: ['5k', '10k', '15k', '20k', '25k', '30k', '35k', '40k', '45k', '50k'],
    },
  };

  // Pie chart
  customerAnalytics: ChartOptions = {
    series: [65, 25, 10],
    chart: {
      type: 'donut',
      height: 300,
    },
    labels: ['Optimistic', 'Pessimistic', 'Unsure'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };

  // Line chart
  salesAnalytics: LineChartOptions = {
    series: [
      {
        name: 'Sales',
        data: [0, 50, 60, 30, 25, 35, 60, 100],
      },
    ],
    chart: {
      type: 'line',
      height: 300,
    },
    xaxis: {
      categories: ['2020', '2021', '2022', '2023', '2024'],
    },
  };
}
