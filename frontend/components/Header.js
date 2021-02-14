import styled from 'styled-components';
import Link from 'next/link';
import Nav from './Nav';

const LogoStyle = styled.h1`
  background: red;
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  transform: skew(-7deg);
  z-index: 2;
  a {
    color: white;
    padding: 0.5rem 1rem;
    text-decoration: none;
    text-transform: uppercase;
  }
`;

const HeaderStyle = styled.header`
  .bar {
    border-bottom: 10px solid var(--black, black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }

  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }
`;

function Header() {
  return (
    <HeaderStyle>
      <div className="bar">
        <LogoStyle>
          <Link href="/">Sick Fits</Link>
        </LogoStyle>
      </div>
      <div className="sub-bar">
        <p>Search</p>
      </div>
      <Nav />
    </HeaderStyle>
  );
}

export default Header;
