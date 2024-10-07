import { Field, ImageField, Text, Image, LinkField, Link } from '@sitecore-jss/sitecore-jss-nextjs';
import React from 'react';

type Record = {
  fields: {
    Title: Field<string>;
    Owner: Field<string>;
    Link: LinkField;
    Image: ImageField & { metadata?: { [key: string]: unknown } };
  };
};

type Fields = {
  Records: Record[];
};

type RecordsListProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: RecordsListProps): JSX.Element => {
  return (
    <div className="articleTitle">
      <h4 className="recordsTitle">Athletics World Records</h4>
      {props.fields?.Records?.map((record, key) => (
        <div className="recordWrapper" key={key} style={{ backgroundColor: props.params['Color'] }}>
          <Link
            className="linkWrapper1 linkWrapper2"
            field={record.fields?.Link}
            style={{ textDecoration: 'none' }}
          >
            <div className="p2 fPTthd">
              <Text
                tag="p"
                className="recordWrapperTitle recordWrapperTitle1"
                field={record.fields?.Title}
              />
              <Text tag="div" className="recordOwner" field={record.fields?.Owner} />
            </div>
            <Image
              className="recordImage1 recordImage2"
              tag="div"
              field={record.fields?.Image}
            ></Image>
          </Link>
        </div>
      ))}
    </div>
  );
};
