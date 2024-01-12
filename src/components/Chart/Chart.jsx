import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { formatCurrency } from 'pages/StatisticsTab';
import { StyledChartContainer, TextInsideDoughnut } from './Chart.styled';
import { useMediaQuery } from 'react-responsive';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Chart = ({ expensesData, totalExpenses }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 614, maxWidth: 818 });
  const isMobile = useMediaQuery({ maxWidth: 480 });

  let doughnutSize = 288;

  if (isTablet) {
    doughnutSize = 336;
  } else if (isMobile) {
    doughnutSize = 280;
  } else if (isDesktop) {
    doughnutSize = 288;
  }

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
    <StyledChartContainer $doughnutSize={doughnutSize}>
      <div
        style={{
          position: 'relative',
        }}
      >
        <Doughnut
          data={data}
          width={doughnutSize}
          height={doughnutSize}
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
            cutout: doughnutSize / 2.88,
          }}
        />
        <TextInsideDoughnut text={`₴ ${formatCurrency(totalExpenses)}`} />
      </div>
    </StyledChartContainer>
  );
};
