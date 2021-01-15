import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import BackgroundImage from "gatsby-background-image";

import PrimaryButton from "../components/primaryButton";
import "../css/hero.css";

const AboutPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Lifestyle Photographer in Oudtshoorn"
        description="Find out more about Ryan's Photography. The best lifestyle photographer in Oudtshoorn and surrounding areas."
      />
      <section className="bg-gray-100 lg:text-xl">
        <BackgroundImage
          className="BG-1"
          fluid={data.aboutHero.childImageSharp.fluid}
        >
          <div className="flex flex-col items-center justify-center h-full font-semibold text-gray-100 uppercase bg-gray-900 black-overlay-2">
            <h1 className="mt-32 text-xs lg:text-xl">
              Lifestyle Photographer in Oudtshoorn
            </h1>
            <h2 className="mb-8 text-2xl text-center lg:mb-16 lg:text-6xl">
              My passion is <br /> to see you smiling
            </h2>
            <PrimaryButton CTA="Let's talk!" />
          </div>
        </BackgroundImage>
        <section className="py-16 text-center bg-gray-100 lg:py-32 lg:text-xl">
          <h2 className="text-xl lg:text-5xl">Coming Soon...</h2>
        </section>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query aboutHero {
    aboutHero: file(name: { eq: "lifestyle-photographer" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default AboutPage;
