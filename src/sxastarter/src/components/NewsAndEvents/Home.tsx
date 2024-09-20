import {
  RichText,
  Image,
  Field,
  ImageField,
  ComponentRendering,
  ComponentParams,
  Placeholder,
  useSitecoreContext,
} from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

interface Fields {
  Content: Field<string>;
  Image: ImageField & { metadata?: { [key: string]: unknown } };
}

interface ComponentProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
}

interface RouteFields {
  [key: string]: unknown;
  ShowHideAnnounces?: Field;
}

export const Default = (props: ComponentProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();
  const fields = sitecoreContext.route?.fields as RouteFields;
  const showAnnounces = fields?.ShowHideAnnounces?.value as boolean;

  return (
    <section className="sc-applicationContent">
      <div className="col-md-12 sc-applicationContent-main">
        <div className="col-md-3">
          <Image field={props.fields?.Image} />
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
            field={props.fields?.Content}
          />
        </div>
        {showAnnounces && (
          <div className="col-md-12 ">
            <Placeholder name="Announces" rendering={props.rendering} />
          </div>
        )}
      </div>
    </section>
  );
};
