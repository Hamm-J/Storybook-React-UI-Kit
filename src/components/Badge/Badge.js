import { BadgeContainer, Label } from "./Badge.styled";
import PropTypes from "prop-types";

const Badge = ({ label }) => {
  return (
    <BadgeContainer>
      <Label>{label}</Label>
    </BadgeContainer>
  );
};

Badge.propTypes = {
  label: PropTypes.string,
};

export default Badge;
