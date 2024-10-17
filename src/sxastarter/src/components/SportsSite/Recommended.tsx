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
  items: Record[];
};

type RecordsListProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: RecordsListProps): JSX.Element => {
  return (
    <>
      {props.fields?.items?.length > 0 && (
        <div className="articleTitle">
          <h4 className="recordsTitle">Recommended</h4>
          {props.fields?.items?.map((item, key) => (
            <div className="recordWrapper" key={key}>
              <Link
                className="linkWrapper1 linkWrapper2"
                field={item.fields?.Link}
                style={{ letterSpacing: '0.6' }}
              >
                <div className="p2 fPTthd">
                  <Text
                    tag="p"
                    className="recordWrapperTitle recordWrapperTitle1"
                    field={item.fields?.Title}
                  />
                </div>
                <Image
                  className="recordImage1 recordImage2"
                  tag="div"
                  field={item.fields?.Image}
                ></Image>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
