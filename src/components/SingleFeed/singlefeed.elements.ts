import styled from "styled-components";

export const SingleFeedWrap = styled.div`
  margin-top: 10px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 10%), 0 0px 2px rgb(0 0 0 / 10%);
  width: 100%;
  border: 0px solid ${(props) => props.theme.primaryColorLighter};
  border-radius: 5px;
  padding: 10px 20px;

  img {
    height: 200px;
  }
`;
