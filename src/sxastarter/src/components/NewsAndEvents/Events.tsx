import React from 'react';

export const Default = (): JSX.Element => {
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
              {/* Title field goes here */}
              Sitecore Celebrates International Womens Day
              {/* Title field goes here */}
            </div>
          </div>
        </div>
      </header>

      <section className="sc-dialogContent-toolbar">
        <div className="container">
          <div className="row sc-dialogContent-toolbar-back"></div>
        </div>
      </section>

      {/* Replace with a placeholder */}
      <section className="sc-applicationContent">
        <div className="col-md-12 sc-applicationContent-main">
          <div>
            <div className="col-md-3">
              {/* Image field goes here */}
              <img
                src="/img/Manchester International Womens.jpg"
                height={'100%'}
                width={'100%'}
                alt="Events page img"
              />
              {/* Image field goes here */}
            </div>
            <div className="col-md-9">
              {/* Content field goes here */}
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
              {/* Content field goes here */}
            </div>
          </div>
          <div className="col-md-12">
            {/* Date field goes here */}
            <p>08-Mar-2019 16:00</p>
            {/* Date field goes here */}
          </div>
        </div>
      </section>
      {/* Replace with a placeholder */}
    </>
  );
};
