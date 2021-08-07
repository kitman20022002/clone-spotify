import React from 'react';
import './SideBarOption.css';

interface ISideBarOptionProps {
  title: any;
  Icon?: any;
  onClick?: any;
}

function SideBarOption(props: ISideBarOptionProps) {
  // eslint-disable-next-line no-unused-vars
  const { title, Icon, onClick } = props;
  return (
    // eslint-disable-next-line max-len
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div className="sideBarOption" onClick={onClick}>
      {Icon && <Icon className="sideBarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SideBarOption;
