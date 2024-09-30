import React from 'react';

//// Uncomment inner section
// import {
//   RichText,
//   ImageField,
//   Image,
//   Field,
//   ComponentRendering,
//   ComponentParams,
// } from '@sitecore-jss/sitecore-jss-nextjs';

// interface Fields {
//   Title: Field<string>;
//   Content: Field<string>;
//   Image: ImageField & { metadata?: { [key: string]: unknown } };
// }

// interface ComponentProps {
//   rendering: ComponentRendering & { params: ComponentParams };
//   params: ComponentParams;
//   fields: Fields;
// }
//// Uncomment inner section

//// Uncomment inner section when performing Task 4
//import { Placeholder } from '@sitecore-jss/sitecore-jss-nextjs';
//// Uncomment inner section when performing Task 4

//// Uncomment substring /*props: ComponentProps*/ on the next line by removing / and * symbols. For example: export const Default = (props: ComponentProps): JSX.Element => {
export const Default = (/*props: ComponentProps*/): JSX.Element => {
  return (
    <>
      {/* Delete inner section */}
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
            {/* Comment inner section */}
            <img src="/img/sitecore-logo.jpg" alt="Home page img" />
            {/* Comment inner section */}
            {/* Uncomment inner section */}
            {/* <Image field={props.fields?.Image} /> */}
            {/* Uncomment inner section */}
          </div>
          <div className="col-md-9">
            {/* Comment inner section */}
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
            {/* Comment inner section */}
            {/* Uncomment inner section */}
            {/* <RichText
              tag="h3"
              style={{
                color: '#5c5c5c',
                backgroundColor: '#ffffff',
                margin: '21px 0px',
                letterSpacing: '0.3px',
              }}
              field={props.fields?.Content}
            /> */}
            {/* Uncomment inner section */}
          </div>
          {/* Uncomment inner section when performing Task 4 */}
          {/* <div className="col-md-12 ">
            <Placeholder name="Announces" rendering={props.rendering} />
          </div> */}
          {/* Uncomment inner section when performing Task 4 */}
        </div>
      </section>
    </>
  );
};
