import React from 'react';
//import necessary types to render fields and define properties of the component
import { Field, RichText, Text, Link, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

//Define fields that our component will get during rendering. In this component we render tree fields: Title, Link, Content
type EventAnnouncesProps = {
  fields: {
    Title: Field<string>;
    Link: LinkField;
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
              {/* Define editalbe text field to render Title field */}
              <Text field={fields?.Title} />
              {/* Define editalbe link field to render Link field */}
              <Link field={fields?.Link} />
            </h3>
          </div>
          <div className="col-md-9">
            {/* Define editalbe rich text field to render Content field */}
            <RichText field={fields?.Content} />
          </div>
        </div>
      </div>
    </section>
  );
};
