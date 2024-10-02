import React from 'react';
//import necessary types to render fields and define properties of the component
import { Field, RichText, Text, Link, LinkField } from '@sitecore-jss/sitecore-jss-nextjs';

//Define fields that our component will get during rendering. In this component we render tree fields: Title, Link, Content
interface Fields {
  Title: Field<string>;
  PageLink: LinkField;
  Content: Field<string>;
}
type EventAnnouncesProps = {
  fields: Fields;
  id: string;
};

export const Default = (props: EventAnnouncesProps): JSX.Element => {
  const id = props.id;
  return (
    <section className="sc-applicationContent">
      <div className="col-md-12 sc-applicationContent-main" id={id ? id : undefined}>
        <div>
          <div className="col-md-9">
            <h3>News Announce:</h3>
          </div>
          <div className="col-md-9">
            <h3>
              {/* Render PageLink link field if it is not empty, otherwhise render Title text field */}
              {props.fields?.PageLink ? (
                <Link field={props.fields?.PageLink} />
              ) : (
                <Text field={props.fields?.Title} />
              )}
            </h3>
          </div>
          <div className="col-md-9">
            {/* Define editalbe rich text field to render Content field */}
            <RichText field={props.fields?.Content} />
          </div>
        </div>
      </div>
    </section>
  );
};
