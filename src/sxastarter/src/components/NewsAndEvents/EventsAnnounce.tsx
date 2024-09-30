import {
  Field,
  RichText,
  //// Comment inner section
  Text,
  //// Comment inner section
  //// Uncomment inner section
  //Link,
  //LinkField,
  //// Uncomment inner section
} from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

type EventAnnouncesProps = {
  fields: {
    //// Comment inner section
    Title: Field<string>;
    //// Comment inner section
    //// Uncomment inner section
    // Link: LinkField;
    //// Uncomment inner section
    Content: Field<string>;
  };
};

export const Default = ({ fields }: EventAnnouncesProps): JSX.Element => {
  return (
    <section className="sc-applicationContent">
      <div className="col-md-12 sc-applicationContent-main">
        <div>
          <div className="col-md-9">
            <h3>Events Announce:</h3>
          </div>
          <div className="col-md-9">
            <h3>
              {/* Comment inner section */}
              <Text field={fields?.Title} />
              {/* Comment inner section */}
              {/* Uncomment inner section */}
              {/* <Link field={fields?.Link} /> */}
              {/* Uncomment inner section */}
            </h3>
          </div>
          <div className="col-md-9">
            <RichText field={fields?.Content} />
          </div>
        </div>
      </div>
    </section>
  );
};
