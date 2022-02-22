import styled from "styled-components";
import { Done, Close, Info } from "@styled-icons/material";
import { GraphicEqDimensions } from "@styled-icons/material/GraphicEq";

export const NotificationContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 374px;
  height: ${(props) => (props.showButtons === true ? "144px" : "80px")};
  /* TODO: JH2021_12_19: look into adjusting height according to padding*/
  padding: 20px;
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 16px rgba(51, 51, 51, 0.08);
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
  font-weight: bold;
`;

export const Description = styled.p``;

export const CloseButton = styled.button`
  cursor: pointer;
  background-color: white;
  border: none;
  outline: 2px solid #6e41e2;
  border-radius: 4px;
  padding: 10px 20px;
  color: #6e41e2;
`;

export const HelpLink = styled.a`
  color: #6e41e2;
  text-decoration: none;
  padding: 10px 20px;
`;

export const StateSymbolWrapper = styled.div`
  background-color: ${(props) => {
    switch (props.notificationState) {
      case "success":
        return "rgba(39, 174, 96, 0.12)";
      case "error":
        return "#F9E3E3";
      case "info":
        return "#E3DAF9";
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
  opacity: 1;
  width: 24px;
  color: rgba(39, 174, 96, 1);
`;

export const CloseIcon = styled(Close)`
  opacity: 1;
  width: 24px;
  color: #DB524E;
`;

export const InfoIcon = styled(Info)`
  opacity: 1;
  width: 24px;
  color: #6E41E2;
`;
