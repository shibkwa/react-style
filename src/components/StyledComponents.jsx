import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>-　Styled Components　-</STitle>
      {/* <p className="title">-Styled Components-</p> */}
      <SButton>FIGHT!!</SButton>
      {/* <button className="button">FIGHT!!</button> */}
    </SContainer>
  );
};

//styleと見分けがつかないのでS付ける
const SContainer = styled.div`
  border: solid 2px #392eff;
  border-radius: 20px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const STitle = styled.p`
  margin: 0;
  color: #3d84a8;
`;
const SButton = styled.button`
  background-color: #abedd8;
  border: none;
  padding: 8px;
  border-radius: 20px;
  &:hover {
    background-color: #46cdcf;
    color: #fff;
    cursor: pointer;
  }
`;
