import path from 'path';
import { createFilePath } from 'gatsby-source-filesystem';

export function onCreateNode({ node, getNode, actions }) {
  const { createNodeField } = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
}

export async function createPages({ graphql, actions }) {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            fileAbsolutePath
          }
        }
      }
    }
  `);

  // maybe won't keep this, but only turn md files in /posts/ to
  // a page
  const posts = result.data.allMarkdownRemark.edges.filter(({ node }) =>
    node.fileAbsolutePath.includes('/posts/')
  );

  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/BlogPost.js'),
      context: {
        slug: node.fields.slug,
      },
    });
  });
}
