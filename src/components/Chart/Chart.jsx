import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { formatCurrency } from 'pages/StatisticsTab';
import { StyledChartContainer, TextInsideDoughnut } from './Chart.styled';
import { useMediaQuery } from 'react-responsive';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Chart = ({ categoriesSummary, expenseSummary }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 768 });
  const isMobile = useMediaQuery({ maxWidth: 480 });

  let doughnutSize = 288;

  if (isTablet) {
    doughnutSize = 336;
  } else if (isMobile) {
    doughnutSize = 280;
  } else if (isDesktop) {
    doughnutSize = 288;
  }

  let data;
  if (categoriesSummary.length > 0) {
    data = {
      datasets: [
        {
          data: categoriesSummary.map(expense => expense.total),
          backgroundColor: categoriesSummary.map(expense => expense.color),
          borderColor: categoriesSummary.map(expense => expense.color),
          borderWidth: 2,
        },
      ],
    };
  } else {
    data = {
      datasets: [
        {
          data: [1],
          backgroundColor: ['transparent'],
          borderColor: ['#d8c5c5'],
          borderWidth: 1,
        },
      ],
    };
  }

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
        <TextInsideDoughnut text={`₴ ${formatCurrency(expenseSummary)}`} />
      </div>
    </StyledChartContainer>
  );
};
