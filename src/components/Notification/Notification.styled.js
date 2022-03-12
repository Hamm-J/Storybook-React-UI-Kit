import styled, { css } from "styled-components";
import { Done, Close, Info } from "@styled-icons/material";

export const NotificationContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 374px;
  height: ${(props) => (props.showButtons === true ? "144px" : "80px")};
  /* TODO: JH2021_12_19: look into adjusting height according to padding*/
  padding: 20px;
  box-shadow: ${(props) => props.theme.shadowDefault};
`;

export const FlexTopRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const FlexBottomRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

export const Head = styled.p`
  font: ${(props) => props.theme.fontParagraph1Bold};
`;

export const Description = styled.p`
  font: ${(props) => props.theme.fontParagraph2};
`;

export const CloseButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.colorWhite};
  border: none;
  outline: 2px solid ${(props) => props.theme.colorPrimary};
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
