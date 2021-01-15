import React from "react";
import Airform from "react-airform";

const Form = () => (
  <Airform
    className="flex flex-col items-center justify-center lg:w-128"
    email="ryandammert@gmail.com"
  >
    <label htmlFor="name" className="hidden">
      Name
    </label>
    <input
      className="w-64 px-3 py-3 mb-4 bg-gray-100 rounded-full focus:outline-none lg:w-96"
      type="text"
      name="name"
      placeholder="Name"
      required
    />
    <label htmlFor="email" className="hidden">
      Email
    </label>
    <input
      className="w-64 px-3 py-3 mb-4 bg-gray-100 rounded-full focus:outline-none lg:w-96"
      type="email"
      name="email"
      placeholder="Email"
      required
    />
    <label htmlFor="message" className="hidden">
      Message
    </label>
    <textarea
      className="w-64 h-32 px-3 mb-4 bg-gray-100 rounded-lg focus:outline-none lg:w-96"
      name="message"
      placeholder="Message"
      required
    ></textarea>
    <button className="w-64 py-3 font-semibold text-gray-100 bg-gray-900 rounded-full shadow-md focus:outline-none hover:bg-gray-700 lg:w-96">
      Send Message
    </button>
  </Airform>
);

export default Form;
