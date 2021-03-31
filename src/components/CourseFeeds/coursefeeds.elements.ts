import styled from "styled-components";

export const CourseFeedsWrap = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0px 10px;
`;

export const WriteFeedWrap = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid ${(props) => props.theme.primaryColorLighter};
  border-radius: 5px;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.primaryColorLighter};
  display: flex;
  align-items: center;
  cursor: pointer;
  & > .coursefeeds__input {
    border: 1px solid ${(props) => props.theme.primaryColorLighter};
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 10%), 0 0px 2px rgb(0 0 0 / 10%);
    flex: 1;
    margin-left: 10px;
    margin-top: -1px;
  }
  span {
    font-size: 14px;
    margin-left: 20px;
    font-weight: 500;
    color: ${(props) => props.theme.text};
  }
`;

export const FeedsListWrap = styled.div`
  width: 100%;
  height: 80vh;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 0px 10px;
  margin-top: 20px;
`;

export const AvatarFeedWrap = styled.div`
  height: 45px;
  width: 45px;
  overflow: hidden;
  border-radius: 50px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
