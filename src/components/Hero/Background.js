import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import styled, { keyframes } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

const query = graphql`
  {
    file(relativePath: { eq: "mainBcg.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default ({ children, image }) => {
  const imageData = image ?? useStaticQuery(query).file.childImageSharp.fluid;

  return (
    <Wrapper>
      <BackgroundImage Tag='div' fluid={imageData} className='bcg' preserveStackingContext={true}>
        {children}
      </BackgroundImage>
    </Wrapper>
  );
};

const fadeIn = keyframes`
  from  { background-color:rgba(0,0,0,0.8); }
  to    { background-color:rgba(0,0,0,0.4); }
`;

const Wrapper = styled.section`
  .bcg {
    /* MUST!!!!!! */
    min-height: 100vh;
    margin-top: -5rem;
    display: grid;
    place-items: center;
    animation: ${fadeIn} 2s ease-in-out 1 forwards;
    &::before {
      opacity: 1;
    }
  }
`;