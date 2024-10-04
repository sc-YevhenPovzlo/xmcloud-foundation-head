import { Field, ImageField, Image, Text, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

type NewsProps = {
  fields: {
    Title: Field<string>;
    Owner: Field<string>;
    Record: Field<string>;
    Text: Field<string>;
    Image: ImageField & { metadata?: { [key: string]: unknown } };
  };
};

export const Default = ({ fields }: NewsProps): JSX.Element => {
  return (
    <>
      <div className="articleTitle">
        <Text tag="h1" style={{ marginTop: '0' }} field={fields?.Title} />
        <div className="base sidePanel">
          <Image
            className="article_image"
            style={{ innerHeight: '360px' }}
            field={fields?.Image}
          ></Image>
        </div>
      </div>
      <div>
        <div style={{ fontSize: '18px' }}>
          Owner: <Text tag="p" field={fields?.Owner} />
          Record: <Text tag="p" field={fields?.Record} />
          <RichText tag="p" field={fields?.Text} />
        </div>
      </div>
    </>
  );
};
