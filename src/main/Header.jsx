import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderComponent = styled.div`
  width: 100vw;
  height: 80px;
  background: #4a5b8c;
`;
const SearchButton = styled.button``;

const Header = () => {
  return (
    <HeaderComponent>
      <Link to="/search">
        <SearchButton>search</SearchButton>
      </Link>
    </HeaderComponent>
  );
};

export default Header;
