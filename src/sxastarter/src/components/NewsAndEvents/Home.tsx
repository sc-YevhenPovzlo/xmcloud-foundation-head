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
              News and Events home page
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
          <div className="col-md-3">
            {/* Image field goes here */}
            <img src="/img/sitecore-logo.jpg" alt="Home page img" />
            {/* Image field goes here */}
          </div>
          <div className="col-md-9">
            {/* Content field goes here */}
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
            {/* Content field goes here */}
          </div>
          <div className="col-md-12 ">{/* Announces go here */}</div>
        </div>
      </section>
      {/* Replace with a placeholder */}
    </>
  );
};
