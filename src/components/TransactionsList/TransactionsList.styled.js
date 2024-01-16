import styled from 'styled-components';

export const StyledAddTransactionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 40px;
  bottom: 41px;
  width: 44px;
  height: 44px;
  background: linear-gradient(
    96.76deg,
    #ffc727 -16.42%,
    #9e40ba 97.04%,
    #7000ff 150.71%
  );
  border: none;
  border-radius: 50%;
  color: #fff;
  cursor: pointer;
  z-index: 10;
  &:hover {
    box-shadow: 1px 9px 15px 1px rgba(0, 0, 0, 0.4);
  }
  @media screen and (min-width: 1280px) {
    position: absolute;
  }
`;
export const StyledImg = styled.img`
  width: 200px;
  @media screen and (max-width: 1280px) {
    width: 120px;
  }
  @media screen and (max-width: 767.98px) {
    width: 100px;
  }
`;
export const Wrapper = styled.div`
  margin-top: 75px;
  margin-bottom: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1279.98px) {
    width: 800px;
    margin-top: 150px;
  }
`;

export const StyledAlert = styled.h3`
  margin-top: 30px;
  font-size: 15px;

  @media screen and (min-width: 767.98px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 20px;
    font-size: 30px;
  }
`;
