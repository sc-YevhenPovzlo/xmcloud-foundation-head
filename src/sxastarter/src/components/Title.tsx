import React from 'react';
import {
  Link,
  Text,
  useSitecoreContext,
  LinkField,
  TextField,
  DateField,
} from '@sitecore-jss/sitecore-jss-nextjs';

import { EditFrame } from '@sitecore-jss/sitecore-jss-nextjs';

interface Fields {
  data: {
    datasource: {
      url: {
        path: string;
        siteName: string;
      };
      field: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
    };
    contextItem: {
      url: {
        path: string;
        siteName: string;
      };
      field: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      blogDateTime: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
      blogDate: {
        jsonValue: {
          value: string;
          editable: string;
        };
      };
    };
  };
}

type TitleProps = {
  params: { [key: string]: string };
  fields: Fields;
};

type ComponentContentProps = {
  id: string;
  styles: string;
  children: JSX.Element;
};

const ComponentContent = (props: ComponentContentProps) => {
  const id = props.id;
  return (
    <div className={`component title ${props.styles}`} id={id ? id : undefined}>
      <div className="component-content">
        <div className="field-title">{props.children}</div>
      </div>
    </div>
  );
};

const getEditFrameProps = (dataSource?: string) => ({
  dataSource: dataSource ? { itemId: dataSource } : undefined,
  buttons: editFrameButtons,
  title: 'Edit date fields',
  tooltip: 'Edit date fields',
  cssClass: 'jss-edit-frame',
  parameters: {},
});

const editFrameButtons = [
  {
    header: 'FieldEditButton',
    icon: '/~/icon/Office/16x16/pencil.png',
    fields: ['blogDate', 'blogDateTime'],
    tooltip: 'Allows you to open field editor for specified fields',
  },
];

export const Default = (props: TitleProps): JSX.Element => {
  const datasource = props.fields?.data?.datasource || props.fields?.data?.contextItem;
  const { sitecoreContext } = useSitecoreContext();

  const text: TextField = {
    value: datasource?.field?.jsonValue?.value,
    editable: datasource?.field?.jsonValue?.editable,
  };
  const link: LinkField = {
    value: {
      href: datasource?.url?.path,
      title: datasource?.field?.jsonValue?.value,
      editable: true,
    },
  };
  if (sitecoreContext.pageState !== 'normal') {
    link.value.querystring = `sc_site=${datasource?.url?.siteName}`;
    if (!text.value) {
      text.value = 'Title field';
      link.value.href = '#';
    }
  }

  return (
    <ComponentContent styles={props.params.styles} id={props.params.RenderingIdentifier}>
      <>
        {sitecoreContext.pageState === 'edit' ? (
          <>
            <EditFrame {...getEditFrameProps(sitecoreContext.itemId)}>
              <Text field={text} />
              {`  `}
              <br></br>
              <DateField field={props.fields.data.contextItem.blogDate.jsonValue} />
              <DateField field={props.fields.data.contextItem.blogDateTime.jsonValue} />
            </EditFrame>
          </>
        ) : (
          <Link field={link}>
            <Text field={text} />
          </Link>
        )}
      </>
    </ComponentContent>
  );
};
