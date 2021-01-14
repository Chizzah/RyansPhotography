import { graphql, useStaticQuery, Link } from "gatsby"
import Image from 'gatsby-image'

import Social from "../components/social"

const Footer = () => {
  const data = useStaticQuery(graphql`
  query {
    ryanInitials: file(name: {eq: "ryan-dammert-initials"}) {
      childImageSharp {
        fixed(width: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`);

  return (
    <footer className="bg-gray-900 text-gray-100 lg:h-60">
      <div className="mx-4 mb-4 pt-8 border-b-2 border-solid border-gray-100 lg:mx-10"></div>
      <section className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
        <div className="order-2 ml-4 pb-2 lg:order-1 lg:ml-10">
          <Link to="/"><Image fixed={data.ryanInitials.childImageSharp.fixed} /></Link>
          <p>JAMstack website by <a href="https://chaddwebdesign.co.za" target="_blank">Chadd Web Design</a></p>
          <p>Copyright © {new Date().getFullYear()}, Ryan's Photography. All rights reserved.</p>
        </div>
        <div className="order-1 lg:order-2">
          <ul className="mb-4 flex justify-center items-center text-gray-100 text-xl text-center font-semibold lg:mb-0 lg:mr-8">
            <li className="mx-5 hover:text-red-400"><Link to="/about">About</Link></li>
            <li className="mx-5 hover:text-red-400"><Link to="/work">Work</Link></li>
            <li className="mx-5 hover:text-red-400"><Link to="/blog">Blog</Link></li>
            <li className="mx-5 hover:text-red-400"><Link to="/contact">Contact</Link></li>
          </ul>
          <div className="mr-56 mt-8 mb-4 lg:mt-20 lg:mb-0 lg:ml-48 lg:mr-0">
            <Social />
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer