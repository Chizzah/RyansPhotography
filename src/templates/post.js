import { graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPost = ({ data }) => {

  return(
    <Layout>
      <SEO title={data.post.frontmatter.title} description={data.post.frontmatter.description} />
      <article className="text-xl lg:text-2xl">
        <section className="relative w-full h-screen bg-blue-400 text-gray-100">
          <div className="absolute w-full h-full top-0 left-0 flex flex-col justify-center items-center">
            <p>{data.post.frontmatter.date}</p>
            <h1 className="blogTitle text-3xl lg:text-6xl">{data.post.frontmatter.title}</h1>
            <p className="mb-4 lg:mb-8">by {data.post.frontmatter.author_name}</p>
            <p><strong className="uppercase">Summary:</strong> {data.post.frontmatter.description}</p>
          </div>
        </section>

        <section className="w-11/12 mx-auto py-10 lg:w-8/12 lg:py-20"> 
          <div className="mx-auto mb-8 lg:w-10/12 lg:mb-16">
            <Image fluid={data.post.frontmatter.cover_image.childImageSharp.fluid} alt={data.post.frontmatter.title} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: data.post.html }} />
        </section>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    post: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        author_name
        title
        description
        cover_image {
          childImageSharp {
            fluid(maxWidth: 1440) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

export default BlogPost