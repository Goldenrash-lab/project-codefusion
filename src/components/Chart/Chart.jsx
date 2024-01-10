import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { styled } from 'styled-components';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  //   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      //   label: '# of Votes',
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

export const Chart = () => {
  return (
    <StyledChartContainer>
      <Doughnut
        data={data}
        width={288}
        height={288}
        options={{ maintainAspectRatio: false }}
      />
    </StyledChartContainer>
  );
};

const StyledChartContainer = styled.div`
  margin-right: 32px;
  width: 288px;
  height: 288px;
`;
