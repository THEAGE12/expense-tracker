import React, { useState, useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const ChartComponent = ({ transactions }) => {
  const [chartVisible, setChartVisible] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    const createChart = () => {
      const ctx = document.getElementById('myChart').getContext('2d');
      const newChart = new Chart(ctx, {
        type: 'bar', // Set your default chart type
        data: {
          labels: transactions.map((transaction) => transaction.text),
          datasets: [
            {
              label: 'Amount',
              data: transactions.map((transaction) => transaction.amount),
              backgroundColor: transactions.map(
                (transaction) => (transaction.amount < 0 ? 'rgba(255,99,132,0.6)' : 'rgba(75,192,192,0.6)')
              ),
            },
          ],
        },
        options: {
          scales: {
            y: {
              type: 'linear',
              position: 'left',
              beginAtZero: true,
            },
          },
        },
      });

      chartRef.current = newChart;
    };

    const updateChart = () => {
      if (chartRef.current) {
        // Update the chart when transactions change
        chartRef.current.data.labels = transactions.map((transaction) => transaction.text);
        chartRef.current.data.datasets[0].data = transactions.map((transaction) => transaction.amount);
        chartRef.current.data.datasets[0].backgroundColor = transactions.map(
          (transaction) => (transaction.amount < 0 ? 'rgba(255,99,132,0.6)' : 'rgba(75,192,192,0.6)')
        );

        chartRef.current.update();
      }
    };

    if (chartRef.current && chartVisible) {
      updateChart();
    } else if (chartVisible) {
      createChart();
    }

    // Cleanup when component unmounts
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [transactions, chartVisible]); // Include transactions and chartVisible in the dependency array

  const toggleChartVisibility = () => {
    setChartVisible(!chartVisible);
  };

  const buttonStyle = {
    padding: '10px',
    margin: '10px',
    backgroundColor: '#4CAF50', /* Green */
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div>
      <button style={buttonStyle} onClick={toggleChartVisibility}>
        {chartVisible ? 'Hide Chart' : 'Show Chart'}
      </button>
      {chartVisible && <canvas id="myChart" width="400" height="200"></canvas>}
    </div>
  );
};

export default ChartComponent;