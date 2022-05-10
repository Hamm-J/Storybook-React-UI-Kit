import styled, { css } from "styled-components";
import { Done, Close, Info } from "@styled-icons/material";

export const NotificationContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: ${(props) =>
    props.notificationState === "mobile" ? "306px" : "396px"};
  max-height: fit-content;
  box-sizing: border-box;
  box-shadow: ${(props) => props.theme.shadowDefault};
`;

export const FlexTopRow = styled.div`
  display: flex;
  // change flex direction and styling depending on if the state is mobile.
  // Stack the components in mobile with the state symbol on top
  flex-direction: ${(props) =>
    props.notificationState === "mobile" ? "column-reverse" : "row"};
  justify-content: ${(props) =>
    props.notificationState === "mobile" ? "flex-start" : "space-between"};
  align-items: flex-start;

  ${(props) =>
    !props.showHead &&
    props.notificationState !== "mobile" &&
    css`
      align-items: center;
    `}

  // addjust padding depending on if the state of showButtons and showDescription
  padding: ${(props) =>
    props.showButtons === true && props.showDescription === false
      ? "20px 20px 0 20px"
      : "20px 20px 20px 20px"};
`;

export const FlexBottomRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  padding: 0px 20px 20px 20px;
`;

export const Head = styled.p`
  font: ${(props) => props.theme.fontParagraph1Bold};
  overflow-wrap: break-word;
  inline-size: 275px;
  margin: 8px 0px 8px 0px;
`;

export const Description = styled.p`
  font: ${(props) => props.theme.fontParagraph2};
  overflow-wrap: break-word;
  inline-size: 275px;
  margin: 0px;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.colorWhite};
  border: none;
  border: 2px solid ${(props) => props.theme.colorPrimary};
  border-radius: 4px;
  padding: 10px 20px;
  color: ${(props) => props.theme.colorPrimary};
  font: ${(props) => props.theme.fontParagraph2};
`;

export const HelpButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.colorWhite};
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  color: ${(props) => props.theme.colorPrimary};
  font: ${(props) => props.theme.fontParagraph2};
`;

export const StateSymbolWrapper = styled.div`
  background-color: ${(props) => {
    switch (props.notificationState) {
      case "success":
        return (props) => props.theme.colorGreenLight;
      case "mobile":
        return (props) => props.theme.colorGreenLight;
      case "error":
        return (props) => props.theme.colorRedGirl;
      case "info":
        return (props) => props.theme.colorDisabled;
      default:
        return "white";
    }
  }};

  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DoneIcon = styled(Done)`
  width: 24px;
  color: ${(props) => props.theme.colorGreen};
`;

export const CloseIcon = styled(Close)`
  opacity: 1;
  width: 24px;
  color: ${(props) => props.theme.colorRed};
`;

export const InfoIcon = styled(Info)`
  opacity: 1;
  width: 24px;
  color: ${(props) => props.theme.colorPrimary};
`;
