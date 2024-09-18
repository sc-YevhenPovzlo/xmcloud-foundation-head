import { RichText, Image, Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

type HomeProps = {
  fields: {
    Content: Field<string>;
    Image: ImageField & { metadata?: { [key: string]: unknown } };
  };
};

export const Default = ({ fields }: HomeProps): JSX.Element => {
  return (
    <section className="sc-applicationContent">
      <div className="col-md-12 sc-applicationContent-main">
        <div className="col-md-3">
          <Image field={fields.Image} />
        </div>
        <div className="col-md-9">
          <RichText
            tag="h3"
            style={{
              color: '#5c5c5c',
              backgroundColor: '#ffffff',
              margin: '21px 0px',
              letterSpacing: '0.3px',
            }}
            field={fields.Content}
          />
        </div>
        <div className="col-md-12 ">{/* Announces go here*/}</div>
      </div>
    </section>
  );
};
