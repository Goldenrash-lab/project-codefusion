import HeaderExitIcon from 'images/Header/HeaderExitIcon';
import styled from 'styled-components';

export const HeaderSection = styled.header`
  height: 80px;
  background: linear-gradient(270deg, #2e1746 3.2%, #2e225f 99.98%);
  box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25),
    0px -3px 2px 0px rgba(0, 0, 0, 0.1) inset;
`;

export const HeaderImgLogo = styled.img``;

export const HeaderDivLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const HeaderDivExit = styled.div`
  display: flex;
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  align-items: center;
`;
export const HeaderDivContainer = styled.div`
  padding-top: 16px;
  padding-right: 16px;
  padding-left: 16px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  align-items: center;
`;
export const HeaderSpanName = styled.span`
  color: var(--white-60, rgba(255, 255, 255, 0.6));
  text-align: right;
  padding-right: 12px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const HeaderExitDivIcon = styled.div`
  opacity: 0.6;
`;
export const HeaderSpanExit = styled.span`
  color: var(--white-60, rgba(255, 255, 255, 0.6));

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-left: 8px;
`;

export const HeaderButtonExit = styled.button`
  text-decoration: none;

  border: none;
  outline: transparent;
  background: rgba(0, 0, 0, 0);
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin-left: 6px;
  &:hover,
  &:focus {
    ${HeaderSpanExit} {
      font-weight: 700;
      transition: font-weight 0.5s ease;
      color: #ffffff;
    }
    ${HeaderExitDivIcon} {
      opacity: 10;
    }
  }
`;
