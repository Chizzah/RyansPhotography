import React from "react";
import { Link } from "gatsby";

const primaryButton = (props) => (
  <Link to="/contact">
    <button className="px-5 py-3 text-sm font-semibold text-gray-900 bg-gray-100 rounded-lg shadow focus:outline-none hover:bg-red-400 hover:text-gray-100 lg:text-xl">
      {props.CTA}
    </button>
  </Link>
);

export default primaryButton;
