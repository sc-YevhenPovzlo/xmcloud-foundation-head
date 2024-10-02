import React from 'react';
//import necessary types to render placeholders and fields and define properties of the component
import {
  RichText,
  ImageField,
  Image,
  Field,
  ComponentRendering,
  ComponentParams,
  Placeholder,
} from '@sitecore-jss/sitecore-jss-nextjs';

//Define fields that our component will get during rendering. In this component we render tree fields: Title, Content, Image
interface Fields {
  Title: Field<string>;
  Content: Field<string>;
  Image: ImageField & { metadata?: { [key: string]: unknown } };
}
interface ComponentProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
}

export const Default = (props: ComponentProps): JSX.Element => {
  return (
    <>
      <section className="sc-applicationContent component content">
        <div className="col-md-12 sc-applicationContent-main">
          <div className="col-md-3">
            {/* Define editalbe image field to render Image field */}
            <Image field={props.fields?.Image} />
          </div>
          <div className="col-md-9">
            {/* Define editalbe rich text field to render Content field */}
            <RichText
              tag="h3"
              style={{
                color: '#5c5c5c',
                backgroundColor: '#ffffff',
                margin: '21px 0px',
                letterSpacing: '0.3px',
              }}
              field={props.fields?.Content}
            />
          </div>
          <div className="col-md-12 ">
            {/* Define placeholder to add announces to the current component */}
            <Placeholder name="Announces" rendering={props.rendering} />
          </div>
        </div>
      </section>
    </>
  );
};
