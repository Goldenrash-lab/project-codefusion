import styled from 'styled-components';

export const StyledThead = styled.tr`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 704px;
  height: 56px;
  padding: 20px 0px 20px 16px;
  border-radius: 8px;
  background: rgba(82, 59, 126, 0.8);

  @media screen and (min-width: 1280px) {
    width: 715px;
  }
`;

export const StyledTheadItem = styled.th`
  width: ${props => (props.$width ? '90px' : '100px')};
  font-size: 16px;
  font-weight: 600;
  text-align: ${props =>
    props.$sum ? 'end' : props.$type ? 'center' : 'start'};

  &:last-child {
    width: 120px;
  }
`;
export const StyledTable = styled.table``;
export const WrapTable = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;

  @media screen and (min-width: 1280px) {
    height: 430px;
    overflow-x: hidden;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 2px;
    }
    &::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.2);
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--transparency-20);
    }
  }
`;

export const WrapperBlock = styled.div`
  width: 704px;
  margin-top: 20px;
  @media screen and (min-width: 1280px) {
    width: 100%;
    padding-left: 49px;
    padding-right: 16px;
    margin-top: 46px;
  }
`;
