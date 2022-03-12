import { AvatarContainer, Icon, IconBackground } from "./Avatar.styled";
import PropTypes from "prop-types";

const Avatar = ({ avatar, handleClick }) => {
  return (
    <AvatarContainer onClick={(e) => handleClick(e)}>
      <IconBackground>
        <Icon>{avatar}</Icon>
      </IconBackground>
    </AvatarContainer>
  );
};

Avatar.propTypes = {
  avatar: PropTypes.oneOf(["😎", "😼", "👻", "👽", "🦁", "💡", "⚽", "🍿"]),
};

export default Avatar;
