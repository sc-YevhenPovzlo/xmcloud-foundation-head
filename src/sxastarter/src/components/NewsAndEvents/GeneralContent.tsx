import React from 'react';

//// Uncomment inner section
// import {
//   Field,
//   ComponentRendering,
//   ComponentParams,
//   Placeholder,
//   Text,
// } from '@sitecore-jss/sitecore-jss-nextjs';

// interface Fields {
//   Title: Field<string>;
// }

// interface ComponentProps {
//   rendering: ComponentRendering & { params: ComponentParams };
//   params: ComponentParams;
//   fields: Fields;
// }
//// Uncomment inner section

//// Uncomment substring /*props: ComponentProps*/ on the next line by removing / and * symbols: export const Default = (props: ComponentProps): JSX.Element => {
export const Default = (/*props: ComponentProps*/): JSX.Element => {
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
              {/* Comment inner section */}
              News and Events home page
              {/* Comment inner section */}
              {/* Uncomment inner section */}
              {/* <Text field={props.fields?.Title} /> */}
              {/* Uncomment inner section */}
            </div>
          </div>
        </div>
      </header>

      <section className="sc-dialogContent-toolbar">
        <div className="container">
          <div className="row sc-dialogContent-toolbar-back"></div>
        </div>
      </section>

      {/* Delete inner section */}
      <section className="sc-applicationContent">
        <div className="col-md-12 sc-applicationContent-main">
          <div className="col-md-3">
            <img src="/img/sitecore-logo.jpg" alt="Home page img" />
          </div>
          <div className="col-md-9">
            <h3
              style={{
                color: '#5c5c5c',
                backgroundColor: '#ffffff',
                margin: '21px 0px',
                letterSpacing: '0.3px',
              }}
            >
              We&#39;re glad to see you on the News and Events microsite home page!
            </h3>
          </div>
        </div>
      </section>
      {/* Delete inner section */}
      {/* Uncomment inner section */}
      {/* <Placeholder name="ContentPlaceholder" rendering={props.rendering} /> */}
      {/* Uncomment inner section */}
    </>
  );
};
