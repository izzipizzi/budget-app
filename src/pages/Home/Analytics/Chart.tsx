import React from 'react';
import { Box } from '@mui/material';
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartOptions,
  ChartData,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import zoomPlugin from 'chartjs-plugin-zoom';
import { AnalyticsChartData } from '@pages/Home/Analytics/Analytics';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels,
  zoomPlugin,
);

interface ChartProps {
  data: AnalyticsChartData[]
}

const Sales: React.FC<ChartProps> = (props) => {
  const data : ChartData<'bar'> = {
    labels: props.data.map((item)=> item.month),
    datasets: [ {
      data: props.data.map((item)=> item.amount),
      backgroundColor: '#8234F8',
      borderRadius: 6,
      barThickness: 31,
      barPercentage:0.8,
      categoryPercentage: 0.8,
      normalized: true,
    } ],
  };
  const options : ChartOptions<'bar'> = {
    maintainAspectRatio: false,
    responsive: true,
    layout: {
      padding: {
        top: 50,
      },
    },
    scales:{
      x: {
        min: 5,
        grid: {
          display: false,
        },
        border:{
          display:false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
        border:{
          display:false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'end',
        align: 'top',
        formatter: Math.round,
        font: {
          weight: 'bold',
        },
      },
      zoom: {
        pan: {
          enabled: true,
          mode: 'x',
        },
      },
    },
  };

  return (
    <Box sx={{ width: 360, height: 150 }}>
      <Bar id="myChart" data={data} options={options}/>
    </Box>
  );
};

export default Sales;