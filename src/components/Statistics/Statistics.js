import PropTypes from 'prop-types';
import { StatisticsElement } from './StatisticsElements'; 
import {Statistic, StatList, StatItem } from './Statistics.styled';
import randomColor from '../Color';



export const Statistics = ({title, stats }) => {
    return (<Statistic>
        {title && <h2>{title}</h2>}
        <StatList>
            {stats.map(stat => (
                <StatItem key={stat.id}
                style={{ backgroundColor: randomColor() }}>
                    <StatisticsElement stat={stat}/>
                </StatItem>
            ))}
        </StatList>
    </Statistic>
    );
}; 

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired
    })).isRequired,
};