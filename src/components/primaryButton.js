import { Link } from 'gatsby'

const primaryButton = (props) =>
   (
    <Link to="/contact"><button className="py-3 px-5 bg-gray-100 text-gray-900 text-xl font-semibold rounded-full shadow focus:outline-none hover:bg-red-400 hover:text-gray-100 lg:text-3xl">{props.CTA}</button></Link>
  )

export default primaryButton