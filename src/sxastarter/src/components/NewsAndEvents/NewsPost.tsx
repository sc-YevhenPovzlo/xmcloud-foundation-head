import {
  Field,
  ImageField,
  Image,
  RichText,
  LinkField,
  Link,
} from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

type NewsPostProps = {
  fields: {
    Content: Field<string>;
    Image: ImageField & { metadata?: { [key: string]: unknown } };
    Link: LinkField;
  };
};

export const Default = ({ fields }: NewsPostProps): JSX.Element => {
  return (
    <section className="sc-applicationContent">
      <div className="col-md-12 sc-applicationContent-main">
        <div>
          <div className="col-md-3">
            <Image field={fields?.Image} />
          </div>
          <div className="col-md-9">
            <RichText field={fields?.Content} />
          </div>
        </div>
        <div className="col-md-12">
          <Link field={fields?.Link} />
        </div>
      </div>
    </section>
  );
};
