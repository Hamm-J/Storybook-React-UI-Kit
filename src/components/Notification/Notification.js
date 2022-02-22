import {
  NotificationContainer,
  FlexTopRow,
  FlexBottomRow,
  Head,
  Description,
  CloseButton,
  HelpLink,
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
  let icon;
  // TODO: JH2021_12_19
  // ? try to do this with switches that don't return someething, but just assign
  if (notificationState === "success") icon = <DoneIcon />;
  if (notificationState === "error") icon = <CloseIcon />;
  if (notificationState === "info") icon = <InfoIcon />;
  if (notificationState === "default") icon = <></>;

  return (
    <div>
      <NotificationContainer showButtons={showButtons}>
        <FlexTopRow>
          <div>
            {showHead && <Head>{head}</Head>}
            {showDescription && <Description>{description}</Description>}
          </div>
          <StateSymbolWrapper notificationState={notificationState}>
            {icon}
          </StateSymbolWrapper>
        </FlexTopRow>
        {showButtons && (
          <FlexBottomRow>
            <CloseButton>{closeLabel}</CloseButton>
            <HelpLink href="#">{helpLabel}</HelpLink>
          </FlexBottomRow>
        )}
      </NotificationContainer>
    </div>
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
