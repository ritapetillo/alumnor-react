import styled from "styled-components";
import { Row } from "../../styles/grid";

export const ActivityPageWrapper = styled.div`
  color: ${(props) => props.theme.textSecondary};
  background-color: ${(props) => props.theme.primaryColor};
  width: calc(100vw - 400px);
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  .quill {
    height: 400px;
    margin-top: 30px;
    margin-bottom: 30px;
    .ql-toolbar.ql-snow {
      background-color: rgb(253, 253, 253);
    }
  }
  .MuiDropzoneArea-root {
    min-height: 100px;
    background-color: ${(props) => props.theme.primaryColor};
    svg {
      font-size: 20px;
      color: ${(props) => props.theme.text};
    }
    margin-top: 40px;
  }
  .MuiTypography-h5 {
    font-size: 15px;
  }
  .MuiDropzoneArea-icon {
    height: 30px;
    margin-top: -20px;
  }
  .form-control {
    padding: 10px;
    border: 1px solid ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.text};
  }
  .rdtPicker {
    background-color: ${(props) => props.theme.primaryColor};
  }
`;

export const IconsEditViewWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 100px;
  right: 80px;
  max-width: 80px;
  cursor: pointer;
  color: ${(props) => props.theme.textSecondary};
  font-size: 24px;
  .edit {
    font-size: 24px;
  }
  svg {
    margin-left: 10px;
  }
  .delete {
    font-size: 18px;
    color: darkred;
  }
`;

export const LinksWrapper = styled(Row)`
  flex-wrap: wrap;
  margin-top: 40px;
  justify-content: flex-start;
  margin-left: -40px;
  width: 80vw;
  max-width: 1000px;

  div {
    text-align: center;
    svg.delete-file {
      position: absolute;
      top: 20px;
      right: 40px;
      z-index: 888;
      color: ${(props) => props.theme.text};
    }
  }
  a {
    margin: 10px 10px;
    padding-top: 40px;
    color: ${(props) => props.theme.textSecondary};
    text-decoration: none;
    font-size: 8px;
    text-align: center;
    display: block;
    min-height: 130px;
    min-width: 150px;
    max-width: 200px;
    padding: 10px;
    word-wrap: break-word;
    background-color: ${(props) => props.theme.primaryColorLighter};
    border-radius: 5px;
    position: relative;

    h4 {
      padding: 0;
      margin: 5px 0px;
    }
    .file-size {
      font-size: 12px;
    }

    &:hover {
      opacity: 0.8;
    }
    svg {
      font-size: 32px;
      margin-top: 20px;
    }
  }
`;
export const ContentWrap = styled.div`
  margin: 0px 0 60px;
`;

export const VideoPageWrap = styled.div`
  width: 100%;
  a:visited {
    color: ${(props) => props.theme.text};
  }

  .video-link-input {
    width: 80%;
    max-width: 600px;
    min-width: 350px;
  }

  .video-notes-title {
    margin-bottom: -0px;
  }
  .quill {
    height: 150px;
    margin-bottom: 30px;
  }
`;
export const ButtonDark = styled.div`
  /* width: 200px; */
  height: 40px;
  background: ${(props) => props.theme.secondaryColor};
  color: ${(props) => props.theme.primaryColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin: 30px 0;
  border-radius: 3px;
  cursor: pointer;
`;

export const AssignmentPageWrap = styled.div`
  width: 100%;
  a:visited {
    color: ${(props) => props.theme.text};
  }
`;

export const SubmissionWrap = styled.div`
  margin-top: 40px;
  width: 100%;
  padding: 20px;
  background-color: ${(props) => props.theme.primaryColorLighter};
  border-radius: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;

  a:visited {
    color: ${(props) => props.theme.text};
  }
`;

export const SubmissionDoneWrap = styled.div`
  background-color: transparent;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  svg {
    font-size: 30px;
  }
  h4 {
    background-color: ${(props) => props.theme.primaryColor};
  }
`;
