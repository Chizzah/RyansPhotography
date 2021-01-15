import React from "react";
import { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import Image from "gatsby-image";

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      ryanLogo: file(name: { eq: "ryans-photography-logo" }) {
        childImageSharp {
          fixed(width: 270) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const [isExpanded, toggleExpansion] = useState(false);

  const links = [
    { id: "1", title: "about", url: "/about" },
    { id: "2", title: "portfolio", url: "/portfolio" },
    { id: "3", title: "contact", url: "/contact" },
  ];

  return (
    <header className="absolute top-0 left-0 z-50 flex items-center justify-between w-full bg-transparent">
      {/* Desktop Nav */}

      <div className="mt-4 ml-4 lg:mt-8 lg:ml-8">
        <Link to="/">
          <Image fixed={data.ryanLogo.childImageSharp.fixed} />
        </Link>
      </div>
      <nav className="hidden mt-6 mr-8 lg:block">
        <ul className="text-lg font-semibold text-gray-100 uppercase">
          {links.map((link, id) => (
            <Link className="mx-6 hover:text-red-400" key={id} to={link.url}>
              {link.title}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="z-50 block mt-2 mr-4 lg:hidden">
        <button
          onClick={() => toggleExpansion(!isExpanded)}
          className="flex items-center text-gray-100 hover:text-white hover:border-white focus:outline-none"
        >
          <svg
            className="w-8 h-8 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}

      <nav
        className={`${
          isExpanded ? `block` : `hidden`
        } absolute top-0 right-0 w-full h-screen bg-gray-900 flex justify-center items-center lg:hidden`}
      >
        <ul className="flex flex-col items-center justify-center text-2xl font-semibold text-center text-gray-100 uppercase">
          {links.map((link, id) => (
            <Link className="mb-8 hover:text-red-400" key={id} to={link.url}>
              {link.title}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
