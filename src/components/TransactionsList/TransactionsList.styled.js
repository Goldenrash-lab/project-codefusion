import styled from 'styled-components';

export const TableWrap = styled.div`
  width: 800px;
  margin: 0 auto;
  /* border-left: 1px solid #d9d9d9; */
  min-height: 60vh;
  padding-left: 69px;
  padding-right: 16px;
  padding-top: 46px;

  /* background: radial-gradient(at 100% 0, #20033e 0, transparent 50%) repeat
      scroll 0 0,
    radial-gradient(at 0 0, #33184e 0, transparent 100%) repeat scroll 0 0,
    radial-gradient(at 80% 90%, #702686 0, transparent 50%) repeat scroll 0 0,
    radial-gradient(at 42% 20%, #6d54eb 0, transparent 50%) repeat scroll 0 0,
    #302e8e; */
`;

export const StyledTable = styled.table``;
export const WrapTable = styled.div`
  height: 420px;
  overflow-x: hidden;
  overflow-y: auto;
`;

export const StyledThead = styled.tr`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 715px;
  height: 56px;
  padding: 20px 16px;
  border-radius: 8px;
  background: rgba(82, 59, 126, 0.8);
`;

export const StyledAddTransactionButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
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
`;

export const StyledTheadItem = styled.th`
  width: 100px;
  font-size: 16px;
  font-weight: 600;
  text-align: ${props =>
    props.$sum ? 'end' : props.$type ? 'center' : 'start'};
`;
