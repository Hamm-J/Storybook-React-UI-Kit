import {
  NotificationContainer,
  FlexTopRow,
  FlexBottomRow,
  Head,
  Description,
  CloseButton,
  HelpButton,
  StateSymbolWrapper,
  DoneIcon,
  CloseIcon,
  InfoIcon,
} from "./Notification.styled";
import PropTypes from "prop-types";

export const Notification = ({
  notificationState,
  showButtons,
  head,
  description,
  showHead,
  showDescription,
  closeLabel,
  helpLabel,
}) => {
  return (
    <NotificationContainer showButtons={showButtons}>
      <FlexTopRow>
        <div>
          {showHead && <Head>{head}</Head>}
          {showDescription && <Description>{description}</Description>}
        </div>
        <StateSymbolWrapper notificationState={notificationState}>
          {notificationState === "success" && <DoneIcon />}
          {notificationState === "error" && <CloseIcon />}
          {notificationState === "info" && <InfoIcon />}
        </StateSymbolWrapper>
      </FlexTopRow>
      {showButtons && (
        <FlexBottomRow>
          <CloseButton>{closeLabel}</CloseButton>
          <HelpButton>{helpLabel}</HelpButton>
        </FlexBottomRow>
      )}
    </NotificationContainer>
  );
};

Notification.propTypes = {
  notificationState: PropTypes.oneOf(["default", "success", "error", "info"]),
  showButtons: PropTypes.bool,
  showHead: PropTypes.bool,
  showDescription: PropTypes.bool,
  head: PropTypes.string,
  description: PropTypes.string,
  closeLabel: PropTypes.string,
  helpLabel: PropTypes.string,
};

export default Notification;
