import { StyledLink } from './Navigation.styles';

const Navigation = () => {
  return (
    <ul>
      <li>
        <StyledLink to="/">HOME</StyledLink>
      </li>
      <li>
        <StyledLink to="/tweets">TWEETS</StyledLink>
      </li>
    </ul>
  );
};

export default Navigation;
