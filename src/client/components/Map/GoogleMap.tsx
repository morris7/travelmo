import React from 'react';
import classNames from 'classnames';

interface IGoogleMapProps {
  className?: string;
  url: string;
}

const ROOT_CLASSNAME = 'GoogleMap';

const GoogleMap: React.FunctionComponent<IGoogleMapProps> = ({ className, url }) => {
  const classes = classNames(ROOT_CLASSNAME, className);

  return (
    <iframe
      src={url}
      className={classes}
    />
  );
}

export default GoogleMap;