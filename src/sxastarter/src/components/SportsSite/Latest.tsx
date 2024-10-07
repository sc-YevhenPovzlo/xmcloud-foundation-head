import React from 'react';
import {
  ComponentParams,
  ComponentRendering,
  Placeholder,
} from '@sitecore-jss/sitecore-jss-nextjs';

interface ComponentProps {
  rendering: ComponentRendering & { params: ComponentParams };
  params: ComponentParams;
}

export const Default = (props: ComponentProps): JSX.Element => {
  return (
    <div className=" sectionWrapper">
      <p className="sectionWrapper1">The Latest</p>
      <div>
        <Placeholder name="News" rendering={props.rendering} />
      </div>
    </div>
  );
};
