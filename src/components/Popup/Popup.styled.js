import styled from "styled-components";
import { Close, Done, PriorityHigh } from "@styled-icons/material";

export const PopupContainer = styled.div`
  width: 480px;
  border-radius: 8px;
  box-shadow: 0px 4px 4px rgba(51, 51, 51, 0.04),
    0px 4px 16px rgba(51, 51, 51, 0.08);
  padding: 29px 25px;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Head = styled.h1`
  font-size: 32px;
  line-height: 40px;
  margin: 0;
  padding: 0;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 24px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
export const ButtonMain = styled.button``;

export const ButtonSecondary = styled.button``;

export const CloseIconWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 44px;
  height: 44px;
  background-color: #6e41e2;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const CloseIcon = styled(Close)`
  color: white;
  width: 45%;
  cursor: pointer;
`;

export const SuccessIcon = styled(Done)`
  color: #27ae60;
  width: 60%;
`;

export const ErrorIcon = styled(Close)`
  color: #db524e;
  width: 60%;
`;

export const AlertIcon = styled(PriorityHigh)`
  color: #ffd912;
  width: 60%;
`;

export const IconBackground = styled.div`
  background-color: ${(props) => {
    switch (props.popupState) {
      case "alert":
        return "rgba(255, 217, 18, 0.12)";
      case "success":
        return "rgba(39,174,96, 0.12)";
      case "error":
        return "rgba(219,82,78, 0.12)";
      case "contact":
        return "white";
    }
  }};
  /* rgba(255, 217, 18, 0.12); */
  /* opacity: 0.12; */
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 96px;
  height: 96px;
`;
