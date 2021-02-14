import React from 'react';
import { graphql } from 'gatsby';
import { Layout, Hero, About, Survey, Slider, GridProjects } from '../components';
import SEO from '../components/SEO';

const HomePage = (props) => {
  const projects = props.data.allAirtable.nodes;
  return (
    <Layout>
      <SEO title='Home' />
      <Hero projects={projects} />
      <About />
      <GridProjects projects={projects} title='latest projects' />
      <Survey />
      <Slider />
    </Layout>
  );
};

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Projects" } }
      limit: 4
      sort: { fields: data___date, order: DESC }
    ) {
      nodes {
        id
        data {
          date
          name
          type
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default HomePage;
