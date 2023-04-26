import { useState } from 'react';

import { Button } from '../Button/Button';
import { updateUserData } from '../../services/getUsers';

import {
  ItemContainer,
  CardContainer,
  ImgContainer,
  ImgBox,
  Text,
} from './TweetCard.styled';

import * as userBoy from '../../images/boy.png';

export const TweetCard = ({
  id,
  user,
  avatar,
  tweets,
  followers,
  followed,
}) => {
  const [followersCount, setFollowersCount] = useState(followers);
  const [selection, setSelection] = useState(followed);

  const handleBtnClick = () => {
    setSelection(!selection);
    if (selection) {
      updateUserData(id, {
        user,
        avatar,
        followed: !selection,
        tweets,
        followers: followersCount - 1,
      });
      setFollowersCount(followersCount - 1);
    }
    if (!selection) {
      updateUserData(id, {
        user,
        avatar,
        followed: !selection,
        tweets,
        followers: followersCount + 1,
      });
      setFollowersCount(followersCount + 1);
    }
  };

  return (
    <ItemContainer key={id}>
      <CardContainer>
        <ImgContainer>
          <ImgBox>
            <img
              src={avatar ?? userBoy.default}
              alt="User"
              width={62}
              height={62}
            ></img>
          </ImgBox>
        </ImgContainer>
        <Text>{tweets} TWEETS</Text>
        <Text>{followersCount.toLocaleString('en-US')} FOLLOWERS</Text>
        <Button
          text={selection ? 'Following' : 'Follow'}
          onClick={handleBtnClick}
          selected={selection}
        />
      </CardContainer>
    </ItemContainer>
  );
};
