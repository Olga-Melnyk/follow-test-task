import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getAllUsers } from '../../services/getUsers';
import { Button } from '../../components/Button/Button';

import { List } from './Tweets.styled';

import { TweetCard } from '../../components/TweetCard/TweetCard';

const Tweets = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showLoadMoreBtn, setShowLoadMoreBtn] = useState(false);
  const [users, setUsers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [type] = useState('');
  const PER_PAGE = 3;

  useEffect(() => {
    const getUsers = async ({ page, per_page, value }) => {
      try {
        setIsLoading(true);
        return await getAllUsers(page, per_page, value).then(data => {
          data.length >= PER_PAGE
            ? setShowLoadMoreBtn(true)
            : setShowLoadMoreBtn(false);
          setUsers([...users, ...data]);
        });
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };

    getUsers({ page: pageNumber, per_page: PER_PAGE, value: type });
  }, [pageNumber, type, users]);

  const handleLoadMore = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <>
      <div>
        {isLoading && <div>Loading</div>}
        <Link to="/">Back</Link>
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
          {showLoadMoreBtn && (
            <Button text="Load more" onClick={handleLoadMore} />
          )}
        </List>
      </div>
    </>
  );
};

export default Tweets;
