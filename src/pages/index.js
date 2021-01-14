import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PrimaryButton from "../components/primaryButton"
import Form from "../components/form"
import "../css/hero.css"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO 
        title="Photographer in Oudtshoorn"
        description="Ryan Dammert is a wedding & lifestyle photographer in Oudtshoorn, South Africa. He operates in the Klein Karoo and Eden District." />
      <section className="bg-gray-100 lg:text-xl">

        {/* Hero Section */}

        <BackgroundImage
          className="BG-1"
          fluid={data.indexHero.childImageSharp.fluid}
        >
          <div className="black-overlay-1 h-full flex flex-col justify-center items-center bg-gray-900 text-gray-100 font-semibold uppercase">
            <h1 className="mt-32 text-xs lg:text-xl">Photographer in Oudtshoorn</h1>
            <h2 className="mb-8 text-2xl text-center lg:mb-16 lg:text-6xl">Unique Moments. <br /> Unforgettable Stories.</h2>
            <PrimaryButton CTA="Work with me!" />
          </div>
        </BackgroundImage>

        {/* Welcome Section */}

        <section className="">
          <div className="py-16 bg-gray-200 flex flex-col justify-center items-center lg:py-32">
            <h2 className="mb-4 text-lg text-center uppercase lg:mb-8 lg:text-5xl">Moments you deserve to remember
              <br/> Stories you love to share
            </h2>
            <p className="mx-4 lg:w-156 lg:mx-0">Everyone deserves to be loved unconditionally and cared for deeply. Capturing your experience and telling your story is what motivates me to get out of bed every morning. Let me be your story-teller and photographer in Oudtshoorn.</p>
          </div>
          <div className="py-12 flex justify-end items-center lg:py-24">
            <div className="flex flex-col lg:flex-row justify-center items-center lg:mr-24">
              <div className="mb-8 lg:mb-0 lg:mr-12">
                <Image fixed={data.ryanDammert.childImageSharp.fixed} />
              </div>
              <div className="mx-4 text-left lg:mx-0">
                <h2 className="mb-4 text-lguppercase lg:mb-8 lg:text-5xl">Hi, I'm Ryan</h2>
                <p className="lg:w-128">Remember when you were a kid? Running around outside and playing with friends. Without a care in the world. All our countless memories and experiences define who we are and propel us towards who we'll become. Life moves faster than we'd care to admit and precious memories tend to fade over time. Let's work together to capture those special moments through photography. In a stress free and fun way, so you can relive your story with your loved ones for years to come.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Wedding Section */}

        <BackgroundImage
          className="BG-2"
          fluid={data.indexWedding.childImageSharp.fluid}
        >
          <div className="black-overlay-2 h-full flex flex-col justify-center items-center lg:items-start bg-gray-900 text-gray-100">
            <h2 className="mb-4 text-lg text-center font-semibold uppercase lg:mb-8 lg:ml-24 lg:text-5xl">Ready for your wedding <br /> in Oudtshoorn</h2>
            <p className="mx-2 mb-6 text-center lg:mx-0 lg:mb-12 lg:ml-10 lg:text-2xl lg:text-left">Having gone through the crazy hustle & bustle of a wedding day. I know <br className="hidden lg:block" /> how stressful it can be. Let me help you make your special day more fun <br className="hidden lg:block" /> and relaxing. Something you can truly look back and remember fondly. <br className="hidden lg:block" /> Even beyond the photographs.</p>
            <div className="lg:w-6/12 lg:ml-10">
              <PrimaryButton CTA="Get in touch!" />
            </div>
          </div>
        </BackgroundImage>

        {/* Testimonial Section */}

        <section className="py-12 text-lg flex flex-col justify-center items-center lg:text-3xl lg:py-24">
          <h2 className="mb-12 text-xl text-center font-semibold uppercase lg:mt-16 lg:mb-24 lg:text-5xl">This is what my clients say about <br /> their experience</h2>
          <div className="mb-12 text-center lg:mb-24">
            <h3 className="text-lg font-semibold uppercase lg:mb-8">Jane Doe</h3>
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <div className="my-12 lg:w-2/12 lg:my-0 lg:mr-6">
                <Image className="rounded-full" fixed={data.janeDoe.childImageSharp.fixed} />
              </div>
              <div className="mx-2 text-sm text-center lg:w-4/12 lg:mx-0 lg:text-2xl lg:text-left">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti culpa quos tenetur dicta perferendis eos praesentium consequuntur? Autem, nesciunt.</p>
              </div>
            </div>
          </div>
          <div className="mb-12 text-center lg:mb-24">
            <h3 className="font-semibold uppercase lg:mb-8">Anne Frank</h3>
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <div className="my-12 lg:w-2/12 lg:my-0 lg:mr-6">
                <Image className="rounded-full" fixed={data.anneFrank.childImageSharp.fixed} />
              </div>
              <div className="mx-2 text-sm text-center lg:w-4/12 lg:mx-0 lg:text-2xl lg:text-left">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti culpa quos tenetur dicta perferendis eos praesentium consequuntur? Autem, nesciunt.</p>
              </div>
            </div>
          </div>
          <div className="mb-12 text-center lg:mb-24">
            <h3 className="font-semibold uppercase lg:mb-8">John Doe</h3>
            <div className="flex flex-col lg:flex-row justify-center items-center">
              <div className="my-12 lg:w-2/12 lg:my-0 lg:mr-6">
                <Image className="rounded-full" fixed={data.johnDoe.childImageSharp.fixed} />
              </div>
              <div className="mx-4 text-sm text-center lg:w-4/12 lg:mx-0 lg:text-2xl lg:text-left">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque corrupti culpa quos tenetur dicta perferendis eos praesentium consequuntur? Autem, nesciunt.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Lifestyle Section */}

        <BackgroundImage
          className="BG-3"
          fluid={data.indexLifestyle.childImageSharp.fluid}
        >
        <div className="black-overlay-2 h-full flex flex-col justify-center items-center lg:items-start bg-gray-900 text-gray-100">
          <h2 className="mb-4 text-lg text-center font-semibold uppercase lg:mb-8 lg:ml-24 lg:text-5xl">Lifestyle Photography <br /> in Oudtshoorn</h2>
          <p className="mx-2 mb-6 text-center lg:mx-0 lg:mb-12 lg:ml-10 lg:text-2xl lg:text-left">Every day is a blessing and should be special. With today's technology <br className="hidden lg:block" /> we're fortunate enough to be able to save them daily. For those extra <br className="hidden lg:block" /> special occassions like birthdays, anniversaries, baby showers, etc. Let <br className="hidden lg:block" /> me capture them for you and help tell your story.</p>
          <div className="lg:ml-10">
            <PrimaryButton CTA="Let's talk!" />
          </div>
        </div>
        </BackgroundImage>

        {/* Blog Roll */}

        <section className="mb-8 py-10 lg:mb-16 lg:py-20">
          <ul>
            {data.allMarkdownRemark.edges.map(({ node: post }) => (
              <li key={post.frontmatter.slug} className="mb-4 bg-gray-200 flex flex-col lg:flex-row justify-start items-start lg:mb-8">
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

        {/* Contact Section */}

        <section className="py-10 bg-gray-200 flex flex-col lg:flex-row justify-around items-center lg:h-128 lg:py-20">
          <div className="flex flex-col justify-center items-center text-center lg:w-7/12">
            <h2 className="mb-4 text-xl font-semibold uppercase lg:mb-8 lg:text-5xl">Need to contact me?</h2>
            <p className="mx-2 mb-8 lg:w-9/12 lg:text-2xl">Feel free to use this form to get in touch with me for any questions or concerns you may have. I'll get back to you as soon as possible.</p>
          </div>
          <div className="lg:w-5/12">
            <Form />
          </div>
        </section>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    indexHero: file(name: {eq: "professional-photographer-in-oudtshoorn"}) {
      childImageSharp {
        fluid(maxWidth: 1440, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    indexWedding: file(name: {eq: "wedding-photographer-in-oudtshoorn"}) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    indexLifestyle: file(name: {eq: "lifestyle-photographer-in-oudtshoorn"}) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    ryanDammert: file(name: {eq: "ryan-dammert-ryans-photography"}) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    janeDoe: file(name: {eq: "jane-doe"}) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    anneFrank: file(name: {eq: "anne-frank"}) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    johnDoe: file(name: {eq: "john-doe"}) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed_withWebp
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

export default IndexPage