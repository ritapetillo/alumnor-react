import styled from "styled-components";
import { Card } from "../../styles/uiKit";

export const CardCourseDashWrap = styled(Card)`
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  a:link {
    text-decoration: none;
    color: ${(props) => props.theme.text};
    margin-top: 5px;
  }
  span {
    width: 100%;
    font-size: 13px;
    color: ${(props) => props.theme.textSecondary};
    display: flex;
    justify-content: space-between;
    svg {
      color: green;
      font-size: 18px;
    }
  }
`;
