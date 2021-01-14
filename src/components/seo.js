import { Title, Link, Meta } from 'react-head';

const SEO = (props) => (
  <>
    <Title>{props.title}</Title>
    <Meta name="description" content={props.description} />
    <Meta name="robots" content="index,follow,archive" />
    <Meta name="author" content="Chadd Web Design" />
    <Meta name="robots" content="index,follow,archive" />
    <Meta property="og:locale" content="en_ZA" />
    <Meta property="og:title" content="Ryan's Photography" />
    <Meta property="og:url" content="https://ryansphotography.co.za/" />
    <Meta property="og:site_name" content="Ryan's Photography" />
    <Meta property="og:type" content="website" />
    <Meta property="og:description" content="Ryan Dammert is a wedding & lifestyle photographer in Oudtshoorn, South Africa. He operates in the Klein Karoo and Eden District." />
    <Meta property="og:image" content="https://ryansphotography.co.za/social.png" />
    <Meta property="og:image:type" content="image/png" />
    <Meta property="og:image:width" content="1200" />
    <Meta property="og:image:height" content="675" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Meta name="twitter:site" content="@ryansphotography" />
    <Meta name="twitter:url" content="https://ryansphotography.co.za/" />
    <Meta name="twitter:title" content="Ryan's Photography" />
    <Meta name="twitter:description" content="Ryan Dammert is a wedding & lifestyle photographer in Oudtshoorn, South Africa. He operates in the Klein Karoo and Eden District." />
    <Meta name="twitter:image" content="https://ryansphotography.co.za/social.png" />
    {/* <Meta name="google-site-verification" content="FMD5P3UeGdI3GuWIJdILcayBrsFpOP3MneqJoDJ3uss" /> */}
    <Link rel="canonical" content="https://ryansphotography.co.za" />
  </>
);

export default SEO
