import React from 'react';

//// Uncomment inner section
// import {
//   Field,
//   ImageField,
//   Image,
//   RichText,
//   LinkField,
//   Link,
// } from '@sitecore-jss/sitecore-jss-nextjs';

// type NewsPostProps = {
//   fields: {
//     Content: Field<string>;
//     Image: ImageField & { metadata?: { [key: string]: unknown } };
//     Link: LinkField;
//   };
// };
//// Uncomment inner section

//// Uncomment substring /*{ fields }: NewsPostProps*/ on the next line by removing / and * symbols: export const Default = ({ fields }: NewsPostProps): JSX.Element => {
export const Default = (/*{ fields }: NewsPostProps*/): JSX.Element => {
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
            <div className="sc-applicationHeader-title">Global OnBoarding</div>
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
          <div>
            <div className="col-md-3">
              {/* Comment inner section */}
              <img src="/img/Dnipro Orientation2.jpg" alt="News post page img" />
              {/* Comment inner section */}
              {/* Uncomment inner section */}
              {/* <Image field={fields?.Image} /> */}
              {/* Uncomment inner section */}
            </div>
            <div className="col-md-9">
              {/* Comment inner section */}
              <h3
                className="lead"
                style={{
                  color: '#333333',
                  backgroundColor: '#ffffff',
                  margin: '0px 0px 14px',
                  letterSpacing: '0.3px',
                }}
              >
                The HR team is proud to announce that we kicked off our global onboarding and
                orientation program this March.
              </h3>
              <p
                style={{
                  color: '#333333',
                  backgroundColor: '#ffffff',
                  margin: '0px 0px 14px',
                  letterSpacing: '0.3px',
                }}
              >
                It has been a busy year so far for Sitecore HR!&nbsp;<strong>I Am Sitecore</strong>
                &nbsp;launched at the end of 2018 with the goal being to place a spotlight on the
                value of our people and expand our company vision:
              </p>
              <p
                style={{
                  color: '#333333',
                  backgroundColor: '#ffffff',
                  margin: '0px 0px 14px',
                  letterSpacing: '0.3px',
                }}
              >
                <em>
                  To make everyone feel like a preferred customer&nbsp;<strong>and employee</strong>
                  .
                </em>
              </p>
              {/* Comment inner section */}
              {/* Uncomment inner section */}
              {/* <RichText field={fields?.Content} /> */}
              {/* Uncomment inner section */}
            </div>
          </div>
          <div className="col-md-12">
            {/* Comment inner section */}
            <a href="https://www.sitecore.com/">Sitecore.com</a>
            {/* Comment inner section */}
            {/* Uncomment inner section */}
            {/* <Link field={fields?.Link} /> */}
            {/* Uncomment inner section */}
          </div>
        </div>
      </section>
    </>
  );
};
