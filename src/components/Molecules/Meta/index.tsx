import React from 'react';
import { Helmet } from 'react-helmet';
import { siteConfig } from '@config/site';

const Meta = () => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{siteConfig.name}</title>
      <meta name="description" content={siteConfig.description} />
    </Helmet>
  );
};

export default Meta;
