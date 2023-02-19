import Profile from './Profile/Profile';
import user from '../data/user.json';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  return (
    <div style={{
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 14,
  color: '#010101',
}}>
    <GlobalStyle/>
    <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  followers={user.stats.followers}
  views={user.stats.views}
  likes={user.stats.likes}   
/>
    </div>
  );
};
