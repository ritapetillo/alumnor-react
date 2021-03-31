import styled from "styled-components";
import { Row } from "../../styles/grid";
import { ImageRound, InputContainer, MenuAppearing } from "../../styles/uiKit";

export const SingleFeedWrap = styled.div`
  margin-top: 10px;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 10%), 0 0px 2px rgb(0 0 0 / 10%);
  width: 100%;
  border: 0px solid ${(props) => props.theme.primaryColorLighter};
  border-radius: 5px;
  padding-bottom: 10px;
`;

export const SingleFeedHeader = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 20px 20px;
  position: relative;
  span {
    margin-top: -2px;
  }
  .feed__author {
    font-weight: 600;
  }
  .feed__date,
  .feed__role {
    font-size: 12px;
    color: ${(props) => props.theme.textDarker};
  }
`;

export const SingleFeedBody = styled.div`
  width: 100%;
  img {
    width: calc(100% + 40px);
    margin-left: -20px;
    margin-right: -20px;
  }
  p {
    padding: 0px 20px 20px;
  }
`;

export const SingleFeedFooter = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0px 20px 20px;
  svg {
    font-size: 22px;
    margin: 0 10px;
  }
  .feeds__footer-icons {
    font-size: 12px;
    color: ${(props) => props.theme.textDarker};
    align-items: center;
    margin-bottom: 10px;
    margin-top: -15px;
    padding-top: 10px;
    text-align: right;
    border-top: 1px solid ${(props) => props.theme.primaryColorLighter};
    cursor: pointer;
  }
`;

export const SingleFeedInputFooter = styled(InputContainer)`
  width: 100%;
  margin-top: 20px;
  border: 1px solid ${(props) => props.theme.primaryColorLighter};
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 10%), 0 0px 2px rgb(0 0 0 / 10%);
  margin: 0;
  height: 35px;
`;
export const FeedsMenuAppearing = styled(MenuAppearing)`
  top: 20px;
  height: fit-content;
  font-size: 14px;
  width: 150px;
`;

export const ImageFeed = styled(ImageRound)``;

export const SingleCommentWrap = styled.div`
  padding: 5px 10px;
  width: 90%;
  margin: 10px auto;

  .comment__body {
    background-color: ${(props) => props.theme.primaryColorLighter};
    border-radius: 10px;
    flex: 1;
    padding: 5px;
    font-size: 13px;
    display: flex;
    flex-direction: column;
    &-author {
      font-weight: 600;
      margin-bottom: 2px;
    }
  }
`;
export const SingleCommentFooter = styled(Row)`
  margin-top: 3px;
  font-size: 11px;
  justify-content: space-between;
  padding-left: 50px;
  color: ${(props) => props.theme.text};
  svg,
  span {
    margin-left: 5px;
    cursor: pointer;
  }
`;
