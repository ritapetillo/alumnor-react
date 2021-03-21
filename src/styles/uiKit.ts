import styled, { css } from "styled-components";

//components used across the wesbite
//Logo
//Divider
//Card
//Switch Between Roles

export const Logo = styled.div`
  font-family: "rubik";
  font-size: 28px;
  font-weight: 900;
  margin-right: 20px;
`;

export const Divider = styled.div`
  height: 1px;
  width: 60%;
  background-color: ${(props) => props.theme.primaryColorLighter};
  margin: 20px 0;
`;

export const Card = styled.div`
  margin: 10px 0;
  padding: 20px;
  background-color: ${(props) => props.theme.primaryColorLighter};
  width: 100%;
  border-radius: 10px;
  min-height: 200px;
  max-height: 400px;
  color: ${(props) => props.theme.textSecondary};

  > .card__header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    h3 {
      font-size: 18px;
    }
    width: 80%;
    img {
      height: 30px;
      margin-right: 20px;
      padding: 6px;
      background-color: rgb(166, 188, 226, 0.3);
      border-radius: 50px;
    }
  }

  .card__body {
    display: flex;
    flex-direction: column;
    padding: 10px;
    span {
      font-size: 12px;
    }
  }
`;

export const CardList = styled.span`
  font-size: 14px;
  margin-top: 5px;
  img {
    height: 10px;
    margin-right: 5px;
  }
`;

export const SwitchRoles = styled.span`
  color: ${(props) => props.theme.text};
  padding: 20px 20px 10px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 700;
  border-bottom: ${(props) => `1px solid ${props.theme.primaryColorLighter}`};
  &.active {
    border-bottom: ${(props) => `1px solid ${props.theme.textSecondary}`};
    color: ${(props) => props.theme.textSecondary};
  }
  cursor: pointer;
`;

export const RoundImage = styled.div`
  height: 50px;
  width: 50px;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%fit-content;
    object-fit: cover;
  }
`;

export const Input = styled.input`
  border: 1px solid rgb(220, 222, 225);
  border-radius: 4px;
  color: rgb(0, 35, 51);
  cursor: text;
  font-size: 15px;
  height: 40px;
  line-height: 20px;
  padding: 0px 10px;
  &:focus {
    border-color: ${(props) => props.theme.primaryColorLighter};
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  border: 1px solid rgb(220, 222, 225);
  border-radius: 4px;
  color: rgb(0, 35, 51);
  cursor: text;
  font-size: 15px;
  height: 40px;
  line-height: 20px;
  padding: 0px 10px;
  font-family: ${(props) => props.theme.fontPrimary};

  &:focus {
    border-color: ${(props) => props.theme.primaryColorLighter};
    outline: none;
  }
  &::placeholder {
    font-family: ${(props) => props.theme.fontPrimary};
  }
`;

export const ButtonLightBlue = styled.span`
  padding: 0px 20px;
  height: 40px;
  color: black;
  background-color: #00bbf0;
  vertical-align: middle;
  font-weight: 700;
  font-size: 16px;
  border: 1px solid $border-color;
  cursor: pointer;
  position: relative;
  border-radius: 5px;
  outline: none;
  &:hover {
    background-color: rgb(242, 242, 242);
    border-color: rgb(242, 242, 242);
  }
`;
interface IStatusBar {
  step: number;
}
export const StatusBar = styled.div<IStatusBar>`
  width: 80%;
  height: 30px;
  display: flex;
  align-items: center;
  background: ${(props) => props.theme.primaryColorLighter};
  border-radius: 20px;
  position: absolute;
  top: 100px;
  padding: 10px;
  span {
    display: block;
    background: ${(props) => props.theme.secondaryColor};
    border-radius: 20px;
    height: 20px;
    width: ${(props) =>
      props.step === 0 ? `4%` : props.step === 1 ? `50%` : `100%`};
  }
`;
