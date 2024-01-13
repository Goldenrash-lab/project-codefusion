import styled from 'styled-components';

export const StyledThead = styled.tr`
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 56px;
  padding: 20px 0px 20px 16px;
  border-radius: 8px;
  background: rgba(82, 59, 126, 0.8);

  @media screen and (max-width: 1280px) {
    padding: 20px 10px 20px 16px;
  }
`;

export const StyledTheadItem = styled.th`
  //padding-right: 10px;
  width: ${props => (props.$width ? '90px' : '100px')};
  font-size: 16px;
  font-weight: 600;
  text-align: ${props =>
    props.$sum ? 'end' : props.$type ? 'center' : 'start'};

  &:last-child {
    width: 120px;
  }
`;
export const StyledTable = styled.table`
  width: 704px;
  margin: 0 auto;
  margin-top: 20px;

  @media screen and (min-width: 1280px) {
    width: 715px;
    padding-left: 69px;
    padding-right: 20px;
    margin-top: 46px;
  }
  /* background: radial-gradient(at 100% 0, #20033e 0, transparent 50%) repeat
      scroll 0 0,
    radial-gradient(at 0 0, #33184e 0, transparent 100%) repeat scroll 0 0,
    radial-gradient(at 80% 90%, #702686 0, transparent 50%) repeat scroll 0 0,
    radial-gradient(at 42% 20%, #6d54eb 0, transparent 50%) repeat scroll 0 0,
    #302e8e; */
`;
export const WrapTable = styled.div`
  height: 400px;
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
`;

export const StyledAlert = styled.h3`
  margin-top: 30px;
  text-align: center;
`;
