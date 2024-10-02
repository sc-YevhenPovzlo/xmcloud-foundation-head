import React from 'react';
//import necessary types to render fields and define properties of the component
import {
  Field,
  ImageField,
  Image,
  RichText,
  LinkField,
  Link,
} from '@sitecore-jss/sitecore-jss-nextjs';

//Define fields that our component will get during rendering. In this component we render tree fields: Content, Image, Link
type NewsPostProps = {
  fields: {
    Content: Field<string>;
    Image: ImageField & { metadata?: { [key: string]: unknown } };
    Link: LinkField;
  };
};

export const Default = ({ fields }: NewsPostProps): JSX.Element => {
  return (
    <>
      <section className="sc-applicationContent component content">
        <div className="col-md-12 sc-applicationContent-main">
          <div>
            <div className="col-md-3">
              {/* Define editalbe image field to render Image field */}
              <Image field={fields?.Image} />
            </div>
            <div className="col-md-9">
              {/* Define editalbe rich text field to render Content field */}
              <RichText field={fields?.Content} />
            </div>
          </div>
          <div className="col-md-12">
            {/* Define editalbe link field to render Link field */}
            <Link field={fields?.Link} />
          </div>
        </div>
      </section>
    </>
  );
};
