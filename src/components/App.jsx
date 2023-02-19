import { GlobalStyle } from './GlobalStyle';
import Profile from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';

import user from '../data/user.json';
import data from '../data/data.json';


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
<Statistics  Statistics title="Upload stats" stats={data} />
    </div>
  );
};
