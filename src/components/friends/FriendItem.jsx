import PropTypes from 'prop-types';
import { Item, Status, IMG } from './FriendItem.Styled';
import './FriendStatus.css';


const Friend = ({avatar, name, isOnline, id}) => {
    return (
        <Item className="item">
        <Status  className={isOnline ? 'status green' : 'status red'}></Status>
        <IMG className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </Item>
    )
};

Friend.prototype = {
    id: PropTypes.string,
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.string
}

export default Friend;




