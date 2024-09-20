import {
  Field,
  Placeholder,
  ComponentRendering,
  ComponentParams,
  Text,
} from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

interface Fields {
  Title: Field<string>;
}

interface ComponentProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
  fields: Fields;
}

export const Default = (props: ComponentProps): JSX.Element => {
  return (
    <>
      <header className="sc-globalHeader">
        <div className="row sc-globalHeader-content">
          <div className="col-md-3">
            <div className="sc-globalHeader-startButton">
              <a className="sc-global-logo medium" title="Go to the start page" href="/"></a>
            </div>
          </div>
        </div>
      </header>

      <header className="sc-applicationHeader">
        <div className="sc-applicationHeader-row1">
          <div className="sc-applicationHeader-content">
            <div className="sc-applicationHeader-title">
              <Text field={props.fields?.Title} />
            </div>
          </div>
        </div>
      </header>

      <section className="sc-dialogContent-toolbar">
        <div className="container">
          <div className="row sc-dialogContent-toolbar-back"></div>
        </div>
      </section>
      <Placeholder name="NewsPlaceholder" rendering={props.rendering} />
    </>
  );
};
