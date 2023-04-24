import { List, Item, StyledLink } from './Navigation.styles';

const Navigation = () => {
  return (
    <List>
      <Item>
        <StyledLink to="/">HOME</StyledLink>
      </Item>
      <Item>
        <StyledLink to="/tweets">TWEETS</StyledLink>
      </Item>
    </List>
  );
};

export default Navigation;
