import PropTypes from 'prop-types';
import { UserProfale, Description, Picture, Stats, StatsItem} from './Profile.styled';

export default function Profile({ username, tag, location, avatar, followers, views, likes }) {
  return (
    <UserProfale>
      <Description>
        <Picture
          src={avatar}
          alt={username}
        />
        <p>{username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </Description>

      <Stats>
        <StatsItem>
          <span>Followers</span>
          <span>{followers}</span>
        </StatsItem>
        <StatsItem>
          <span>Views</span>
          <span>{views}</span>
        </StatsItem>
        <StatsItem>
          <span>Likes</span>
          <span>{likes}</span>
        </StatsItem>
      </Stats>
    </UserProfale>
  );
};
 
Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
};



