import {
  Field,
  ImageField,
  Image,
  Text,
  DateField,
  LinkField,
  Link,
  useSitecoreContext,
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
  const { sitecoreContext } = useSitecoreContext();
  return (
    <div className="topNewsWrapper component content" style={{ wordSpacing: '5' }}>
      {sitecoreContext.pageEditing ? (
        <TopNews fields={fields} />
      ) : (
        <Link className="linkWrapper2" field={fields.Link} style={{ textDecoration: 'none' }}>
          <TopNews fields={fields} />
        </Link>
      )}
    </div>
  );
};

const TopNews = ({ fields }: NewsProps): JSX.Element => {
  return (
    <div className="topNewsWrapper1 topNewsWrapper2">
      <Image className="jgiabm " style={{ height: '100%' }} field={fields.Image}></Image>
      <div className="dOuWZW dFDZzI">
        <p className="iGesMc ekVZNJ ilAWGA recordWrapperTitle1">
          <span>Sports News</span>
        </p>
        <Text tag="h3" className="gfjGyl ixIYE" field={fields.Title} style={{ color: 'White' }} />
        <Text tag="p" className="iGesMc ekVZNJ ilAWGA" field={fields.Intro} />
        <p className="iGesMc gyuNqT jHDesy">
          <DateField
            tag="span"
            className="eRpqGn eliMJf"
            field={fields.Date}
            render={(date) => date?.toDateString()}
          ></DateField>
        </p>
      </div>
    </div>
  );
};
