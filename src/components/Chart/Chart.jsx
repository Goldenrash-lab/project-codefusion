import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { styled } from 'styled-components';
import { formatCurrency } from 'pages/StatisticsTab';

ChartJS.register(ArcElement, Tooltip, Legend);

export const Chart = ({ expensesData, totalExpenses }) => {
  const data = {
    datasets: [
      {
        data: expensesData.map(expence => expence.sum),
        backgroundColor: expensesData.map(expence => expence.color),
        borderColor: expensesData.map(expence => expence.color),
        borderWidth: 1,
      },
    ],
  };
  return (
    <StyledChartContainer>
      <div style={{ position: 'relative' }}>
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

const TextInsideDoughnut = ({ text }) => {
  return (
    <div
      style={{
        position: 'absolute',
        textAlign: 'center',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'Poppins',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: '600',
        lineHeight: 'normal',
      }}
    >
      {text}
    </div>
  );
};

const StyledChartContainer = styled.div`
  margin-right: 32px;
  width: 288px;
  height: 288px;
`;
