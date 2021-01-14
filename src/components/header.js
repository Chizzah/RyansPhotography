import { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from 'gatsby'
import Image from 'gatsby-image'

const Header = () => {
  const data = useStaticQuery(graphql`
  query {
    ryanLogo: file(name: {eq: "ryans-photography-logo"}) {
      childImageSharp {
        fixed(width: 270) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`);

  const [isExpanded, toggleExpansion] = useState(false)

  let links = [
    {"id":"1", "title":"about", "url": "/about"},
    {"id":"2", "title":"work", "url": "/work"},
    {"id":"3", "title":"blog", "url": "/blog"},
    {"id":"4", "title":"contact", "url": "/contact"},
  ]

  return (
    <header className="z-50 w-full absolute top-0 left-0 bg-transparent flex justify-between items-center">

      {/* Desktop Nav */}

      <div className="mt-4 ml-4 lg:mt-8 lg:ml-8">
        <Link to="/"><Image fixed={data.ryanLogo.childImageSharp.fixed} /></Link>
      </div>
      <nav className="hidden mt-6 mr-8 lg:block">
        <ul className="text-gray-100 text-lg font-semibold uppercase">
          {links.map((link, id) => (
          <Link className="mx-6 hover:text-red-400" key={id} to={link.url}>{link.title}</Link>
          ))}
        </ul> 
      </nav>
      <div className="z-50 block mt-2 mr-4 lg:hidden">
        <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center text-gray-100 hover:text-white hover:border-white focus:outline-none">
          <svg className="fill-current h-8 w-8" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>

      {/* Mobile Nav */}
      
      <nav className={`${ isExpanded ? `block` : `hidden` } absolute top-0 right-0 w-full h-screen bg-gray-900 flex justify-center items-center lg:hidden`}>
        <ul className="flex flex-col justify-center items-center text-gray-100 text-2xl text-center font-semibold uppercase">
          {links.map((link, id) => (
            <Link className="mb-8 hover:text-red-400" key={id} to={link.url}>{link.title}</Link>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header