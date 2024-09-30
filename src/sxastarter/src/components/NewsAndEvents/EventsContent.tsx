import React from 'react';
//// Uncomment inner section
// import { Field, ImageField, Image, RichText, DateField } from '@sitecore-jss/sitecore-jss-nextjs';
// import { FieldMetadata } from '@sitecore-jss/sitecore-jss/layout';

// type EventProps = {
//   fields: {
//     Content: Field<string>;
//     Image: ImageField & { metadata?: { [key: string]: unknown } };
//     Date: FieldMetadata & {
//       value?: string;
//       editable?: string;
//     };
//   };
// };
//// Uncomment inner section

//// Uncomment substring /*{ fields }: EventProps*/ on the next line by removing / and * symbols: export const Default = ({ fields }: EventProps): JSX.Element => {
export const Default = (/*{ fields }: EventProps*/): JSX.Element => {
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
              Sitecore Celebrates International Womens Day
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
          <div>
            <div className="col-md-3">
              {/* Comment inner section */}
              <img
                src="/img/Manchester International Womens.jpg"
                height={'100%'}
                width={'100%'}
                alt="Events page img"
              />
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
                  color: '#5c5c5c',
                  backgroundColor: '#ffffff',
                  margin: '21px 0px',
                  letterSpacing: '0.3px',
                }}
              >
                Sitecore offices around the globe celebrated our female colleagues and all the women
                who have made a positive difference in all of our lives.
              </h3>
              <p
                style={{
                  color: '#333333',
                  backgroundColor: '#ffffff',
                  margin: '0px 0px 14px',
                  letterSpacing: '0.3px',
                }}
              >
                Sitecore employees celebrated this year&#39;s International Women&#39;s Day with
                festivities and charitable donation around the world.&nbsp; Many teams participating
                donated to Dress for Success, while others donated to local organizations geared
                toward empowering women.&nbsp; You can see some of highlights from Sitecore
                celebrations below.&nbsp;
              </p>
              {/* Comment inner section */}
              {/* Uncomment inner section */}
              {/* <RichText field={fields?.Content} /> */}
              {/* Uncomment inner section */}
            </div>
          </div>
          <div className="col-md-12">
            {/* Comment inner section */}
            <p>08-Mar-2019 16:00</p>
            {/* Comment inner section */}
            {/* Uncomment inner section */}
            {/* <DateField
              tag="p"
              field={fields?.Date}
              render={(date) => date?.toDateString()}
            ></DateField> */}
            {/* Uncomment inner section */}
          </div>
        </div>
      </section>
    </>
  );
};
