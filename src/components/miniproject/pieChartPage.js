import React, { useEffect } from 'react';
import ChartJS from 'chart.js/auto'; 
import { Doughnut } from 'react-chartjs-2';


const pieThickness = {
  id: 'customPieThickness',
  beforeDraw(chart) {
    const donWidth = chart.chartArea.width;
    chart.getDatasetMeta(0).data[0].outerRadius = 148;
    chart.getDatasetMeta(0).data[1].innerRadius = 80;
    chart.getDatasetMeta(0).data[1].outerRadius = 142;
    chart.getDatasetMeta(0).data[2].innerRadius = 88;
    chart.getDatasetMeta(0).data[2].outerRadius = 123;
  },
  afterDraw(chart) {
    const ctx = chart.ctx;
    const canvas = chart.canvas;
    ctx.fillStyle = '#000';
    ctx.font = '16px Arial'; 
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    const text = '65% Total New Customers';
    const textX = canvas.width / 2;
    const textY = canvas.height / 2;
    ctx.fillText(text, textX, textY);
  },
};

ChartJS.register(pieThickness); 

const data = {
  labels: ['Label 1', 'Label 2', 'Label 3'],
  datasets: [
    {
      label: '65% Total New Customers',
      data: [6, 18, 10],
      backgroundColor: [
        '#DE3163',
        '#5a32ea',
        '#E5E4E2',
      ],
      borderWidth: 0,
    },
  ],
};

const options = {
  cutout: 72,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};

const CustomerChart = () => {
  useEffect(() => {
    ChartJS.register(pieThickness);
    return () => {
      ChartJS.unregister(pieThickness);
    };
  }, []);

  return (
    <div className='bg-white flex flex-col p-6 rounded-lg' style={{ width: '270px', height: '309px',marginLeft :'40px'}}>
      <div>
        <h3 className='text-sm font-semibold md:text-base'>Customers</h3>
        <p className='text-xs text-slate-300 md:text-sm'>Customers that buy products</p>
      </div>
      <div className='flex items-center justify-center relative'>
        <div className='my-4 rounded-full bg-white p-2 shadow-lg shadow-slate-200' style={{height :'235px',width :'252px',marginLeft :'40px'}}>
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default CustomerChart;
