import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function IndexPage({ data }) {
  return (
    <Layout>
      <SEO title="Home" />
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
            <h3>
              {node.frontmatter.title} - {node.frontmatter.date}
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/posts/" } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
