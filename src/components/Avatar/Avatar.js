import { AvatarWrapper, AvatarImg, AvatarBackground } from "./Avatar.styled";
import PropTypes from "prop-types";

const Avatar = ({ avatar }) => {
  return (
    <div>
      <AvatarWrapper>
        <AvatarBackground>
          <AvatarImg>{avatar}</AvatarImg>
        </AvatarBackground>
      </AvatarWrapper>
    </div>
  );
};

Avatar.propTypes = {
  avatar: PropTypes.oneOf(["😎", "😼", "👻", "👽", "🦁", "💡", "⚽", "🍿"]),
};

export default Avatar;
