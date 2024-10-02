import React from 'react';
//import necessary types to render fields and define properties of the component
import { Field, ImageField, Image, RichText, DateField } from '@sitecore-jss/sitecore-jss-nextjs';
import { FieldMetadata } from '@sitecore-jss/sitecore-jss/layout';

//Define fields that our component will get during rendering. In this component we render tree fields: Content, Image, Date
type EventProps = {
  fields: {
    Content: Field<string>;
    Image: ImageField & { metadata?: { [key: string]: unknown } };
    Date: FieldMetadata & {
      value?: string;
      editable?: string;
    };
  };
};

export const Default = ({ fields }: EventProps): JSX.Element => {
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
            {/* Define editalbe date field to render Date field */}
            <DateField
              tag="p"
              field={fields?.Date}
              render={(date) => date?.toDateString()}
            ></DateField>
          </div>
        </div>
      </section>
    </>
  );
};
