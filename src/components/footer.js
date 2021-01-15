import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Image from "gatsby-image";

import Social from "../components/social";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      ryanInitials: file(name: { eq: "ryan-dammert-initials" }) {
        childImageSharp {
          fixed(width: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <footer className="text-gray-100 bg-gray-900 lg:h-60">
      <div className="pt-8 mx-4 mb-4 border-b-2 border-gray-100 border-solid lg:mx-10"></div>
      <section className="flex flex-col items-center justify-between lg:flex-row lg:items-start">
        <div className="order-2 pb-2 ml-4 lg:order-1 lg:ml-10">
          <Link className="hidden lg:block" to="/">
            <Image fixed={data.ryanInitials.childImageSharp.fixed} />
          </Link>
          <p className="text-xs text-center lg:text-sm lg:text-left">
            JAMstack website by{" "}
            <a
              className="text-xs text-center lg:text-sm lg:text-left"
              href="https://chaddwebdesign.co.za"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chadd Web Design
            </a>
          </p>
          <p className="text-xs text-center lg:text-sm lg:text-left">
            Copyright © {new Date().getFullYear()}, Ryan's Photography. All
            rights reserved.
          </p>
        </div>
        <div className="order-1 lg:order-2">
          <ul className="flex items-center justify-center mb-4 text-xl font-semibold text-center text-gray-100 lg:mb-0 lg:mr-8">
            <li className="mx-5 hover:text-red-400">
              <Link to="/about">About</Link>
            </li>
            <li className="mx-5 hover:text-red-400">
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li className="mx-5 hover:text-red-400">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="mt-8 mb-4 mr-56 lg:mt-20 lg:mb-0 lg:ml-48 lg:mr-0">
            <Social />
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
