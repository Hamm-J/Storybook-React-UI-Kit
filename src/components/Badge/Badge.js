import { BadgeWrapper, BadgeLabel } from './Badge.styled';
import PropTypes from 'prop-types';

const Badge = ({label})  => {
    return (
        <div>
            <BadgeWrapper>
                <BadgeLabel>{label}</BadgeLabel>
            </BadgeWrapper>
        </div>
    );
};

Badge.propTypes = {
    label: PropTypes.string,
};

export default Badge;