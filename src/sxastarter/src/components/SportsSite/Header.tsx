import { TextField } from '@sitecore-jss/sitecore-jss-nextjs';
import Link from 'next/link';
import React from 'react';

type ResultsFieldLink = {
  field: {
    title: TextField;
  };
  url: { path: string };
  children: {
    results: ResultsFieldLink[];
  };
};

interface Fields {
  data: {
    datasource: {
      children: {
        results: ResultsFieldLink[];
      };
      field: {
        title: TextField;
      };
      url: { path: string };
    };
  };
}

export type HeaderProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: HeaderProps): JSX.Element => {
  const datasource = props.fields?.data?.datasource;

  return (
    <nav className="topHeader" data-hook="header">
      <div className="kkVDHC idiolS csfUtv bdkrEV">
        <div className="sm-hide bPXQyn">
          <Link className="fpwFGm exwrrA" href={datasource.url.path}>
            {datasource.field.title.value}
          </Link>
          {datasource.children.results.map((child: ResultsFieldLink, key: number) => (
            <>
              <Link className="fpwFGm exwrrA" href={child.url.path} key={key}>
                {child.field.title.value}
              </Link>

              <ul className="ghOUtz">
                {child.children.results.map((subChild: ResultsFieldLink, key: number) => (
                  <li className="fFRuEB" key={key}>
                    <Link
                      target="_self"
                      className="JUrCQ linkWrapper2"
                      href={subChild.url.path}
                      style={{ letterSpacing: '0.6' }}
                      prefix="\00ab\00a0"
                    >
                      {subChild.field.title?.value}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          ))}
        </div>
      </div>
    </nav>
  );
};
