import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 40px);
  background-color: rgba(0, 0, 0, 0.747);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1333;
  color: ${(props) => props.theme.textSecondary};
  .modal__body {
    height: 80vh;
    width: 80vw;
    background-color: ${(props) => props.theme.primaryColor};
    border-radius: 10px;
    overflow: hidden;
    position: absolute;
    .modal__body__close {
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 3;
      font-size: 24px;
      svg {
        cursor: pointer;
        &:hover {
          color: ${(props) => props.theme.secondaryColor};
        }
        @media screen and(max-width:768) {
          background-color: ${(props) => props.theme.primaryColor};
        }
      }
    }
  }
`;
