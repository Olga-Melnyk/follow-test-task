import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '../../components/Button/Button';
import { Loader } from '../../components/Loader/Loader';
import { TweetCard } from '../../components/TweetCard/TweetCard';
import { getAllUsers } from '../../services/getUsers';

import { List, BtnContainer } from './Tweets.styled';

const Tweets = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [type] = useState('');
  const PER_PAGE = 3;

  useEffect(() => {
    const getUsers = async ({ page, per_page, value }) => {
      try {
        setIsLoading(true);
        return await getAllUsers(page, per_page, value).then(data => {
          data.length >= PER_PAGE ? setShowBtn(true) : setShowBtn(false);
          setUsers([...users, ...data]);
        });
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    getUsers({ page: pageNumber, per_page: PER_PAGE, value: type });
    // eslint-disable-next-line
  }, [pageNumber, type]);

  const handleLoadMore = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <>
      {isLoading && <Loader />}
      <Link to="/">
        <Button text="Back" />
      </Link>
      <List>
        {users.length > 0 &&
          users.map(({ id, user, avatar, followers, tweets, followed }) => (
            <TweetCard
              key={id}
              id={id}
              tweets={tweets}
              followers={followers}
              user={user}
              avatar={avatar}
              followed={followed}
            />
          ))}
      </List>
      <BtnContainer>
        {showBtn && <Button text="Load more" onClick={handleLoadMore} />}
      </BtnContainer>
    </>
  );
};

export default Tweets;
