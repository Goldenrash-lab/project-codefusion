import styled from 'styled-components';

export const TableWrap = styled.div`
  position: relative;
  width: 790px;
  margin: 0 auto;
  border-left: 1px solid #d9d9d9;
  min-height: 90vh;
  padding-left: 69px;
  padding-right: 16px;
  background: radial-gradient(at 100% 0, #20033e 0, transparent 50%) repeat
      scroll 0 0,
    radial-gradient(at 0 0, #33184e 0, transparent 100%) repeat scroll 0 0,
    radial-gradient(at 80% 90%, #702686 0, transparent 50%) repeat scroll 0 0,
    radial-gradient(at 42% 20%, #6d54eb 0, transparent 50%) repeat scroll 0 0,
    #302e8e;
`;

export const StyledTable = styled.div`
  color: var(--white);
`;

export const StyledThead = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 715px;
  height: 56px;
  border-radius: 8px;
  background: rgba(82, 59, 126, 0.8);

  span {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
  }
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

  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
