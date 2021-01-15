import React from "react";
import Facebook from "../images/facebook.svg";
import Instagram from "../images/instagram.svg";

const Social = () => (
  <section className="flex items-center justify-center">
    <a
      href="https://www.facebook.com/RyansPhoto4934/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="w-8 h-8 mx-2"
        src={Facebook}
        alt="Link to Ryan's Photography Facebook Business Page"
      />
    </a>
    <a
      href="https://www.instagram.com/ryandammert2019/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="w-8 h-8 mx-2"
        src={Instagram}
        alt="Link to Ryan's Photography Instagram Business Profile"
      />
    </a>
  </section>
);

export default Social;
