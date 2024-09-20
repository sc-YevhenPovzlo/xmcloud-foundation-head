import { Field, Link, LinkField, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

type EventAnnouncesProps = {
  fields: {
    // Title: Field<string>;
    Link: LinkField;
    Content: Field<string>;
  };
};

export const Default = ({ fields }: EventAnnouncesProps): JSX.Element => {
  return (
    <section className="sc-applicationContent">
      <div className="col-md-12 sc-applicationContent-main">
        <div>
          <div className="col-md-9">News Announce:</div>
          <div className="col-md-3">
            {/* <Text field={fields?.Title} /> */}
            <Link field={fields?.Link} />
          </div>
          <div className="col-md-9">
            <RichText field={fields?.Content} />
          </div>
        </div>
      </div>
    </section>
  );
};
