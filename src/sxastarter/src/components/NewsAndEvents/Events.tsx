import { Field, ImageField, Image, RichText, DateField } from '@sitecore-jss/sitecore-jss-nextjs';
import { FieldMetadata } from '@sitecore-jss/sitecore-jss/layout';
import React from 'react';

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
    <section className="sc-applicationContent">
      <div className="col-md-12 sc-applicationContent-main">
        <div>
          <div className="col-md-3">
            <Image field={fields.Image} />
          </div>
          <div className="col-md-9">
            <RichText field={fields.Content} />
          </div>
        </div>
        <div className="col-md-12">
          <DateField
            tag="p"
            field={fields.Date}
            render={(date) => date?.toDateString()}
          ></DateField>
        </div>
      </div>
    </section>
  );
};
