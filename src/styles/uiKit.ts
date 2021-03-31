import styled, { css } from "styled-components";

//components used across the wesbite
//Logo
//Divider
//Card
//Switch Between Roles
//RoundImage
//Input .input
//Input Container

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

export const InputContainer = styled.div`
  margin: 20px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 5px;
  padding-right: 20px;

  input {
    background-color: transparent;
    outline: none;
    border: none;
    width: 90%;
    padding: 5px 10px;
    color: ${(props) => props.theme.text};
  }
  svg {
    cursor: pointer;

    &:hover {
      opacity: 0.8;
      transform: translateX(-1px) translateY(-1px);
    }
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

export const CloudDetails = styled.div`
  width: fit-content;
  position: absolute;
  height: 30px;
  background-color: ${(props) => props.theme.secondaryColor};
  line-height: 30px;
  text-align: center;
  color: ${(props) => props.theme.text};
`;

export const SpanLink = styled.span`
  cursor: pointer;
  padding: 20px 0;
  font-weight: 500;
  text-decoration: underline;
`;

export const LittleButtonSpans = styled.span`
  padding: 5px 10px;
  background-color: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.primaryColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: fit-content;
  border-radius: 50px;
  margin: 10px 5px;
`;

export const Table = styled.table`
  width: 100%;
  text-align: left;

  a {
    color: ${(props) => props.theme.text};
  }
  thead {
    background-color: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.primaryColor};
    th {
      font-weight: 500;
    }
  }
  tr {
    height: 40px;
  }
  th {
    padding: 0 10px;
    border-bottom: 1px solid ${(props) => props.theme.primaryColorLighter};
    font-weight: 300;
  }
`;

export const MenuAppearing = styled.div`
  position: absolute;
  bottom: -28px;
  right: 0;
  width: 200px;
  min-height: 40px;
  background-color: ${(props) => props.theme.primaryColor};
  -webkit-box-shadow: 6px 5px 29px 0px #bfbfbf;
  box-shadow: 6px 5px 29px 0px #bfbfbf;
  z-index: 333;
  border-radius: 5px;
  div {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
    height: 40px;
    color: ${(props) => props.theme.text};
    border-bottom: 1px solid ${(props) => props.theme.primaryColorLighter};
    &:hover {
      svg {
        filter: contrast(0%);
      }
      font-weight: 600;
    }

    svg {
      position: static;
    }
  }
`;

export const ImageRound = styled.div<{ height?: string; width?: string }>`
  height: ${(props) => props.height || "40px"};
  width: ${(props) => props.width || "40px"};
  border-radius: 100px;
  overflow: hidden;
  margin: 0px 10px 0 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
