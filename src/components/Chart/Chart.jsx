import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { styled } from 'styled-components';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  datasets: [
    {
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'FED057',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'FED057',
      ],
      borderWidth: 1,
    },
  ],
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

export const Chart = () => {
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
        <TextInsideDoughnut text="₴ 24 000.00" />
      </div>
    </StyledChartContainer>
  );
};

const StyledChartContainer = styled.div`
  margin-right: 32px;
  width: 288px;
  height: 288px;
`;
