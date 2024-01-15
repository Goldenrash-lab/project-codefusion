import styled from 'styled-components';

export const StyledCoin = styled.span`
  transform: translateZ(1px);
  &::after {
    content: '$';
    display: inline-block;
    width: 148px;
    height: 148px;
    border-radius: 50%;
    text-align: center;
    line-height: 40px;
    font-size: 90px;
    font-weight: bold;
    background: #ffd700;
    color: #daa520;
    border: 4px double;
    box-sizing: border-box;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
    animation: coin-flip 4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @keyframes coin-flip {
    0%,
    100% {
      animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
    }
    0% {
      transform: rotateY(0deg);
    }
    50% {
      transform: rotateY(1800deg);
      animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
    }
    100% {
      transform: rotateY(3600deg);
    }
  }
`;
export const StyledLoader = styled.div`
  position: fixed;
  display: flex;
  z-index: 9999;
  justify-content: center;
  align-items: center;
  background-color: rgb(0 0 0 / 50%);
  min-height: 100vh;
  backdrop-filter: blur(10px);
  min-width: 100vw;
`;
