
import { FriendItem } from './FriendItem ';
import { FriendUl, FriendLi } from './FriendList.styled';

export const FriendList = ({friends}) => {
    return (
<FriendUl>
    {friends.map(friend => (
     <FriendLi key={friend.id}>
     <FriendItem friend={friend} />
     </FriendLi>
     ))}
</FriendUl>
    );
}
