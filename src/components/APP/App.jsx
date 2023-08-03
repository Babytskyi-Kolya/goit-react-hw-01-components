// import statistics from '../data.json';
import user from '../../User.json';
import MiUser from '../Profile/User';
import Mane from '../Stats/Mane';
import FriendList from '../friends/FriendList';
import Transaction from '../transaction/transaction-history';
import { Card } from './App.Styled';

export const App = () => {
  return (
    <Card>
      <MiUser 
      username = {user.username}
      tag = {user.tag}
      location = {user.location}
      avatar = {user.avatar}
      followers = {user.stats.followers}
      views = {user.stats.views}
      likes = {user.stats.likes}
      />
    <Mane/>

    <FriendList/>

    <Transaction/>
    </Card>
  );
};
