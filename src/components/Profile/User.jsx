import PropTypes from 'prop-types';
import { User, Photo, Name, Tag, Location, Stats, IconStat, Label, Quantity } from './User.styled';


const MiUser = ({username, tag, location, avatar, followers, views, likes}) => {
    return (
        <User className="profile">
    <div className="description">
    <Photo
      src={avatar}
      alt="User avatar"
      className ="avatar"
    />
    <Name className ="name">{username}</Name>
    <Tag className ="tag">@{tag}</Tag>
    <Location className ="location">{location}</Location>
  </div>

  <Stats className="stats">
    <IconStat>
      <Label className ="label">Followers</Label>
      <Quantity className ="quantity">{followers}</Quantity>
    </IconStat>
    <IconStat>
      <Label className ="label">Views</Label>
      <Quantity className ="quantity">{views}</Quantity>
    </IconStat>
    <IconStat>
      <Label className ="label">Likes</Label>
      <Quantity className ="quantity">{likes}</Quantity>
    </IconStat>
  </Stats>
</User> 
    );
};


MiUser.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number
}

export default MiUser;















/* <div class="profile">
  <div class="description">
    <img
      src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
      alt="User avatar"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div> */