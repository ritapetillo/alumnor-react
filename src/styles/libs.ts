import styled, { css } from "styled-components";

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
      height: 40px;
      margin-right: 20px;
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
