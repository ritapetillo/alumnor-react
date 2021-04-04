import styled from "styled-components";
import { Row } from "../../styles/grid";

export const HomeWrap = styled.div`
  width: 100vw;
  padding: 50px;
  min-height: 30vh;
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.primaryColor};
  h1 {
    font-size: 50px;
  }
  p {
    font-size: 20px;
  }
`;

export const HomeRow = styled(Row)`
  background-image: url("https://production-tcf.imgix.net/app/uploads/2020/03/20155636/dudley_opm-01.png?auto=format%2Ccompress&q=80&fit=crop&w=1200&h=600");
  min-height: 400px;
  padding: 60px 60px;
  h1 {
    font-size: 60px;
    text-shadow: 2px 1px 3px rgba(206, 89, 55, 0.73);
  }
`;
export const HomeWrapBottom = styled.div`
  width: 100vw;
  padding: 50px;
  min-height: 30vh;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.primaryColor};
  h1 {
    font-size: 70px;
  }
  p {
    font-size: 20px;
  }
`;
