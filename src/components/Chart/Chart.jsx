import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { formatCurrency } from 'pages/StatisticsTab';
import { StyledChartContainer, TextInsideDoughnut } from './Chart.styled';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Chart = ({ expensesData, totalExpenses }) => {
  const data = {
    datasets: [
      {
        data: expensesData.map(expence => expence.sum),
        backgroundColor: expensesData.map(expence => expence.color),
        borderColor: expensesData.map(expence => expence.color),
        borderWidth: 2,
      },
    ],
  };
  return (
    <StyledChartContainer>
      <div
        style={{
          position: 'relative',
        }}
      >
        <Doughnut
          data={data}
          width={288}
          height={288}
          options={{
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
                position: 'bottom',
              },
              title: {
                display: true,
                text: 'Doughnut Chart',
              },
            },
            cutout: 100,
          }}
        />
        <TextInsideDoughnut text={`₴ ${formatCurrency(totalExpenses)}`} />
      </div>
    </StyledChartContainer>
  );
};
