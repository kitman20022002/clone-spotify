import React from 'react';
import './SideBarOption.css';

interface ISideBarOptionProps {
  title: any,
  Icon?: any
}

function SideBarOption(props:ISideBarOptionProps) {
  // eslint-disable-next-line no-unused-vars
  const { title, Icon } = props;
  return (
    <div className="sideBarOption">
      {Icon && <Icon className="sideBarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SideBarOption;
