import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const HeaderStyles = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;

  div {
    margin: 0 auto;
    max-width: 960;
    padding: 1.45rem 1.0875rem;
  }

  h1 {
    margin: 0;
  }

  h1 a {
    color: white;
    text-decoration: none;
  }
`;

export default function Header({ siteTitle }) {
  return (
    <HeaderStyles>
      <div>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
    </HeaderStyles>
  );
}
