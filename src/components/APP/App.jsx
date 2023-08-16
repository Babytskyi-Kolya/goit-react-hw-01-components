import statistics from '../../data.json';
import user from '../../User.json';
import transactions from '../../transactions.json';
import MiUser from '../Profile/User';
import Transaction from '../transaction/transaction-history';
import { Card } from './App.Styled';
import Statistic from "../Stats/Statistics";
import { Wrap, Section, Title } from '../Stats/Statistics.Styled'
import friends from '../../friends.json';
import FriendItem from '../friends/FriendItem';
import { FriendLists } from '../friends/FriendList.Styled';

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
    <Section className="statistics">
    <Title className="title">Upload stats</Title>
        
    <Wrap className="stat-list">
    {statistics.map((statistic, index) => (
    <Statistic 
    index = {index}
    key = {statistic.id}
    label = {statistic.label}
    percentage = {statistic.percentage}
    />
    ))}
              </Wrap>
        </Section>

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

    <Transaction
          key = {transactions.id}
          type = {transactions.type}
          amount = {transactions.amount}
          currency = {transactions.currency}
         
    />
    </Card>
  );
};
