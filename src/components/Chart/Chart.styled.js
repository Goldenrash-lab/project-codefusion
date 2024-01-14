import styled from 'styled-components';

export const StyledTitle = styled.h2`
  display: flex;
  justify-content: flex-start;
  width: 640px;
  font-size: 34px;
  margin-bottom: 20px;
  margin-top: 32px;
  margin-left: 84px;
  text-align: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media only screen and (min-width: 768px) and (max-width: 1279px) {
    margin-left: 32px;
    width: 336px;
  }

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    width: 280px;
    margin-left: 20px;
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  width: 715px;
  margin-left: 69px;

  @media only screen and (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
    margin-left: 0;
  }

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    width: 280px;
    margin-left: 0;
  }
`;

export const StyledStatsInfo = styled.div`
  flex-direction: column;
`;

export const StyledChartContainer = styled.div`
  margin-right: 32px;
  width: ${props => `${props.$doughnutSize}px`};
  height: ${props => `${props.$doughnutSize}px`};

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 320px) and (max-width: 767px) {
    margin-bottom: 32px;
  }
`;

export const TextInsideDoughnut = ({ text }) => {
  return (
    <div
      style={{
        position: 'absolute',
        textAlign: 'center',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontFamily: 'Poppins-SemiBold',
        fontSize: '18px',
        fontStyle: 'normal',
      }}
    >
      {text}
    </div>
  );
};
