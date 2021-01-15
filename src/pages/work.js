import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import PrimaryButton from "../components/primaryButton";
import "../css/hero.css";

const WorkPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Wedding Photographer in Oudtshoorn"
        description="View past work from the best wedding photographer in Oudtshoorn. Ryan also shares some of his lifestyle photos on this page so be sure take a look."
      />
      <BackgroundImage
        className="BG-1"
        fluid={data.workHero.childImageSharp.fluid}
      >
        <div className="flex flex-col items-center justify-center h-full font-semibold text-gray-100 uppercase bg-gray-900 black-overlay-1">
          <h1 className="text-xs lg:mt-32 lg:text-xll">
            Wedding photographer in Oudtshoorn
          </h1>
          <h2 className="mb-8 text-2xl text-center lg:mb-16 lg:text-6xl">
            View some of my <br /> best work over the years
          </h2>
          <PrimaryButton CTA="Work with me!" />
        </div>
      </BackgroundImage>
      <section className="py-16 text-center bg-gray-100 lg:py-32 lg:text-xl">
        <h2 className="text-xl lg:text-5xl">Coming Soon...</h2>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query workHero {
    workHero: file(name: { eq: "wedding-photographer" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default WorkPage;
