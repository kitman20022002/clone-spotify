import React from 'react';
import './RoateDisc.css';
import gif from '../../assets/vinyldisc.png';

interface ISongRowProps {
  img: string,
  shouldRotate: boolean,
}

function SongRow(props: ISongRowProps) {
  const { img, shouldRotate } = props;
  return (
    <div className="disc__container">
      <img
        className={['disc__img', 'rotate', shouldRotate ? '' : 'pause'].join(' ')}
        src={gif}
        alt=""
      />
      <img
        className={['album__img', 'rotate', shouldRotate ? '' : 'pause'].join(' ')}
        src={img}
        alt=""
      />
    </div>
  );
}

export default SongRow;
