import friends from '../../friends.json';
import FriendItem from './FriendItem';
import { FriendLists } from './FriendList.Styled';



const FriendList = ()=> {
    return (
        <FriendLists className="friend-list">
        {friends.map(friend => (
       <FriendItem
        key = {friend.id}
        avatar = {friend.avatar}
        name = {friend.name}
        isOnline = {friend.isOnline}
       />
        ))}
    </FriendLists>
    )
}

export default FriendList;
  /*  Довільна кіл-сть FriendListItem  */