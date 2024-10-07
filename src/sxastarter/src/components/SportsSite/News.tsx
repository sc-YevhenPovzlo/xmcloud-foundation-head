import {
  Field,
  ImageField,
  Image,
  Text,
  DateField,
  LinkField,
  Link,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { FieldMetadata } from '@sitecore-jss/sitecore-jss/layout';
import React from 'react';

type NewsProps = {
  fields: {
    Title: Field<string>;
    Intro: Field<string>;
    Date: FieldMetadata & {
      value?: string;
      editable?: string;
    };
    Link: LinkField;
    Image: ImageField & { metadata?: { [key: string]: unknown } };
  };
};

export const Default = ({ fields }: NewsProps): JSX.Element => {
  return (
    <div className="jHOQrC articleTitle">
      <div className=" dnuFEq sidePanel">
        <h3 className="jkSLwM">
          <Link className="gPdGYK" field={fields?.Link} style={{ textDecoration: 'none' }}>
            {fields?.Title.value}
          </Link>
        </h3>
        <Text tag="p" className="iGesMc ckXsgs" field={fields?.Intro} />
        <p className="eQXKDZ jHDesy">
          <DateField
            tag="span"
            className="eRpqGn eliMJf"
            field={fields?.Date}
            render={(date) => date?.toDateString()}
          ></DateField>
        </p>
      </div>
      <div className="epfCUd sidePanel">
        <Link className="gPdGYK" field={fields?.Link} style={{ letterSpacing: '0.6' }}>
          <picture is="lazy-picture" style={{ minWidth: '640px' }}>
            <Image
              className="cVYiRX Image-cyf1s3-2 fWlePm ijdtKT"
              style={{ innerHeight: '360px' }}
              field={fields?.Image}
            ></Image>
          </picture>
        </Link>
      </div>
    </div>
  );
};
