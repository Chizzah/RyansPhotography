import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import BackgroundImage from "gatsby-background-image";

import Form from "../components/form";
import "../css/hero.css";

const ContactPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Best Photographer in Oudtshoorn"
        description="Need a wedding or lifestyle photographer in Oudtshoorn, George, Mosselbay or surrounding areas? Ryan is the best choice for a quality and no-stress experience."
      />
      <section className="text-lg text-gray-900 lg:text-2xl">
        {/* Hero Section */}

        <BackgroundImage
          className="BG-1"
          fluid={data.contactHero.childImageSharp.fluid}
        >
          <div className="flex flex-col items-center justify-center h-full font-semibold text-gray-100 uppercase bg-gray-900 black-overlay-1">
            <h1 className="text-xs lg:mt-32 lg:text-xl">
              Best Photographer in Oudtshoorn
            </h1>
            <h2 className="mb-8 text-2xl text-center lg:mb-16 lg:text-6xl">
              Contact me for <br /> timeless photography
            </h2>
          </div>
        </BackgroundImage>

        {/* Business Details */}

        <section className="flex flex-col items-center justify-around py-10 lg:flex-row lg:py-20">
          <div>
            <h2 className="mb-8 text-2xl font-semibold text-center uppercase underlinelg:text-5xl">
              Business Details
            </h2>
            <address className="flex flex-col items-center justify-center mb-8">
              <ul>
                <li>
                  <strong>Address:</strong> 010 Victoria Street, Oudtshoorn,
                  6625
                </li>
                <li>
                  <strong>Phone:</strong> 060 402 3605
                </li>
                <li className="flex items-start justify-start">
                  <div>
                    <strong>Hours:</strong>
                  </div>
                  <div className="ml-2">
                    {" "}
                    Monday 8am-6pm <br /> Tuesday 8am-6pm <br /> Wednesday
                    8am-6pm <br /> Thursday 8am-6pm <br /> Friday 8am-6pm <br />{" "}
                    Saturday 9am-12pm <br /> Sunday Closed
                  </div>
                </li>
              </ul>
            </address>
          </div>
          <div>
            <a
              href="https://www.google.com/maps/place/10+Victoria+St,+Oudtshoorn,+6620/@-33.58126,22.2135513,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x1dd5c18cc16f1461:0x5ed969953cc575c6!2s10+Victoria+St,+Oudtshoorn,+6620!3b1!8m2!3d-33.5809611!4d22.2132098!3m4!1s0x1dd5c1f34144b999:0x6fa8322beb691b79!8m2!3d-33.58126!4d22.21574"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img fixed={data.googleMaps.childImageSharp.fixed} />
            </a>
          </div>
        </section>

        {/* Contact Section */}

        <section className="flex flex-col items-center justify-around py-10 bg-gray-200 lg:flex-row lg:h-128 lg:py-20">
          <div className="flex flex-col items-center justify-center text-center lg:w-7/12">
            <h2 className="mb-4 text-xl font-semibold uppercase lg:mb-8 lg:text-5xl">
              Looking forward to <br /> work with you!
            </h2>
            <p className="mx-2 mb-8 lg:w-9/12 lg:text-2xl">
              Get in touch with me for any questions or concerns you may have
              and I'll get back to you as soon as possible.
            </p>
          </div>
          <div className="lg:w-5/12">
            <Form />
          </div>
        </section>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query contactHero {
    contactHero: file(name: { eq: "best-photographer-in-oudtshoorn" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    googleMaps: file(name: { eq: "ryans-photography-google-maps" }) {
      childImageSharp {
        fixed(width: 350) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`;

export default ContactPage;
