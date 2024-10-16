import {
  Field,
  ImageField,
  Text,
  Image,
  LinkField,
  useSitecoreContext,
  DateField,
  Link,
} from '@sitecore-jss/sitecore-jss-nextjs';
import { FieldMetadata } from '@sitecore-jss/sitecore-jss/layout';
import React from 'react';
import NextLink from 'next/link';

type Fields = {
  data: {
    datasource: {
      children: {
        results: [
          {
            children: {
              results: [
                {
                  children: {
                    results: Article[];
                  };
                }
              ];
            };
          }
        ];
      };
    };
  };
};

type Article = {
  title: Field<string>;
  intro: Field<string>;
  link: LinkField;
  date: FieldMetadata & {
    value?: string;
    editable?: string;
  };
  image: ImageField & { metadata?: { [key: string]: unknown } };
};

type ArticlesListProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: ArticlesListProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();

  return (
    <div className=" sectionWrapper" style={{ wordSpacing: 6 }}>
      <p className="sectionWrapper1">{sitecoreContext.route?.name}</p>
      <div>
        {props.fields?.data.datasource?.children?.results.map((article, key) => (
          <div className="jHOQrC articleTitle" key={key}>
            <div className=" dnuFEq sidePanel">
              <h3 className="jkSLwM">
                <Link
                  className="gPdGYK"
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  field={article?.children?.results[0].children?.results[0]?.link.jsonValue}
                  style={{ textDecoration: 'none' }}
                >
                  {article.children?.results[0].children?.results[0]?.title.value}
                </Link>
              </h3>

              <Text
                tag="p"
                className="iGesMc ckXsgs"
                field={article?.children?.results[0].children?.results[0]?.intro}
              />
              <p className="eQXKDZ jHDesy">
                <DateField
                  tag="span"
                  className="eRpqGn eliMJf"
                  field={article?.children?.results[0].children?.results[0]?.date}
                  render={(date) => date?.toDateString()}
                ></DateField>
              </p>
            </div>
            <div className="epfCUd sidePanel">
              <NextLink
                className="linkWrapper2"
                href={
                  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                  // @ts-expect-error
                  article?.children?.results[0].children?.results[0]?.link?.jsonValue?.value?.href
                }
              >
                <picture is="lazy-picture">
                  <Image
                    className="cVYiRX Image-cyf1s3-2 fWlePm ijdtKT"
                    style={{ innerHeight: '360px' }}
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-expect-error
                    field={article?.children?.results[0].children?.results[0]?.image.jsonValue}
                  ></Image>
                </picture>
              </NextLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
