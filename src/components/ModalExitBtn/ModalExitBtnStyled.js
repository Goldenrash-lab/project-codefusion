import styled from 'styled-components';

export const ExitContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;

  z-index: 21;
  @media only screen and (max-width: 767px) {
  }
`;

export const ExitContainerDivForm = styled.div`
  @media only screen and (max-width: 767px) {
    align-items: normal;
    display: flex;
  }
`;

export const ExitContainerBTNText = styled.div`
  z-index: 50;
  min-width: 535px;
  min-height: 450px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 52px;

  border-radius: 8px;
  background: var(--Form-color, rgba(255, 255, 255, 0.1));
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);
  @media only screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
  }
`;

export const ExitContainerBTN = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const ExitBTNLogout = styled.button`
  min-width: 280px;
  min-height: 50px;
  color: #fff;
  text-align: center;

  font-size: 18px;

  font-weight: 400;

  letter-spacing: 1.8px;
  text-transform: uppercase;
  border-radius: 20px;
  background: var(
    --button-gradient,
    linear-gradient(97deg, #ffc727 -16.42%, #9e40ba 97.04%, #7000ff 150.71%)
  );
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  border: none;
  cursor: pointer;
  @media only screen and (min-width: 768px) {
    min-width: 300px;
  }
`;
export const ExitBTNCancel = styled.button`
  color: #623f8b;
  text-align: center;
  min-width: 280px;
  min-height: 50px;
  font-size: 18px;

  font-weight: 400;

  letter-spacing: 1.8px;
  text-transform: uppercase;
  border-radius: 20px;
  background: #fcfcfc;
  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
  border: none;
  cursor: pointer;
  @media only screen and (min-width: 767px) {
    min-width: 300px;
  }
`;

export const ExitSpanText = styled.span`
  color: #fff;
  width: 215px;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media only screen and (min-width: 768px) {
    min-width: 300px;
  }
`;
export const ExitSpanMoneyGuard = styled.span`
  color: #fbfbfb;

  font-size: 27px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const ExitContainerLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ExitContainerGradient = styled.div`
  border-radius: 353px;
  background: rgba(47, 21, 176, 0.73);
  filter: blur(100px);
  min-width: 353px;
  min-height: 353px;
  z-index: -1;
  position: absolute;
`;
export const ExitContainerDivTest = styled.div`
  position: absolute;
  z-index: 20;
  width: 100%;
  height: 100%;

  background: rgba(34, 13, 91, 0.23);
  backdrop-filter: blur(3.5px);
`;
