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
              Global OnBoarding
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
              <img src="/img/Dnipro Orientation2.jpg" alt="News post page img" />
              {/* Image field goes here */}
            </div>
            <div className="col-md-9">
              {/* Content field goes here */}
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
              {/* Content field goes here */}
            </div>
          </div>
          <div className="col-md-12">
            {/*  Link field goes here */}
            <a href="https://www.sitecore.com/">Sitecore.com</a>
            {/* Link field goes here */}
          </div>
        </div>
      </section>
      {/* Replace with a placeholder */}
    </>
  );
};
