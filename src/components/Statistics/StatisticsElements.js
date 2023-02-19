import PropTypes from 'prop-types';
import { Info } from './Statistics.styled';


export const StatisticsElement = ({ stat: { label, percentage } }) => {
    return (
        <Info >
            <span>{label}</span>
            <span>{percentage}</span>
        </Info>
        
    );
};

StatisticsElement.propTypes = {
    stat: PropTypes.shape({
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })
};
