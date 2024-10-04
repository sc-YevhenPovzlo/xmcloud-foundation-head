import { Field, ImageField, Text, Image, LinkField, Link } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

type Record = {
  fields: {
    Title: Field<string>;
    Link: LinkField;
    Image: ImageField & { metadata?: { [key: string]: unknown } };
  };
};

type Fields = {
  Recommended: Record[];
};

type RecordsListProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: RecordsListProps): JSX.Element => {
  return (
    <div className="articleTitle component content">
      <h4 className="recordsTitle">Recommended</h4>
      {props.fields?.Recommended?.map((recommended, key) => (
        <div className="recordWrapper" key={key}>
          <Link
            className="linkWrapper1 linkWrapper2"
            field={recommended.fields?.Link}
            style={{ letterSpacing: '0.6' }}
          >
            <div className="p2 fPTthd">
              <Text
                tag="p"
                className="recordWrapperTitle recordWrapperTitle1"
                field={recommended.fields?.Title}
              />
            </div>
            <Image
              className="recordImage1 recordImage2"
              tag="div"
              field={recommended.fields?.Image}
            ></Image>
          </Link>
        </div>
      ))}
    </div>
  );
};
