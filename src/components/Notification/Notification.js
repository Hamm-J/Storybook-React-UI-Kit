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
  handleClose,
  handleHelp,
}) => {
  return (
    <NotificationContainer
      showButtons={showButtons}
      notificationState={notificationState}
    >
      <FlexTopRow
        notificationState={notificationState}
        showHead={showHead}
        showDescription={showDescription}
        showButtons={showButtons}
      >
        <div>
          {showHead && <Head>{head}</Head>}
          {showDescription && (
            <Description showHead={showHead}>{description}</Description>
          )}
        </div>
        <StateSymbolWrapper notificationState={notificationState}>
          {(notificationState === "success" ||
            notificationState === "mobile") && <DoneIcon />}
          {notificationState === "error" && <CloseIcon />}
          {notificationState === "info" && <InfoIcon />}
        </StateSymbolWrapper>
      </FlexTopRow>
      {showButtons && (
        <FlexBottomRow>
          <CloseButton onClick={(e) => handleClose(e)}>
            {closeLabel}
          </CloseButton>
          <HelpButton onClick={(e) => handleHelp(e)}>{helpLabel}</HelpButton>
        </FlexBottomRow>
      )}
    </NotificationContainer>
  );
};

Notification.propTypes = {
  notificationState: PropTypes.oneOf(["success", "error", "info", "mobile"]),
  showButtons: PropTypes.bool,
  showHead: PropTypes.bool,
  showDescription: PropTypes.bool,
  head: PropTypes.string,
  description: PropTypes.string,
  closeLabel: PropTypes.string,
  helpLabel: PropTypes.string,
};

export default Notification;
