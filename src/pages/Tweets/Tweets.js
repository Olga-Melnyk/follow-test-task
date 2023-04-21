import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

const Tweets = () => {
  return (
    <>
      <h1>Tweets</h1>
      <Link to="/">Back</Link>
      <ul>
        <li>
          <Link to="tweets">Tweet</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Tweets;
