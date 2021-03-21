import styled from "styled-components";
import { Input, TextArea } from "../../styles/uiKit";

export const CreateCourseWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 80%;
  max-width: 900px;
  padding: 5px 60px;
  margin: 0 auto;
  h3 {
    font-size: 30px;
  }
  svg {
    font-size: 24px;
    cursor: pointer;
  }
  .arrow-bottom {
    position: absolute;
    bottom: 40%;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 10px 30px;
  }
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 10px 10px 0px 10px;
  border: 1px solid ${(props) => props.theme.primaryColorLighter};
  border-radius: 10px;
`;

export const InputCourse = styled(Input)`
  width: 100%;
  height: 40px;
  border-right: none;
  border-left: none;
  border-top: none;
  border-radius: 0;
  border-width: 2px;
  box-shadow: none;
  background-color: ${(props) => props.theme.primaryColor};
  color: ${(props) => props.theme.textSecondary};

  border-color: transparent;

  &:focus {
    border-color: ${(props) => props.theme.secondaryColor};
  }
`;

export const TextAreaCourse = styled(TextArea)`
  width: 100%;
  border-right: none;
  border-left: none;
  border-top: none;
  border-radius: 0;
  border-width: 2px;
  height: 200px;
  line-height: 20px;
  border-color: transparent;
  background-color: ${(props) => props.theme.primaryColor};

  &:focus {
    border-color: ${(props) => props.theme.secondaryColor};
  }
`;

export const CreateCourseStep = styled.div`
  width: 100%;
  text-align: center;
`;
