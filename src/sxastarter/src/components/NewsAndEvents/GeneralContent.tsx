import React from 'react';
//import necessary types to render placeholders and fields and define properties of the component
import {
  ComponentRendering,
  ComponentParams,
  Placeholder,
  Text,
  Field,
} from '@sitecore-jss/sitecore-jss-nextjs';

//Define fields that our component will get during rendering. In this component we render only one field named Title
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
              {/* Define editalbe text field to render Title field */}
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
      {/* Define placeholder to add different components to the current component */}
      <Placeholder name="ContentPlaceholder" rendering={props.rendering} />
    </>
  );
};
