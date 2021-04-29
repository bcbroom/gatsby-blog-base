import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import 'normalize.css';
import 'prismjs/themes/prism.css';
import styled from 'styled-components';
import Header from './Header';
import GlobalStyles from '../styles/GlobalStyles';
import Typography from '../styles/Typography';

const MainDivStyles = styled.div`
  margin: 0 auto;
  max-width: 960;
  padding: 0 1.0875rem 1.45rem;
`;

const FooterStyles = styled.footer`
  margin-top: 2rem;
`;

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const siteTitle = data.site.siteMetadata?.title || 'Title';
  return (
    <>
      <GlobalStyles />
      <Typography />
      <Header siteTitle={siteTitle} />
      <MainDivStyles>
        <main>{children}</main>
        <FooterStyles>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </FooterStyles>
      </MainDivStyles>
    </>
  );
}
