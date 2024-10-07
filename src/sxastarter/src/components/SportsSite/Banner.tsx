import { ImageField, Image } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

type BannerProps = {
  fields: {
    Image: ImageField & { metadata?: { [key: string]: unknown } };
  };
};

export const Default = ({ fields }: BannerProps): JSX.Element => {
  return (
    <div>
      <div className="bannerWrapper1 bannerWrapper2">
        <Image className="banner_image" field={fields.Image}></Image>
      </div>
    </div>
  );
};
