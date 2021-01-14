import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../css/hero.css"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO
        title="Best Photographer"
        description="Check out the best photographer blog following projects, experiences and challenges Ryan has faced as well as photography tips and guides he shares." />
      <section className="lg:text-xl">
        <BackgroundImage
          className="BG-1"
          fluid={data.blogHero.childImageSharp.fluid}
        >
          <div className="black-overlay-1 h-full flex flex-col justify-center items-center bg-gray-900 text-gray-100 font-semibold uppercase">
            <h1 className="mt-40 text-xs lg:mt-48 lg:text-xl">Ryan's Photography Blog</h1>
            <h2 className="mb-8 text-2xl text-center lg:mb-16 lg:text-6xl">Subscribe to get <br className="hidden lg:block" /> updated <br className="lg:hidden" /> with my lastest work</h2>
          </div>
        </BackgroundImage>

        {/* Blog Roll */}

        <section className="mb-8 py-10 lg:mb-16 lg:py-20">
          <ul>
            {data.allMarkdownRemark.edges.map(({ node: post }) => (
              <li className="mb-4 bg-gray-200 flex flex-col lg:flex-row justify-start items-start lg:mb-8" key={post.frontmatter.slug}>
                <div className="w-full lg:w-6/12">
                  <Image fluid={post.frontmatter.cover_image.childImageSharp.fluid} />
                </div>
                <div className="mx-4 py-6 lg:py-12 lg:ml-20">
                  <h3 className="text-xl font-semibold uppercase lg:text-3xl">{post.frontmatter.title}</h3>
                  <p className="mb-4 text-xs lg:mb-8 lg:text-sm">Posted on {post.frontmatter.date} by {post.frontmatter.author_name}</p>
                  <p>{post.frontmatter.description}</p>
                  <Link to={post.frontmatter.slug}><button className="mt-8 py-3 px-5 bg-gray-900 text-gray-100 text-lg font-semibold rounded-full shadow focus:outline-none hover:bg-gray-700 lg:mt-16 lg:text-xl">Read More</button></Link>
                </div>
              </li>
            ))}
          </ul>
        </section>

      </section>
    </Layout>
  )
}

export const query = graphql`
  query blogHero {
    blogHero: file(name: {eq: "best-photographer"}) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            slug
            date
            author_name
            title
            description
            cover_image {
              childImageSharp {
                fluid(maxWidth: 480) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

export default BlogPage